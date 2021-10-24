import * as PIXI from "pixi.js";
import {for2d} from "../utils";

export class Canvas extends PIXI.Graphics {
  pixel(x: number, y:number, color:number) {
    this.beginFill(color)
    this.drawRect(x, y, 1, 1)
    this.endFill()
  }
  
  drawPixels(w: number, h: number, callback: Function) {
    for2d(w, h, (x: number, y: number)=>{
      this.pixel(x, y, callback(x, y))
    })
  }
}
