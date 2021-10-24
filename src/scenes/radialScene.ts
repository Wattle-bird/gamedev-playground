import * as PIXI from "pixi.js";
import { Engine } from "../engine";
import {PixelArray} from "../graphics/pixelArray";
import {mod, sw16index} from "../utils";
import { AbstractScene } from "./abstractScene";

export class RadialScene extends AbstractScene {
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
      const r = Math.hypot(x-96,y-96)
      const h = Math.atan2(y-96,x-96)/Math.PI * 16+16
      let strength = s(r/9 -t/9) + h + t/37
      const ring = (r/60+t/19)/5 + 7

      return sw16index(mod(strength,8)+ring)
    })
  }
}
