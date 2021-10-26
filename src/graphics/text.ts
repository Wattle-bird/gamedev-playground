import * as PIXI from "pixi.js";

let FONT_SIZE = 8
console.log(navigator.userAgent)
if (navigator.userAgent.includes("Android") && navigator.userAgent.includes("Firefox")) {
  FONT_SIZE = 6.95 // why mozilla, whyyyyy
}

export class SimpleText extends PIXI.Text {
  constructor(x: number, y:number, text: string) {
    super(text, new PIXI.TextStyle({
      fill: 0xffffff,
      fontFamily: "ModernDOS",
      fontSize: FONT_SIZE
    }))

    this.x = x;
    this.y = y;
  }
}

export class ShadowText extends PIXI.Container {
  readonly text: SimpleText;
  readonly shadow: SimpleText;
  constructor(x:number, y:number, text: string) {
    super();
    this.text = new SimpleText(0, 0, text)
    this.shadow = new SimpleText(1, 1, text)
    this.shadow.tint = 0x000000
    this.addChild(this.shadow)
    this.addChild(this.text);
    this.x = x;
    this.y = y;
  }

  setText(text:string) {
    this.text.text = text;
    this.shadow.text = text;
  }
}
