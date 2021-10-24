// (base: https://www.typescriptlang.org/play/)
/*
import * as PIXI from "pixi.js";
import PointerTracker from "pointer-tracker";

const pt = new PointerTracker(document.querySelector('#myButton'));
setInterval(() => {
  pt.currentPointers.forEach((p) =>{
    console.log(p.nativePointer)
  })
}, 1000)
*/
import * as PIXI from "pixi.js";
import { Engine } from "./engine";


import { startPixi } from "./pixiStarter";

const pixi = startPixi()
const engine = new Engine(pixi)
