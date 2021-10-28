import * as PIXI from "pixi.js";
import { Engine } from "../engine";
import {for2d} from "../utils";
import { AbstractScene } from "./abstractScene";

export class SixteenScene extends AbstractScene {
  constructor(e: Engine) {
    super(e)

    const gfx = new PIXI.Graphics()
    gfx.beginFill(0xffffff)
    for2d(12, 12, (x, y)=>{
      if (( x ^ y )&1) {
        gfx.drawRect(x*16, y*16, 16, 16)
      }
    })
    this.add(gfx)
  }

  update(dt: number) {
  }

}
