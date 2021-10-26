import * as PIXI from "pixi.js";

export class SimpleText extends PIXI.Text {
  constructor(text: string) {
    super(text, new PIXI.TextStyle({
      fill: 0xffffff,
      fontFamily: "ModernDOS",
      fontSize: 8
    }))
  }
}