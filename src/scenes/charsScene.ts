import * as PIXI from "pixi.js";
import { Engine } from "../engine";
import { PixelArray } from "../graphics/pixelArray";
import { ShadowText, SimpleText } from "../graphics/text";
import { for1d, sw16index, sweetie16 } from "../utils";
import { AbstractScene } from "./abstractScene";

export class CharsScene extends AbstractScene {
  letters: ShadowText[] = []
  constructor(e: Engine) {
    super(e)

    const background = new PixelArray()
    this.add(background)
    background.drawPixels(192, 192, (x,y)=>{
      if ((x/8^y/8)&1) return sweetie16[15]
      return sweetie16[9]
    })

    for1d(255, (i)=>{
      const str = String.fromCharCode(i)
      this.add(new SimpleText((i%16)*8+8,((i/16)|0)*8+8, str))
    })

    const axesLabel = ' 0123456789ABCDEF\n0\n1\n2\n3\n4\n5\n6\n7\n8\n9\nA\nB\nC\nD\nE\nF'
    const axes = new ShadowText(0,0, axesLabel)
    axes.text.tint = sweetie16[4]
    this.add(axes)

  }

  update(dt: number) {
    const t = this.e.time;

    this.letters.forEach((letter, index) => {
      letter.text.tint = sw16index(t/10 + index/3)
      letter.y = 140 + Math.sin(t/40 - index/3)*20|0;
    })
  }

}
