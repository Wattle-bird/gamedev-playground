import { Engine } from "../engine";
import * as PIXI from "pixi.js";


export abstract class AbstractScene {
  container: PIXI.Container;
  constructor(public e: Engine) {
    this.container = new PIXI.Container();
    e.pixi.stage.addChild(this.container)
  }

  abstract update(dt: number): void

  add(container: PIXI.Container) {
    this.container.addChild(container);
  }

  stop() {
    this.e.pixi.stage.removeChild(this.container)

  }
}