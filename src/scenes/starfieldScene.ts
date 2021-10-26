import * as PIXI from "pixi.js";
import { Engine } from "../engine";
import {Vector} from "../gamestuff/geometry";
import {PixelArray} from "../graphics/pixelArray";
import {clamp, for1d, mod, rgb, sweetie16} from "../utils";
import { AbstractScene } from "./abstractScene";

export class StarfieldScene extends AbstractScene {
  gfx: PIXI.Graphics;
  stars: {x:number,y:number,age:number}[]
  constructor(e: Engine) {
    super(e)

    this.gfx = new PIXI.Graphics()
    this.add(this.gfx)

    this.stars = []

    for1d(96, ()=>{
      const x = Math.random()*192
      const y = Math.random()*192
      this.stars.push({x,y,age:0})
    })
  }

  update(dt: number) {
    this.stars.forEach((star)=>{
      const dx = (star.x - 96)/96*dt
      const dy = (star.y - 96)/96*dt
      star.x += dx
      star.y += dy
      star.age++

      if (star.x < 0 || star.y < 0 || star.x > 192 || star.y > 192){
        star.x = Math.random()*192
        star.y = Math.random()*192
        star.age = 0
      }
    })

    this.draw()
  }

  draw() {
    this.gfx.clear()
    this.stars.forEach((star) => {
      const brightness = clamp(0, 255,star.age/60*256)
      this.gfx.beginFill(rgb(brightness, brightness, brightness))
      this.gfx.drawRect(star.x, star.y, 1, 1)
    })

  }
}
