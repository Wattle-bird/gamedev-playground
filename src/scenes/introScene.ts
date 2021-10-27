import * as PIXI from "pixi.js";
import { Engine } from "../engine";
import { PixelArray } from "../graphics/pixelArray";
import { ShadowText, SimpleText } from "../graphics/text";
import { sw16index, sweetie16 } from "../utils";
import { AbstractScene } from "./abstractScene";

export class IntroScene extends AbstractScene {
  letters: ShadowText[] = []
  background: PixelArray;
  constructor(e: Engine) {
    super(e)

    this.background = new PixelArray()
    this.add(this.background)


    const text1 = new SimpleText(96,56,"Luna's little collection of graphics and game dev experiments\n:)")
    text1.align = "center"
    text1.maxWidth = 128
    text1.anchor = 0.5
    this.add(text1)
  }

  update(dt: number) {
    const t = this.e.time;
    this.background.drawPixels(192, 192, (x,y)=>{
      const theta = Math.atan2(y+32, x-96)
      const color = (( 120/( y+32 ) ) ^ ( theta*2 + t/30 ))&1
      return sw16index(color)
    })
  }

}
