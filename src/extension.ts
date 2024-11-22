import { ExtensionContext } from "vscode";

import { DrawerPreviwerContentProvider, registerPreviewer } from "./previewer";

export function activate(context: ExtensionContext) {
  DrawerPreviwerContentProvider.$context = context;
  registerPreviewer();
}
