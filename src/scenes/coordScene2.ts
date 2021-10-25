import * as PIXI from "pixi.js";
import { Engine } from "../engine";
import {PixelArray} from "../graphics/pixelArray";
import {mod, sw16index, sweetie16} from "../utils";
import { AbstractScene } from "./abstractScene";

export class CoordScene2 extends AbstractScene {
  pa: PixelArray;
  constructor(e: Engine) {
    super(e)

    this.pa = new PixelArray()
    this.add(this.pa)
  }
  update(dt: number) {
    this.pa.drawPixels(this.e.width, this.e.height, (x: any, y: any) => {
      const s = Math.sin
      const t = this.e.time
      const theta = Math.atan2(y-96, x-96)

      let strength = (y/8 ^ ( theta+t/128)* 8)&7

      const frameSin = s(t/128)*3.5
      let palOffset=8
      if (s(x*23)+s(x)+s(x*5)>frameSin) palOffset=0
      return sw16index(strength+palOffset)
    })
  }
}
