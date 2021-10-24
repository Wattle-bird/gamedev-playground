import * as PIXI from "pixi.js";
import { Engine } from "../engine";
import {PixelArray} from "../graphics/pixelArray";
import {mod, sweetie16} from "../utils";
import { AbstractScene } from "./abstractScene";

export class PlasmaScene extends AbstractScene {
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
      let strength = s(x/22 - t/16) + s(y/17+t/25) * 2 + s(y/14 + x/7 + t/98) + s(y/9 + t/73)/2

      if (( x + y )%16<8) strength += 8
      return sweetie16[mod(strength|0, 16)]
    })
  }
}
