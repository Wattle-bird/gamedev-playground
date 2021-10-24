import * as PIXI from "pixi.js";

export function startPixi(w = 192, h=192) {
  const pixi = new PIXI.Application({
    width: w,
    height: h,
    antialias: false,
  })

  document.querySelector('#pixi').appendChild(pixi.view)

  return pixi
}
