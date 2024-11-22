import SymbolTable from "./SymbolTable";
import { default as DrawerBaseListener } from "./ts/DrawerListener";
import * as Color from "color";
import * as math from "mathjs";

class DrawerListener extends DrawerBaseListener {
  private commands: any[];

  constructor() {
    super();
    this.commands = [];

    this.enterProg = (ctx: any) => {
      ctx.table = new SymbolTable();
      ctx.table.set("pi", math.pi);
      ctx.table.set("cos", math.cos);
      ctx.table.set("sin", math.sin);
      ctx.table.set("abs", math.abs);
      ctx.table.set("log", math.log);
      ctx.table.set("exp", math.exp);
      ctx.table.set("sqrt", math.sqrt);
      ctx.table.set("tan", math.tan);
    };

    this.enterEveryRule = (ctx: any): void => {
      if (ctx.parentCtx) {
        ctx.table = ctx.parentCtx.table;
      }
    };

    this.enterForStat = (ctx: any): void => {
      ctx.table = ctx.parentCtx.table.push();
    };

    this.exitExpr = (ctx: any): void => {
      if (ctx._op1) {
        switch (ctx._op1.text) {
          case "+":
            ctx.getValue = () =>
              ctx.expr(0).getValue() + ctx.expr(1).getValue();
            break;
          case "-":
            ctx.getValue = () =>
              ctx.expr(0).getValue() - ctx.expr(1).getValue();
            break;
        }
      } else if (ctx._op2) {
        switch (ctx._op2.text) {
          case "*":
            ctx.getValue = () =>
              ctx.expr(0).getValue() * ctx.expr(1).getValue();
            break;
          case "/":
            ctx.getValue = () =>
              ctx.expr(0).getValue() / ctx.expr(1).getValue();
            break;
        }
      } else {
        ctx.getValue = () => ctx.getChild(0).getValue();
      }
    };

    this.exitValueExpr = (ctx: any): void => {
      ctx.getValue = () => ctx.value().getValue();
    };

    this.exitWrappedExpr = (ctx: any): void => {
      ctx.getValue = () => ctx.expr().getValue();
    };

    this.exitFuncCallExpr = (ctx: any): void => {
      ctx.getValue = () =>
        ctx.table.get(ctx.ID().getText().toLowerCase())(ctx.expr().getValue());
    };

    this.exitSigExpr = (ctx: any): void => {
      ctx.getValue =
        ctx._sig.text === "+"
          ? () => ctx.expr().getValue()
          : () => -ctx.expr().getValue();
    };

    this.exitForStat = (ctx: any): void => {
      let initValue = ctx.expr(0).getValue();
      const endValue = ctx.expr(1).getValue();
      const step = ctx.expr(2).getValue();
      const hasVariable = ctx.ID() !== null;
      if (hasVariable) {
        ctx.table.set(ctx.ID().getText().toLowerCase(), initValue);
      }
      while (initValue <= endValue) {
        const xValue = ctx.expr(3).getValue();
        const yValue = ctx.expr(4).getValue();
        this.draw(xValue, yValue);
        ctx.table.set(ctx.ID().getText().toLowerCase(), initValue);
        initValue += step;
        ctx.table.pop();
      }
    };

    this.exitValue = (ctx: any): void => {
      ctx.getValue = () =>
        ctx.NUM()
          ? parseFloat(ctx.NUM().getText())
          : ctx.table.get(ctx.ID().getText().toLowerCase());
    };

    this.exitColorStat = (ctx: any): void => {
      this.color(ctx.colorLit().getColor());
    };

    this.exitColorLit = (ctx: any): void => {
      if (ctx._name) {
        ctx.getColor = () => [Color(ctx._name.text).array(), 255];
      } else if (ctx._red) {
        ctx.getColor = () => [
          ctx._red.getValue(),
          ctx._green.getValue(),
          ctx._blue.getValue(),
          ctx._alpha ? ctx._alpha.getValue() : 255,
        ];
      } else if (ctx._hue) {
        ctx.getColor = () => [
          ...Color.hsl(
            ctx._hue.getValue(),
            ctx._saturation.getValue(),
            ctx._lightness.getValue()
          )
            .rgb()
            .array(),
          ctx._alpha ? ctx._alpha.getValue() : 255,
        ];
      } else if (ctx.HEX()) {
        ctx.getColor = () => [Color(`#${ctx.HEX().getText()}`).array(), 255];
      } else {
        ctx.getColor = () => [Color("black").array(), 255];
      }
    };

    this.exitScaleStat = (ctx: any): void => {
      this.scale(ctx.expr(0).getValue(), parseFloat(ctx.expr(1).getValue()));
    };

    this.exitDrawStat = (ctx: any): void => {
      this.draw(parseFloat(ctx.expr(0).getValue()), ctx.expr(1).getValue());
    };

    this.exitOriginStat = (ctx: any): void => {
      this.origin(ctx.expr(0).getValue(), parseFloat(ctx.expr(1).getValue()));
    };

    this.exitRotStat = (ctx: any): void => {
      this.rotate(ctx.expr().getValue());
    };

    this.exitPixsizeStat = (ctx: any): void => {
      this.pixsize(ctx.expr().getValue());
    };

    this.exitProg = (ctx: any): void => {
      ctx.commands = this.commands;
    };
  }

  private draw(x: number, y: number): void {
    this.commands.push(["draw", x, y]);
  }

  private color(color: [number, number, number, number]): void {
    this.commands.push(["color", color]);
  }

  private scale(x: number, y: number): void {
    this.commands.push(["scale", x, y]);
  }

  private origin(x: number, y: number): void {
    this.commands.push(["origin", x, y]);
  }

  private rotate(angle: number): void {
    this.commands.push(["rotate", angle]);
  }

  private pixsize(size: number): void {
    this.commands.push(["pixsize", size]);
  }
}

export default DrawerListener;
