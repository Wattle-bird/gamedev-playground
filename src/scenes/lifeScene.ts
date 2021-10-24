import * as PIXI from "pixi.js";
import { Engine } from "../engine";
import {for2d, makeGrid, mod} from "../utils";
import { AbstractScene } from "./abstractScene";

export class LifeScene extends AbstractScene {
  constructor(e: Engine) {
    super(e)

    const life = new LifeEngine()
    life.randomize()
    life.update()
    life.update()
    life.update()
    life.update()
    console.log(life.grid)

    const box = new PIXI.Graphics();
    box.beginFill(Math.random()*0xffffff|0);
    box.drawRect(16, 16, 192-32, 192-32);
    box.beginFill(Math.random()*0xffffff|0);
    box.drawCircle(96, 96, 96)
    this.add(box)
  }
  update(dt: number) {
  }
}

class LifeEngine {
  grid: number[][];
  newValue = 1
  constructor(public width=192, public height=192, public stayAlive = [2,3], public comeAlive = [3]) {
    this.grid = makeGrid(width, height, 0)
  }

  update() {
    for2d(this.width, this.height, (x,y)=>{
      const surrounding = this.howManySurround(x, y)
      if (this.get(x, y) > 0) {
        if (!this.stayAlive.includes(surrounding)) {
          this.set(x, y, 0)
        }
      } else {
        if (this.comeAlive.includes(surrounding)) {
          this.set(x, y, this.newValue)
        }
      }
    })
  }

  howManySurround(x,y) {
    var surrounding = 0
    for2d(3, 3, (u: number, v: number) => {
      if (u == 0 && v == 0) return;
      if(this.get(u-1, v-1) > 0) surrounding++
    })
    return surrounding
  }

  randomize(threshold = 0.03) {
    for2d(this.width, this.height,(x, y) => {
      if (Math.random() < threshold) {
        this.set(x, y, this.newValue)
      }
    })
  }

  get(x: number, y: number):number {
    return this.grid[mod(x, this.width)][mod(y, this.height)]
  }

  set(x: number, y: number, val: number) {
    this.grid[mod(x, this.width)][mod(y, this.height)] = val
  }
}
