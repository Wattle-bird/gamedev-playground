import * as PIXI from "pixi.js";
import { AbstractScene } from "./scenes/abstractScene";
import {PlasmaScene} from "./scenes/plasmaScene";
import {RadialScene} from "./scenes/radialScene";
import {ShaderScene} from "./scenes/shaderScene";
import {mod} from "./utils";


export class Engine {
  scenes = [
    ShaderScene,
    PlasmaScene,
    RadialScene
  ]
  sceneNumber = 0;
  currentScene: AbstractScene
  time = 0

  constructor(public pixi: PIXI.Application) {
    this.startScene(this.scenes.length-1);
    this.pixi.ticker.add(this.update.bind(this))
    this.setupButtons()
  }

  startScene(num: number) {
    this.currentScene = new this.scenes[num](this);
    this.sceneNumber = num
  }

  stopScene() {
    this.currentScene.stop()
  }

  update(dt: number) {
    this.time += dt
    this.currentScene.update(dt)
  }

  setupButtons() {
    document.querySelector("#prev").addEventListener("click", this.loadPrevScene.bind(this))
    document.querySelector("#next").addEventListener("click", this.loadNextScene.bind(this))
  }

  loadPrevScene() {
    console.log(1)
    this.stopScene()
    const sceneNum = mod(this.sceneNumber+1, this.scenes.length)
    this.startScene(sceneNum)
  }

  loadNextScene() {
    this.stopScene()
    const sceneNum = mod(this.sceneNumber-1, this.scenes.length)
    this.startScene(sceneNum)
  }

  get width() {
    return this.pixi.screen.width
  }

  get height() {
    return this.pixi.screen.width
  }
}
