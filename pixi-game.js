import * as i from "pixi.js";
class o {
  constructor(a) {
    this.app = new i.Application({
      width: 800,
      height: 600,
      backgroundColor: 1087931
    }), a.appendChild(this.app.canvas);
    const t = new i.Text("Hello Pixi!", {
      fontFamily: "Arial",
      fontSize: 36,
      fill: 16777215
    });
    t.x = 100, t.y = 100, this.app.stage.addChild(t);
  }
  destroy() {
    this.app.destroy(!0, { children: !0 });
  }
}
export {
  o as PixiGame
};
