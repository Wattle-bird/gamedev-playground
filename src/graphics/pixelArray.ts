import * as PIXI from "pixi.js";
import {for2d} from "../utils"

export class PixelArray extends PIXI.Container {
  sprite: PIXI.Sprite;
  constructor() {
    super()
    this.sprite = new PIXI.Sprite()
    this.addChild(this.sprite)
  }

  drawPixels(w: number, h: number, callback: (arg0: any, arg1: any) => any) {
    const buffer = new Uint8Array(w * h * 4);
    for2d(w, h, (x: number, y: any) => {
      const color = callback(x, y)
      const r = color >> 16
      const g = (color >> 8) & 0xff
      const b = color & 0xff
      const offset = (x + y*w)*4
      buffer[offset] = r
      buffer[offset+1] = g
      buffer[offset+2] = b
      buffer[offset+3] = 255
    })
    const texture = new PIXI.Texture(PIXI.BaseTexture.fromBuffer(buffer, w, h))
    this.sprite.texture = texture
  }
}
