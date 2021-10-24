import * as PIXI from "pixi.js";
import { Engine } from "../engine";
import {PixelArray} from "../graphics/pixelArray";
import {mod, sweetie16} from "../utils";
import { AbstractScene } from "./abstractScene";

export class DitherScene extends AbstractScene {
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
      let strength = s(x/22 - t/16) + s(y/17+t/25) * 2 + s(y/14 + x/7 + t/38) + s(y/4 + t/24)/2 + s(x/88 + y/9 + t/23)

      if ( x%2 ) strength += 0.25
      if ( y%2 ) strength += 0.5
      return sweetie16[mod(strength|0, 16)]
    })
  }
}
