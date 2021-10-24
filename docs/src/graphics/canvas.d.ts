import * as PIXI from "pixi.js";
export declare class Canvas extends PIXI.Graphics {
    pixel(x: number, y: number, color: number): void;
    drawPixels(w: number, h: number, callback: Function): void;
}
