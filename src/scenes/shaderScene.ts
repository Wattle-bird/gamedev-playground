import * as PIXI from "pixi.js";
import { Engine } from "../engine";
import {PixelArray} from "../graphics/pixelArray";
import {sweetie16} from "../utils";
import { AbstractScene } from "./abstractScene";

export class ShaderScene extends AbstractScene {
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
      const r = Math.random
      //return sweetie16[(x/2 + s(y/4 + t/3) + s(t/5))&0xf]
      return sweetie16[((x/8) & (y/8+r()/2+s(t/9+x/29)/2) & 7) + ((t/29 * 5+ 5))& 15]
    })
  }
}
