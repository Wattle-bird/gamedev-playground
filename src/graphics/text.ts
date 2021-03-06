import * as PIXI from "pixi.js";

export class SimpleText extends PIXI.BitmapText {
  constructor(x: number, y:number, text: string) {
    super(text, {fontName: 'Modern DOS 437 8x8'})

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
