import * as PIXI from "pixi.js";
import { AbstractScene } from "./scenes/abstractScene";
import { FirstScene } from "./scenes/firstScene";
export declare class Engine {
    pixi: PIXI.Application;
    scenes: (typeof FirstScene)[];
    sceneNumber: number;
    currentScene: AbstractScene;
    time: number;
    constructor(pixi: PIXI.Application);
    startScene(num: number): void;
    update(dt: number): void;
    get width(): number;
    get height(): number;
}
