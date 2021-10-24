import * as PIXI from "pixi.js";
import { AbstractScene } from "./scenes/abstractScene";
import { FirstScene } from "./scenes/firstScene";
import {ShaderScene} from "./scenes/shaderScene";


export class Engine {
  scenes = [
    ShaderScene,
    FirstScene,
  ]
  sceneNumber = 0;
  currentScene: AbstractScene
  time = 0

  constructor(public pixi: PIXI.Application) {
    this.startScene(0);
    this.pixi.ticker.add(this.update.bind(this))
  }

  startScene(num: number) {
    this.currentScene = new this.scenes[num](this);
    this.sceneNumber = num
  }

  update(dt: number) {
    this.time += dt
    this.currentScene.update(dt)
  }

  get width() {
    return this.pixi.screen.width
  }

  get height() {
    return this.pixi.screen.width
  }
}
