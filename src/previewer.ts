import * as vscode from "vscode";

import * as path from "path";
import { readFileSync } from "fs";
import drawer_parse from "./parser";

let previewers: { [pn: string]: DrawerPreviwerContentProvider } = {};

type ViewMode = "onlyOne" | "oneByOne";

function getProviderBy(uri: vscode.Uri) {
  return previewers[uri.toString()];
}

function getUnlockedProvider() {
  for (let key in previewers) {
    let previewer = previewers[key];
    if (!previewer.isLocked) {
      return previewer;
    }
  }
  return null;
}

interface IDrawerPreviewConfiguration {
  autoShow: boolean;
  viewMode: ViewMode;
}

/**
 * 默认预览器配置
 */
const DefaultPreviewConfig: IDrawerPreviewConfiguration = {
  autoShow: false,
  viewMode: "onlyOne",
};

interface TextEditorLike {
  readonly document: vscode.TextDocument;
}

function getPreviewConfiguration() {
  return vscode.workspace
    .getConfiguration("drawer")
    .get<IDrawerPreviewConfiguration>("preview", DefaultPreviewConfig);
}

function onDidChangeActiveTextEditor(e?: TextEditorLike, show?: boolean) {
  console.debug("onDidChangeActiveTextEditor", e, show);
  if (e && e.document && e.document.languageId == "drawer") {
    let previewer = getProviderBy(e.document.uri);
    let cfg = getPreviewConfiguration();
    // 创建预览器并展示
    if (!previewer) {
      let unlockedPreviewer = getUnlockedProvider();
      if (cfg.viewMode == "oneByOne" || !unlockedPreviewer) {
        if (!cfg.autoShow && !show) {
          return;
        }
        previewer = new DrawerPreviwerContentProvider();
        previewer.isLocked = cfg.viewMode == "oneByOne";
        previewer.isRootLocked = previewer.isLocked;
        previewer.show(e.document.uri);
        return;
      }
      previewer = unlockedPreviewer;
    }
    if (cfg.autoShow || e.document.uri.toString() !== previewer.previewUri) {
      previewer.show(e.document.uri);
    } else {
      const visibleTextEditor = vscode.window.visibleTextEditors.find(
        (te) => te.document.uri.toString() === e.document.uri.toString()
      );
      if (visibleTextEditor) {
        console.debug(
          "visibleTextEditor.viewColumn, webviewPanel.viewColumn",
          visibleTextEditor.viewColumn,
          previewer.webviewPanel!.viewColumn
        );
      } else {
        previewer.webviewPanel!.reveal(undefined, true);
      }
    }
  }
}

function preview(e?: any) {
  if (e) {
    const uri = <vscode.Uri>e;
    vscode.workspace.openTextDocument(uri).then((doc) => {
      onDidChangeActiveTextEditor({ document: doc }, true);
    });
    return;
  }
  var editor = vscode.window.activeTextEditor;
  if (editor) {
    onDidChangeActiveTextEditor(editor, true);
  }
}

export function registerPreviewer() {
  DrawerPreviwerContentProvider.$context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor((e) =>
      onDidChangeActiveTextEditor(e)
    ),
    vscode.commands.registerTextEditorCommand("drawer.preview", () =>
      preview()
    ),
    vscode.commands.registerCommand("_drawer.prewviewByUri", (uri) =>
      preview(uri)
    )
  );
}

export class DrawerPreviwerContentProvider implements vscode.Disposable {
  debug: boolean;
  webviewPanel?: vscode.WebviewPanel | null;
  disposable: vscode.Disposable;
  previewUri?: string;
  isRootLocked: boolean = false;
  isLocked: boolean = false;
  resPath: vscode.Uri;
  noSaveBackground: string | null = null;
  static $context: vscode.ExtensionContext;

  constructor() {
    this.debug =
      DrawerPreviwerContentProvider.$context.extensionMode ===
      vscode.ExtensionMode.Development;
    this.disposable = vscode.workspace.onDidChangeTextDocument((e) =>
      this.onDidChangeTextDocument(e)
    );
  }

  onDidChangeTextDocument(e: vscode.TextDocumentChangeEvent): any {
    if (this.isLocked) {
      // 锁定模式显示
      if (e.document.uri.toString() == this.previewUri) {
        this.showDocument(e.document);
      }
      return;
    }
    if (this.isDrawerLangDocument(e.document)) {
      // 显示活动的
      this.showDocument(e.document);
      return;
    }
  }

  show(e: vscode.Uri) {
    if (this.webviewPanel == null) {
      this.webviewPanel = vscode.window.createWebviewPanel(
        "drawer-preview",
        "Drawer Preview",
        {
          viewColumn: vscode.ViewColumn.Three,
          preserveFocus: true,
        },
        { enableScripts: true }
      );
      this.webviewPanel.webview.onDidReceiveMessage((e) =>
        this.onDidReceiveMessage(e)
      );
      this.webviewPanel.onDidDispose(() => this.onWebViewPanelDispose());
    }
    if (!this.webviewPanel.visible) {
      this.webviewPanel.reveal(vscode.ViewColumn.Three, true);
    }
    let docUri: vscode.Uri | null = null;
    docUri = e;
    vscode.workspace
      .openTextDocument(docUri)
      .then((doc) => this.showDocument(doc));
  }

  onWebViewPanelDispose() {
    delete previewers[this.previewUri!];
    this.webviewPanel = null;
  }

  onDidReceiveMessage(e: any): any {
    switch (e.action) {
      case "ready":
        this.webviewPanel!.webview.postMessage({
          action: "refresh",
          content: this.webviewPanel!.webview.asWebviewUri(
            vscode.Uri.file(this.previewUri!)
          ).toString(),
        });
        break;
      case "error":
        vscode.window.showErrorMessage(e.text);
        break;
      case "log":
        console.log(...e.data);
        break;
      default:
        console.warn(`unknown action message ${e.action}`);
        break;
    }
  }

  isDrawerLangDocument(document: vscode.TextDocument): boolean {
    return (
      document &&
      (/\.drawer$/.test(document.uri.path) || document.languageId == "drawer")
    );
  }

  private async showDocument(
    doc: vscode.TextDocument,
    refresh: boolean = false
  ) {
    if (!this.webviewPanel) {
      return;
    }
    if (this.previewUri !== doc.uri.toString()) {
      if (previewers[this.previewUri!] === this) {
        delete previewers[this.previewUri!];
      }
      this.previewUri = doc.uri.toString();
      previewers[this.previewUri] = this;
      this.webviewPanel.title = path.basename(doc.uri.fsPath) + "[Preview]";
    }
    if (!refresh) {
      this.webviewPanel.webview.html = readFileSync(
        DrawerPreviwerContentProvider.$context.asAbsolutePath("out/index.html"),
        "utf-8"
      );
    }
    this.webviewPanel.webview.postMessage({
      action: "refresh",
      data: drawer_parse(doc.getText()),
    });
    this.webviewPanel.webview.onDidReceiveMessage((e) =>
      this.onDidReceiveMessage(e)
    );
  }

  dispose() {
    this.disposable.dispose();
  }
}
