import * as PIXI from "pixi.js";
import { Engine } from "../engine";
import {PixelArray} from "../graphics/pixelArray";
import { ShadowText } from "../graphics/text";
import {mod, sw16index, sweetie16} from "../utils";
import { AbstractScene } from "./abstractScene";

export class CoordScene extends AbstractScene {
  pa: PixelArray;
  constructor(e: Engine) {
    super(e)

    this.pa = new PixelArray()
    this.add(this.pa)
    
    const title = new ShadowText(0,0,'Coords: X and Radius')
    this.add(title)

  }
  update(dt: number) {
    this.pa.drawPixels(this.e.width, this.e.height, (x: any, y: any) => {
      const s = Math.sin
      const t = this.e.time
      const r = Math.hypot(x-96, y-96)

      const strength = (x/8 ^ ( r+t+s(t/15)*30)/8) & 7
      return sw16index(mod(strength, 7)+1)
    })
  }
}
