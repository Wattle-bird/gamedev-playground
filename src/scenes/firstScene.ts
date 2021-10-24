import * as PIXI from "pixi.js";
import { Engine } from "../engine";
import { AbstractScene } from "./abstractScene";

export class FirstScene extends AbstractScene {
  constructor(e: Engine) {
    super(e)

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
