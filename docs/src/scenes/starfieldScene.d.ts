import * as PIXI from "pixi.js";
import { Engine } from "../engine";
import { AbstractScene } from "./abstractScene";
export declare class StarfieldScene extends AbstractScene {
    gfx: PIXI.Graphics;
    stars: {
        x: number;
        y: number;
        age: number;
    }[];
    constructor(e: Engine);
    update(dt: number): void;
    draw(): void;
}
