import * as PIXI from "pixi.js";
export declare class PixelArray extends PIXI.Container {
    sprite: PIXI.Sprite;
    constructor();
    drawPixels(w: number, h: number, callback: (arg0: any, arg1: any) => any): void;
}
