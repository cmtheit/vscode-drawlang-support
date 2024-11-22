import { CommonTokenStream, ParseTreeWalker, CharStream } from "antlr4";
import DrawerListener from "./DrawerListener";
import DrawerLexer from "./ts/DrawerLexer";
import DrawerParser from "./ts/DrawerParser";

export function drawerParse(src: string): Array<[string, any]> {
  // 创建词法分析器
  const lexer = new DrawerLexer(new CharStream(src));

  // 创建词标记流
  const stream = new CommonTokenStream(lexer);

  // 创建语法解析器
  const parser = new DrawerParser(stream);

  // 创建解析树
  const tree = parser.prog();

  const walker = new ParseTreeWalker();

  walker.walk(new DrawerListener(), tree);

  // @ts-ignore
  return tree.commands;
}

export default drawerParse;
