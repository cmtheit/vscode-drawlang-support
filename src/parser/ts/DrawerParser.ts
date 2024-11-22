// Generated from Drawer.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import DrawerListener from "./DrawerListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class DrawerParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly ID = 28;
	public static readonly NUM = 29;
	public static readonly HEX = 30;
	public static readonly WS = 31;
	public static readonly COM = 32;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_stat = 1;
	public static readonly RULE_originStat = 2;
	public static readonly RULE_rotStat = 3;
	public static readonly RULE_scaleStat = 4;
	public static readonly RULE_colorStat = 5;
	public static readonly RULE_pixsizeStat = 6;
	public static readonly RULE_forStat = 7;
	public static readonly RULE_drawStat = 8;
	public static readonly RULE_colorLit = 9;
	public static readonly RULE_value = 10;
	public static readonly RULE_expr = 11;
	public static readonly RULE_valueExpr = 12;
	public static readonly RULE_wrappedExpr = 13;
	public static readonly RULE_funcCallExpr = 14;
	public static readonly RULE_sigExpr = 15;
	public static readonly literalNames: (string | null)[] = [ null, "';'", 
                                                            "'origin'", 
                                                            "'is'", "'('", 
                                                            "','", "')'", 
                                                            "'rot'", "'scale'", 
                                                            "'color'", "'pixsize'", 
                                                            "'pixelsize'", 
                                                            "'for'", "'from'", 
                                                            "'to'", "'step'", 
                                                            "'draw'", "'\"'", 
                                                            "'''", "'rgb'", 
                                                            "'rgba'", "'hsl'", 
                                                            "'hsla'", "'#'", 
                                                            "'*'", "'/'", 
                                                            "'+'", "'-'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "ID", "NUM", 
                                                             "HEX", "WS", 
                                                             "COM" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "stat", "originStat", "rotStat", "scaleStat", "colorStat", "pixsizeStat", 
		"forStat", "drawStat", "colorLit", "value", "expr", "valueExpr", "wrappedExpr", 
		"funcCallExpr", "sigExpr",
	];
	public get grammarFileName(): string { return "Drawer.g4"; }
	public get literalNames(): (string | null)[] { return DrawerParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return DrawerParser.symbolicNames; }
	public get ruleNames(): string[] { return DrawerParser.ruleNames; }
	public get serializedATN(): number[] { return DrawerParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, DrawerParser._ATN, DrawerParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let localctx: ProgContext = new ProgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, DrawerParser.RULE_prog);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 81796) !== 0)) {
				{
				{
				this.state = 32;
				this.stat();
				this.state = 33;
				this.match(DrawerParser.T__0);
				}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public stat(): StatContext {
		let localctx: StatContext = new StatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, DrawerParser.RULE_stat);
		try {
			this.state = 47;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 40;
				this.originStat();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 41;
				this.rotStat();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 42;
				this.scaleStat();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 43;
				this.colorStat();
				}
				break;
			case 12:
			case 13:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 44;
				this.forStat();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 45;
				this.drawStat();
				}
				break;
			case 10:
			case 11:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 46;
				this.pixsizeStat();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public originStat(): OriginStatContext {
		let localctx: OriginStatContext = new OriginStatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, DrawerParser.RULE_originStat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 49;
			this.match(DrawerParser.T__1);
			this.state = 50;
			this.match(DrawerParser.T__2);
			this.state = 51;
			this.match(DrawerParser.T__3);
			this.state = 52;
			localctx._x = this.expr(0);
			this.state = 53;
			this.match(DrawerParser.T__4);
			this.state = 54;
			localctx._y = this.expr(0);
			this.state = 55;
			this.match(DrawerParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public rotStat(): RotStatContext {
		let localctx: RotStatContext = new RotStatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, DrawerParser.RULE_rotStat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 57;
			this.match(DrawerParser.T__6);
			this.state = 58;
			this.match(DrawerParser.T__2);
			this.state = 59;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public scaleStat(): ScaleStatContext {
		let localctx: ScaleStatContext = new ScaleStatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, DrawerParser.RULE_scaleStat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 61;
			this.match(DrawerParser.T__7);
			this.state = 62;
			this.match(DrawerParser.T__2);
			this.state = 63;
			this.match(DrawerParser.T__3);
			this.state = 64;
			localctx._x = this.expr(0);
			this.state = 65;
			this.match(DrawerParser.T__4);
			this.state = 66;
			localctx._y = this.expr(0);
			this.state = 67;
			this.match(DrawerParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public colorStat(): ColorStatContext {
		let localctx: ColorStatContext = new ColorStatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, DrawerParser.RULE_colorStat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 69;
			this.match(DrawerParser.T__8);
			this.state = 70;
			this.match(DrawerParser.T__2);
			this.state = 71;
			localctx._color = this.colorLit();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pixsizeStat(): PixsizeStatContext {
		let localctx: PixsizeStatContext = new PixsizeStatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, DrawerParser.RULE_pixsizeStat);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 73;
			_la = this._input.LA(1);
			if(!(_la===10 || _la===11)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 74;
			this.match(DrawerParser.T__2);
			this.state = 75;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forStat(): ForStatContext {
		let localctx: ForStatContext = new ForStatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, DrawerParser.RULE_forStat);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 77;
				this.match(DrawerParser.T__11);
				this.state = 78;
				localctx._dec = this.match(DrawerParser.ID);
				}
			}

			this.state = 81;
			this.match(DrawerParser.T__12);
			this.state = 82;
			localctx._start = this.expr(0);
			this.state = 83;
			this.match(DrawerParser.T__13);
			this.state = 84;
			localctx._end = this.expr(0);
			this.state = 85;
			this.match(DrawerParser.T__14);
			this.state = 86;
			localctx._step = this.expr(0);
			this.state = 87;
			this.match(DrawerParser.T__15);
			this.state = 88;
			this.match(DrawerParser.T__3);
			this.state = 89;
			localctx._x = this.expr(0);
			this.state = 90;
			this.match(DrawerParser.T__4);
			this.state = 91;
			localctx._y = this.expr(0);
			this.state = 92;
			this.match(DrawerParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public drawStat(): DrawStatContext {
		let localctx: DrawStatContext = new DrawStatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, DrawerParser.RULE_drawStat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 94;
			this.match(DrawerParser.T__15);
			this.state = 95;
			this.match(DrawerParser.T__3);
			this.state = 96;
			localctx._x = this.expr(0);
			this.state = 97;
			this.match(DrawerParser.T__4);
			this.state = 98;
			localctx._y = this.expr(0);
			this.state = 99;
			this.match(DrawerParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public colorLit(): ColorLitContext {
		let localctx: ColorLitContext = new ColorLitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, DrawerParser.RULE_colorLit);
		let _la: number;
		try {
			this.state = 155;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 28:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 101;
				localctx._name = this.match(DrawerParser.ID);
				}
				break;
			case 17:
			case 18:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 102;
				_la = this._input.LA(1);
				if(!(_la===17 || _la===18)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 103;
				localctx._name = this.match(DrawerParser.ID);
				this.state = 104;
				_la = this._input.LA(1);
				if(!(_la===17 || _la===18)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 105;
				this.match(DrawerParser.T__3);
				this.state = 106;
				localctx._red = this.expr(0);
				this.state = 107;
				this.match(DrawerParser.T__4);
				this.state = 108;
				localctx._green = this.expr(0);
				this.state = 109;
				this.match(DrawerParser.T__4);
				this.state = 110;
				localctx._blue = this.expr(0);
				this.state = 111;
				this.match(DrawerParser.T__5);
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 113;
				this.match(DrawerParser.T__18);
				this.state = 114;
				this.match(DrawerParser.T__3);
				this.state = 115;
				localctx._red = this.expr(0);
				this.state = 116;
				this.match(DrawerParser.T__4);
				this.state = 117;
				localctx._green = this.expr(0);
				this.state = 118;
				this.match(DrawerParser.T__4);
				this.state = 119;
				localctx._blue = this.expr(0);
				this.state = 120;
				this.match(DrawerParser.T__5);
				}
				break;
			case 20:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 122;
				this.match(DrawerParser.T__19);
				this.state = 123;
				this.match(DrawerParser.T__3);
				this.state = 124;
				localctx._red = this.expr(0);
				this.state = 125;
				this.match(DrawerParser.T__4);
				this.state = 126;
				localctx._green = this.expr(0);
				this.state = 127;
				this.match(DrawerParser.T__4);
				this.state = 128;
				localctx._blue = this.expr(0);
				this.state = 129;
				this.match(DrawerParser.T__4);
				this.state = 130;
				localctx._alpha = this.expr(0);
				this.state = 131;
				this.match(DrawerParser.T__5);
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 133;
				this.match(DrawerParser.T__20);
				this.state = 134;
				this.match(DrawerParser.T__3);
				this.state = 135;
				localctx._hue = this.expr(0);
				this.state = 136;
				this.match(DrawerParser.T__4);
				this.state = 137;
				localctx._saturation = this.expr(0);
				this.state = 138;
				this.match(DrawerParser.T__4);
				this.state = 139;
				localctx._lightness = this.expr(0);
				this.state = 140;
				this.match(DrawerParser.T__5);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 142;
				this.match(DrawerParser.T__21);
				this.state = 143;
				this.match(DrawerParser.T__3);
				this.state = 144;
				localctx._hue = this.expr(0);
				this.state = 145;
				this.match(DrawerParser.T__4);
				this.state = 146;
				localctx._saturation = this.expr(0);
				this.state = 147;
				this.match(DrawerParser.T__4);
				this.state = 148;
				localctx._lightness = this.expr(0);
				this.state = 149;
				this.match(DrawerParser.T__4);
				this.state = 150;
				localctx._alpha = this.expr(0);
				this.state = 151;
				this.match(DrawerParser.T__5);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 153;
				this.match(DrawerParser.T__22);
				this.state = 154;
				this.match(DrawerParser.HEX);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, DrawerParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 157;
			_la = this._input.LA(1);
			if(!(_la===28 || _la===29)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 22;
		this.enterRecursionRule(localctx, 22, DrawerParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 164;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 160;
				this.valueExpr();
				}
				break;
			case 2:
				{
				this.state = 161;
				this.wrappedExpr();
				}
				break;
			case 3:
				{
				this.state = 162;
				this.funcCallExpr();
				}
				break;
			case 4:
				{
				this.state = 163;
				this.sigExpr();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 174;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 172;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 5, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, DrawerParser.RULE_expr);
						this.state = 166;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 167;
						localctx._op2 = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===24 || _la===25)) {
						    localctx._op2 = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 168;
						this.expr(3);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, DrawerParser.RULE_expr);
						this.state = 169;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 170;
						localctx._op1 = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===26 || _la===27)) {
						    localctx._op1 = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 171;
						this.expr(2);
						}
						break;
					}
					}
				}
				this.state = 176;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public valueExpr(): ValueExprContext {
		let localctx: ValueExprContext = new ValueExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, DrawerParser.RULE_valueExpr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 177;
			this.value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wrappedExpr(): WrappedExprContext {
		let localctx: WrappedExprContext = new WrappedExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, DrawerParser.RULE_wrappedExpr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 179;
			this.match(DrawerParser.T__3);
			this.state = 180;
			this.expr(0);
			this.state = 181;
			this.match(DrawerParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public funcCallExpr(): FuncCallExprContext {
		let localctx: FuncCallExprContext = new FuncCallExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, DrawerParser.RULE_funcCallExpr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 183;
			this.match(DrawerParser.ID);
			this.state = 184;
			this.match(DrawerParser.T__3);
			this.state = 185;
			this.expr(0);
			this.state = 186;
			this.match(DrawerParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public sigExpr(): SigExprContext {
		let localctx: SigExprContext = new SigExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, DrawerParser.RULE_sigExpr);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 188;
			localctx._sig = this._input.LT(1);
			_la = this._input.LA(1);
			if(!(_la===26 || _la===27)) {
			    localctx._sig = this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 189;
			this.expr(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 11:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,32,192,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,1,0,1,0,1,0,5,
	0,36,8,0,10,0,12,0,39,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,48,8,1,1,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
	4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,3,7,80,8,7,1,7,1,7,1,7,1,7,1,
	7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,9,1,9,1,
	9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,
	9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,156,8,
	9,1,10,1,10,1,11,1,11,1,11,1,11,1,11,3,11,165,8,11,1,11,1,11,1,11,1,11,
	1,11,1,11,5,11,173,8,11,10,11,12,11,176,9,11,1,12,1,12,1,13,1,13,1,13,1,
	13,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,15,0,1,22,16,0,2,4,6,8,10,
	12,14,16,18,20,22,24,26,28,30,0,5,1,0,10,11,1,0,17,18,1,0,28,29,1,0,24,
	25,1,0,26,27,195,0,37,1,0,0,0,2,47,1,0,0,0,4,49,1,0,0,0,6,57,1,0,0,0,8,
	61,1,0,0,0,10,69,1,0,0,0,12,73,1,0,0,0,14,79,1,0,0,0,16,94,1,0,0,0,18,155,
	1,0,0,0,20,157,1,0,0,0,22,164,1,0,0,0,24,177,1,0,0,0,26,179,1,0,0,0,28,
	183,1,0,0,0,30,188,1,0,0,0,32,33,3,2,1,0,33,34,5,1,0,0,34,36,1,0,0,0,35,
	32,1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,1,1,0,0,0,39,37,
	1,0,0,0,40,48,3,4,2,0,41,48,3,6,3,0,42,48,3,8,4,0,43,48,3,10,5,0,44,48,
	3,14,7,0,45,48,3,16,8,0,46,48,3,12,6,0,47,40,1,0,0,0,47,41,1,0,0,0,47,42,
	1,0,0,0,47,43,1,0,0,0,47,44,1,0,0,0,47,45,1,0,0,0,47,46,1,0,0,0,48,3,1,
	0,0,0,49,50,5,2,0,0,50,51,5,3,0,0,51,52,5,4,0,0,52,53,3,22,11,0,53,54,5,
	5,0,0,54,55,3,22,11,0,55,56,5,6,0,0,56,5,1,0,0,0,57,58,5,7,0,0,58,59,5,
	3,0,0,59,60,3,22,11,0,60,7,1,0,0,0,61,62,5,8,0,0,62,63,5,3,0,0,63,64,5,
	4,0,0,64,65,3,22,11,0,65,66,5,5,0,0,66,67,3,22,11,0,67,68,5,6,0,0,68,9,
	1,0,0,0,69,70,5,9,0,0,70,71,5,3,0,0,71,72,3,18,9,0,72,11,1,0,0,0,73,74,
	7,0,0,0,74,75,5,3,0,0,75,76,3,22,11,0,76,13,1,0,0,0,77,78,5,12,0,0,78,80,
	5,28,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,81,1,0,0,0,81,82,5,13,0,0,82,83,
	3,22,11,0,83,84,5,14,0,0,84,85,3,22,11,0,85,86,5,15,0,0,86,87,3,22,11,0,
	87,88,5,16,0,0,88,89,5,4,0,0,89,90,3,22,11,0,90,91,5,5,0,0,91,92,3,22,11,
	0,92,93,5,6,0,0,93,15,1,0,0,0,94,95,5,16,0,0,95,96,5,4,0,0,96,97,3,22,11,
	0,97,98,5,5,0,0,98,99,3,22,11,0,99,100,5,6,0,0,100,17,1,0,0,0,101,156,5,
	28,0,0,102,103,7,1,0,0,103,104,5,28,0,0,104,156,7,1,0,0,105,106,5,4,0,0,
	106,107,3,22,11,0,107,108,5,5,0,0,108,109,3,22,11,0,109,110,5,5,0,0,110,
	111,3,22,11,0,111,112,5,6,0,0,112,156,1,0,0,0,113,114,5,19,0,0,114,115,
	5,4,0,0,115,116,3,22,11,0,116,117,5,5,0,0,117,118,3,22,11,0,118,119,5,5,
	0,0,119,120,3,22,11,0,120,121,5,6,0,0,121,156,1,0,0,0,122,123,5,20,0,0,
	123,124,5,4,0,0,124,125,3,22,11,0,125,126,5,5,0,0,126,127,3,22,11,0,127,
	128,5,5,0,0,128,129,3,22,11,0,129,130,5,5,0,0,130,131,3,22,11,0,131,132,
	5,6,0,0,132,156,1,0,0,0,133,134,5,21,0,0,134,135,5,4,0,0,135,136,3,22,11,
	0,136,137,5,5,0,0,137,138,3,22,11,0,138,139,5,5,0,0,139,140,3,22,11,0,140,
	141,5,6,0,0,141,156,1,0,0,0,142,143,5,22,0,0,143,144,5,4,0,0,144,145,3,
	22,11,0,145,146,5,5,0,0,146,147,3,22,11,0,147,148,5,5,0,0,148,149,3,22,
	11,0,149,150,5,5,0,0,150,151,3,22,11,0,151,152,5,6,0,0,152,156,1,0,0,0,
	153,154,5,23,0,0,154,156,5,30,0,0,155,101,1,0,0,0,155,102,1,0,0,0,155,105,
	1,0,0,0,155,113,1,0,0,0,155,122,1,0,0,0,155,133,1,0,0,0,155,142,1,0,0,0,
	155,153,1,0,0,0,156,19,1,0,0,0,157,158,7,2,0,0,158,21,1,0,0,0,159,160,6,
	11,-1,0,160,165,3,24,12,0,161,165,3,26,13,0,162,165,3,28,14,0,163,165,3,
	30,15,0,164,159,1,0,0,0,164,161,1,0,0,0,164,162,1,0,0,0,164,163,1,0,0,0,
	165,174,1,0,0,0,166,167,10,2,0,0,167,168,7,3,0,0,168,173,3,22,11,3,169,
	170,10,1,0,0,170,171,7,4,0,0,171,173,3,22,11,2,172,166,1,0,0,0,172,169,
	1,0,0,0,173,176,1,0,0,0,174,172,1,0,0,0,174,175,1,0,0,0,175,23,1,0,0,0,
	176,174,1,0,0,0,177,178,3,20,10,0,178,25,1,0,0,0,179,180,5,4,0,0,180,181,
	3,22,11,0,181,182,5,6,0,0,182,27,1,0,0,0,183,184,5,28,0,0,184,185,5,4,0,
	0,185,186,3,22,11,0,186,187,5,6,0,0,187,29,1,0,0,0,188,189,7,4,0,0,189,
	190,3,22,11,0,190,31,1,0,0,0,7,37,47,79,155,164,172,174];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DrawerParser.__ATN) {
			DrawerParser.__ATN = new ATNDeserializer().deserialize(DrawerParser._serializedATN);
		}

		return DrawerParser.__ATN;
	}


	static DecisionsToDFA = DrawerParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgContext extends ParserRuleContext {
	constructor(parser?: DrawerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public stat_list(): StatContext[] {
		return this.getTypedRuleContexts(StatContext) as StatContext[];
	}
	public stat(i: number): StatContext {
		return this.getTypedRuleContext(StatContext, i) as StatContext;
	}
    public get ruleIndex(): number {
    	return DrawerParser.RULE_prog;
	}
	public enterRule(listener: DrawerListener): void {
	    if(listener.enterProg) {
	 		listener.enterProg(this);
		}
	}
	public exitRule(listener: DrawerListener): void {
	    if(listener.exitProg) {
	 		listener.exitProg(this);
		}
	}
}


export class StatContext extends ParserRuleContext {
	constructor(parser?: DrawerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public originStat(): OriginStatContext {
		return this.getTypedRuleContext(OriginStatContext, 0) as OriginStatContext;
	}
	public rotStat(): RotStatContext {
		return this.getTypedRuleContext(RotStatContext, 0) as RotStatContext;
	}
	public scaleStat(): ScaleStatContext {
		return this.getTypedRuleContext(ScaleStatContext, 0) as ScaleStatContext;
	}
	public colorStat(): ColorStatContext {
		return this.getTypedRuleContext(ColorStatContext, 0) as ColorStatContext;
	}
	public forStat(): ForStatContext {
		return this.getTypedRuleContext(ForStatContext, 0) as ForStatContext;
	}
	public drawStat(): DrawStatContext {
		return this.getTypedRuleContext(DrawStatContext, 0) as DrawStatContext;
	}
	public pixsizeStat(): PixsizeStatContext {
		return this.getTypedRuleContext(PixsizeStatContext, 0) as PixsizeStatContext;
	}
    public get ruleIndex(): number {
    	return DrawerParser.RULE_stat;
	}
	public enterRule(listener: DrawerListener): void {
	    if(listener.enterStat) {
	 		listener.enterStat(this);
		}
	}
	public exitRule(listener: DrawerListener): void {
	    if(listener.exitStat) {
	 		listener.exitStat(this);
		}
	}
}


export class OriginStatContext extends ParserRuleContext {
	public _x!: ExprContext;
	public _y!: ExprContext;
	constructor(parser?: DrawerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
    public get ruleIndex(): number {
    	return DrawerParser.RULE_originStat;
	}
	public enterRule(listener: DrawerListener): void {
	    if(listener.enterOriginStat) {
	 		listener.enterOriginStat(this);
		}
	}
	public exitRule(listener: DrawerListener): void {
	    if(listener.exitOriginStat) {
	 		listener.exitOriginStat(this);
		}
	}
}


export class RotStatContext extends ParserRuleContext {
	constructor(parser?: DrawerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return DrawerParser.RULE_rotStat;
	}
	public enterRule(listener: DrawerListener): void {
	    if(listener.enterRotStat) {
	 		listener.enterRotStat(this);
		}
	}
	public exitRule(listener: DrawerListener): void {
	    if(listener.exitRotStat) {
	 		listener.exitRotStat(this);
		}
	}
}


export class ScaleStatContext extends ParserRuleContext {
	public _x!: ExprContext;
	public _y!: ExprContext;
	constructor(parser?: DrawerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
    public get ruleIndex(): number {
    	return DrawerParser.RULE_scaleStat;
	}
	public enterRule(listener: DrawerListener): void {
	    if(listener.enterScaleStat) {
	 		listener.enterScaleStat(this);
		}
	}
	public exitRule(listener: DrawerListener): void {
	    if(listener.exitScaleStat) {
	 		listener.exitScaleStat(this);
		}
	}
}


export class ColorStatContext extends ParserRuleContext {
	public _color!: ColorLitContext;
	constructor(parser?: DrawerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public colorLit(): ColorLitContext {
		return this.getTypedRuleContext(ColorLitContext, 0) as ColorLitContext;
	}
    public get ruleIndex(): number {
    	return DrawerParser.RULE_colorStat;
	}
	public enterRule(listener: DrawerListener): void {
	    if(listener.enterColorStat) {
	 		listener.enterColorStat(this);
		}
	}
	public exitRule(listener: DrawerListener): void {
	    if(listener.exitColorStat) {
	 		listener.exitColorStat(this);
		}
	}
}


export class PixsizeStatContext extends ParserRuleContext {
	constructor(parser?: DrawerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return DrawerParser.RULE_pixsizeStat;
	}
	public enterRule(listener: DrawerListener): void {
	    if(listener.enterPixsizeStat) {
	 		listener.enterPixsizeStat(this);
		}
	}
	public exitRule(listener: DrawerListener): void {
	    if(listener.exitPixsizeStat) {
	 		listener.exitPixsizeStat(this);
		}
	}
}


export class ForStatContext extends ParserRuleContext {
	public _dec!: Token;
	public _start!: ExprContext;
	public _end!: ExprContext;
	public _step!: ExprContext;
	public _x!: ExprContext;
	public _y!: ExprContext;
	constructor(parser?: DrawerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public ID(): TerminalNode {
		return this.getToken(DrawerParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return DrawerParser.RULE_forStat;
	}
	public enterRule(listener: DrawerListener): void {
	    if(listener.enterForStat) {
	 		listener.enterForStat(this);
		}
	}
	public exitRule(listener: DrawerListener): void {
	    if(listener.exitForStat) {
	 		listener.exitForStat(this);
		}
	}
}


export class DrawStatContext extends ParserRuleContext {
	public _x!: ExprContext;
	public _y!: ExprContext;
	constructor(parser?: DrawerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
    public get ruleIndex(): number {
    	return DrawerParser.RULE_drawStat;
	}
	public enterRule(listener: DrawerListener): void {
	    if(listener.enterDrawStat) {
	 		listener.enterDrawStat(this);
		}
	}
	public exitRule(listener: DrawerListener): void {
	    if(listener.exitDrawStat) {
	 		listener.exitDrawStat(this);
		}
	}
}


export class ColorLitContext extends ParserRuleContext {
	public _name!: Token;
	public _red!: ExprContext;
	public _green!: ExprContext;
	public _blue!: ExprContext;
	public _alpha!: ExprContext;
	public _hue!: ExprContext;
	public _saturation!: ExprContext;
	public _lightness!: ExprContext;
	constructor(parser?: DrawerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(DrawerParser.ID, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public HEX(): TerminalNode {
		return this.getToken(DrawerParser.HEX, 0);
	}
    public get ruleIndex(): number {
    	return DrawerParser.RULE_colorLit;
	}
	public enterRule(listener: DrawerListener): void {
	    if(listener.enterColorLit) {
	 		listener.enterColorLit(this);
		}
	}
	public exitRule(listener: DrawerListener): void {
	    if(listener.exitColorLit) {
	 		listener.exitColorLit(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: DrawerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NUM(): TerminalNode {
		return this.getToken(DrawerParser.NUM, 0);
	}
	public ID(): TerminalNode {
		return this.getToken(DrawerParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return DrawerParser.RULE_value;
	}
	public enterRule(listener: DrawerListener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: DrawerListener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	public _op2!: Token;
	public _op1!: Token;
	constructor(parser?: DrawerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public valueExpr(): ValueExprContext {
		return this.getTypedRuleContext(ValueExprContext, 0) as ValueExprContext;
	}
	public wrappedExpr(): WrappedExprContext {
		return this.getTypedRuleContext(WrappedExprContext, 0) as WrappedExprContext;
	}
	public funcCallExpr(): FuncCallExprContext {
		return this.getTypedRuleContext(FuncCallExprContext, 0) as FuncCallExprContext;
	}
	public sigExpr(): SigExprContext {
		return this.getTypedRuleContext(SigExprContext, 0) as SigExprContext;
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
    public get ruleIndex(): number {
    	return DrawerParser.RULE_expr;
	}
	public enterRule(listener: DrawerListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: DrawerListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
}


export class ValueExprContext extends ParserRuleContext {
	constructor(parser?: DrawerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return DrawerParser.RULE_valueExpr;
	}
	public enterRule(listener: DrawerListener): void {
	    if(listener.enterValueExpr) {
	 		listener.enterValueExpr(this);
		}
	}
	public exitRule(listener: DrawerListener): void {
	    if(listener.exitValueExpr) {
	 		listener.exitValueExpr(this);
		}
	}
}


export class WrappedExprContext extends ParserRuleContext {
	constructor(parser?: DrawerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return DrawerParser.RULE_wrappedExpr;
	}
	public enterRule(listener: DrawerListener): void {
	    if(listener.enterWrappedExpr) {
	 		listener.enterWrappedExpr(this);
		}
	}
	public exitRule(listener: DrawerListener): void {
	    if(listener.exitWrappedExpr) {
	 		listener.exitWrappedExpr(this);
		}
	}
}


export class FuncCallExprContext extends ParserRuleContext {
	constructor(parser?: DrawerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(DrawerParser.ID, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return DrawerParser.RULE_funcCallExpr;
	}
	public enterRule(listener: DrawerListener): void {
	    if(listener.enterFuncCallExpr) {
	 		listener.enterFuncCallExpr(this);
		}
	}
	public exitRule(listener: DrawerListener): void {
	    if(listener.exitFuncCallExpr) {
	 		listener.exitFuncCallExpr(this);
		}
	}
}


export class SigExprContext extends ParserRuleContext {
	public _sig!: Token;
	constructor(parser?: DrawerParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return DrawerParser.RULE_sigExpr;
	}
	public enterRule(listener: DrawerListener): void {
	    if(listener.enterSigExpr) {
	 		listener.enterSigExpr(this);
		}
	}
	public exitRule(listener: DrawerListener): void {
	    if(listener.exitSigExpr) {
	 		listener.exitSigExpr(this);
		}
	}
}
