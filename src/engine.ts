import * as PIXI from "pixi.js";
import { AbstractScene } from "./scenes/abstractScene";
import { CharsScene } from "./scenes/charsScene";
import {CoordScene} from "./scenes/coordScene";
import {CoordScene2} from "./scenes/coordScene2";
import {DitherScene} from "./scenes/ditherScene";
import {DripScene} from "./scenes/dripScene";
import { FontScene } from "./scenes/fontScene";
import {LifeDecayScene} from "./scenes/lifeDecayScene";
import {LifeScene} from "./scenes/lifeScene";
import {PlasmaScene} from "./scenes/plasmaScene";
import {RadialScene} from "./scenes/radialScene";
import {ShaderScene} from "./scenes/shaderScene";
import {StarfieldScene} from "./scenes/starfieldScene";
import {mod} from "./utils";


export class Engine {
  scenes = [
    ShaderScene,
    PlasmaScene,
    RadialScene,
    DitherScene,
    LifeScene,
    DripScene,
    LifeDecayScene,
    CoordScene,
    CoordScene2,
    StarfieldScene,
    FontScene,
    CharsScene
  ]
  sceneNumber = 0;
  currentScene: AbstractScene
  time = 0

  constructor(public pixi: PIXI.Application) {
    const loader = new PIXI.Loader()
    loader.add('ModernDOS', 'assets/ModernDOS.fnt')
    loader.load(this.start.bind(this))
  }

  start() {
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
