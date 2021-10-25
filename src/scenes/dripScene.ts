import * as PIXI from "pixi.js";
import { Engine } from "../engine";
import {PixelArray} from "../graphics/pixelArray";
import {mod, sw16index, sweetie16} from "../utils";
import { AbstractScene } from "./abstractScene";

export class DripScene extends AbstractScene {
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
      const offset = s(x) + s(x/5) + s(x/9)+ s(x*3) + s(y/3) + s(y*x/2) + (x/9^y/9^t/79^t/56&3)

      const strength = y/10+offset/4+t/30
      return sw16index(mod(strength, 7)+5)
    })
  }
}
