import * as PIXI from "pixi.js";
import { Engine } from "../engine";
import { PixelArray } from "../graphics/pixelArray";
import {for2d, makeGrid, mod, sweetie16} from "../utils";
import { AbstractScene } from "./abstractScene";

export class LifeDecayScene extends AbstractScene {
  image: PixelArray;
  life: LifeEngine;
  lastUpdate = 0
  constructor(e: Engine) {
    super(e)

    this.life = new LifeEngine()
    this.life.grid.randomize()

    this.image = new PixelArray()

    this.add(this.image)
  }
  update(dt: number) {
    if (this.e.time > this.lastUpdate + 6) {
      this.lastUpdate = this.e.time
      this.life.update()
      this.image.drawPixels(192, 192, (x, y) => {
        let value = this.life.grid.get(x, y)
        if (value) value++
        return sweetie16[value]
      })
    }
  }
}

class LifeEngine {
  newValue = 4
  grid: WrappingGrid;
  nextGrid: WrappingGrid;
  constructor(public width=192, public height=192, public stayAlive = [2,3], public comeAlive = [3]) {
    this.grid = new WrappingGrid(width, height)
    this.nextGrid = new WrappingGrid(width, height)
  }

  update() {
    this.decay()
    for2d(this.width, this.height, (x,y)=>{
      const surrounding = this.grid.howManySurround(x, y)
      if (this.grid.get(x, y) > 0) {
        if (!this.stayAlive.includes(surrounding)) {
          this.nextGrid.set(x, y, 0)
        }
        else {
          this.nextGrid.set(x, y, this.grid.get(x, y))
        }
      } else {
        if (this.comeAlive.includes(surrounding)) {
          this.nextGrid.set(x, y, this.newValue)
        }
        else {
          this.nextGrid.set(x, y, 0)
        }
      }
    })
    this.flip();
  }

  flip() {
    const tmp = this.grid;
    this.grid = this.nextGrid;
    this.nextGrid = tmp;
  }

  decay() {
    for2d(this.width, this.height, (x,y) => {
      const current = this.grid.get(x,y)
      if (current > 1) {
        this.grid.set(x, y, current-1)
      }
    })
  }


}

class WrappingGrid {
  grid: number[][];
  constructor(public width = 192, public height = 192) {
    this.grid = makeGrid(width, height, 0)
  }

  howManySurround(x,y) {
    let surrounding = 0
    for2d(3, 3, (u: number, v: number) => {
      if (u == 1 && v == 1) return;
      if(this.get(x+u-1, y+v-1) > 0) surrounding++
    })
    return surrounding
  }

  randomize(threshold = 0.1) {
    for2d(this.width, this.height,(x, y) => {
      if (Math.random() < threshold) {
        this.set(x, y, 1)
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
