import * as PIXI from "pixi.js";
import { Engine } from "../engine";
import { AbstractScene } from "./abstractScene";

export class FontScene extends AbstractScene {
  constructor(e: Engine) {
    super(e)
    const style = new PIXI.TextStyle({
      fill: 0xffffff,
      fontFamily: "ModernDOS",
      fontSize: 8
    })
    const shadow = new PIXI.Text("adfsabd\n i @ i @", style)
    shadow.x = 1;
    shadow.y = 1;
    this.add(shadow)

    const text = new PIXI.Text("adfsabd\n i @ i @", style)
    text.x = 0;
    text.y = 0;
    text.tint = 0x222222
    this.add(text)
  }

  update(dt: number) {
  }

}
