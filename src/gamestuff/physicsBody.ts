import * as PIXI from "pixi.js";
import {Rect} from "./geometry";

export class PhysicsBody {
  dx = 0
  dy = 0
  ax = 0
  ay = 0
  constructor(public rect: Rect) {

  }

  physics(dt: number) {
    this.dx += this.ax * dt
    this.dy += this.ay * dt
    this.rect.left += this.dx * dt
    this.rect.top += this.dy * dt
  }

  moveImage(img: {anchor: {x: number, y: number} | number; x: number; y: number;}) {
    if (typeof(img.anchor) == "number") {
      if (img.anchor == 0.5) {
        img.x = this.rect.centerX
        img.y = this.rect.centerY
      } else {
        img.x = this.rect.left
        img.y = this.rect.top
      }
    } else {
      if (img.anchor.x == 0.5) {
        img.x = this.rect.centerX
      } else {
        img.x = this.rect.left
      }

      if (img.anchor.y == 0.5) {
        img.y = this.rect.centerY
      } else {
        img.y = this.rect.top
      }        
    }
  }
}
