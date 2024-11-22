// Generated from Drawer.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgContext } from "./DrawerParser.js";
import { StatContext } from "./DrawerParser.js";
import { OriginStatContext } from "./DrawerParser.js";
import { RotStatContext } from "./DrawerParser.js";
import { ScaleStatContext } from "./DrawerParser.js";
import { ColorStatContext } from "./DrawerParser.js";
import { PixsizeStatContext } from "./DrawerParser.js";
import { ForStatContext } from "./DrawerParser.js";
import { DrawStatContext } from "./DrawerParser.js";
import { ColorLitContext } from "./DrawerParser.js";
import { ValueContext } from "./DrawerParser.js";
import { ExprContext } from "./DrawerParser.js";
import { ValueExprContext } from "./DrawerParser.js";
import { WrappedExprContext } from "./DrawerParser.js";
import { FuncCallExprContext } from "./DrawerParser.js";
import { SigExprContext } from "./DrawerParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `DrawerParser`.
 */
export default class DrawerListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `DrawerParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `DrawerParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;
	/**
	 * Enter a parse tree produced by `DrawerParser.stat`.
	 * @param ctx the parse tree
	 */
	enterStat?: (ctx: StatContext) => void;
	/**
	 * Exit a parse tree produced by `DrawerParser.stat`.
	 * @param ctx the parse tree
	 */
	exitStat?: (ctx: StatContext) => void;
	/**
	 * Enter a parse tree produced by `DrawerParser.originStat`.
	 * @param ctx the parse tree
	 */
	enterOriginStat?: (ctx: OriginStatContext) => void;
	/**
	 * Exit a parse tree produced by `DrawerParser.originStat`.
	 * @param ctx the parse tree
	 */
	exitOriginStat?: (ctx: OriginStatContext) => void;
	/**
	 * Enter a parse tree produced by `DrawerParser.rotStat`.
	 * @param ctx the parse tree
	 */
	enterRotStat?: (ctx: RotStatContext) => void;
	/**
	 * Exit a parse tree produced by `DrawerParser.rotStat`.
	 * @param ctx the parse tree
	 */
	exitRotStat?: (ctx: RotStatContext) => void;
	/**
	 * Enter a parse tree produced by `DrawerParser.scaleStat`.
	 * @param ctx the parse tree
	 */
	enterScaleStat?: (ctx: ScaleStatContext) => void;
	/**
	 * Exit a parse tree produced by `DrawerParser.scaleStat`.
	 * @param ctx the parse tree
	 */
	exitScaleStat?: (ctx: ScaleStatContext) => void;
	/**
	 * Enter a parse tree produced by `DrawerParser.colorStat`.
	 * @param ctx the parse tree
	 */
	enterColorStat?: (ctx: ColorStatContext) => void;
	/**
	 * Exit a parse tree produced by `DrawerParser.colorStat`.
	 * @param ctx the parse tree
	 */
	exitColorStat?: (ctx: ColorStatContext) => void;
	/**
	 * Enter a parse tree produced by `DrawerParser.pixsizeStat`.
	 * @param ctx the parse tree
	 */
	enterPixsizeStat?: (ctx: PixsizeStatContext) => void;
	/**
	 * Exit a parse tree produced by `DrawerParser.pixsizeStat`.
	 * @param ctx the parse tree
	 */
	exitPixsizeStat?: (ctx: PixsizeStatContext) => void;
	/**
	 * Enter a parse tree produced by `DrawerParser.forStat`.
	 * @param ctx the parse tree
	 */
	enterForStat?: (ctx: ForStatContext) => void;
	/**
	 * Exit a parse tree produced by `DrawerParser.forStat`.
	 * @param ctx the parse tree
	 */
	exitForStat?: (ctx: ForStatContext) => void;
	/**
	 * Enter a parse tree produced by `DrawerParser.drawStat`.
	 * @param ctx the parse tree
	 */
	enterDrawStat?: (ctx: DrawStatContext) => void;
	/**
	 * Exit a parse tree produced by `DrawerParser.drawStat`.
	 * @param ctx the parse tree
	 */
	exitDrawStat?: (ctx: DrawStatContext) => void;
	/**
	 * Enter a parse tree produced by `DrawerParser.colorLit`.
	 * @param ctx the parse tree
	 */
	enterColorLit?: (ctx: ColorLitContext) => void;
	/**
	 * Exit a parse tree produced by `DrawerParser.colorLit`.
	 * @param ctx the parse tree
	 */
	exitColorLit?: (ctx: ColorLitContext) => void;
	/**
	 * Enter a parse tree produced by `DrawerParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `DrawerParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
	/**
	 * Enter a parse tree produced by `DrawerParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `DrawerParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
	/**
	 * Enter a parse tree produced by `DrawerParser.valueExpr`.
	 * @param ctx the parse tree
	 */
	enterValueExpr?: (ctx: ValueExprContext) => void;
	/**
	 * Exit a parse tree produced by `DrawerParser.valueExpr`.
	 * @param ctx the parse tree
	 */
	exitValueExpr?: (ctx: ValueExprContext) => void;
	/**
	 * Enter a parse tree produced by `DrawerParser.wrappedExpr`.
	 * @param ctx the parse tree
	 */
	enterWrappedExpr?: (ctx: WrappedExprContext) => void;
	/**
	 * Exit a parse tree produced by `DrawerParser.wrappedExpr`.
	 * @param ctx the parse tree
	 */
	exitWrappedExpr?: (ctx: WrappedExprContext) => void;
	/**
	 * Enter a parse tree produced by `DrawerParser.funcCallExpr`.
	 * @param ctx the parse tree
	 */
	enterFuncCallExpr?: (ctx: FuncCallExprContext) => void;
	/**
	 * Exit a parse tree produced by `DrawerParser.funcCallExpr`.
	 * @param ctx the parse tree
	 */
	exitFuncCallExpr?: (ctx: FuncCallExprContext) => void;
	/**
	 * Enter a parse tree produced by `DrawerParser.sigExpr`.
	 * @param ctx the parse tree
	 */
	enterSigExpr?: (ctx: SigExprContext) => void;
	/**
	 * Exit a parse tree produced by `DrawerParser.sigExpr`.
	 * @param ctx the parse tree
	 */
	exitSigExpr?: (ctx: SigExprContext) => void;
}

