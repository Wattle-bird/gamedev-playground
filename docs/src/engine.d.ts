import * as PIXI from "pixi.js";
import { AbstractScene } from "./scenes/abstractScene";
import { LifeScene } from "./scenes/lifeScene";
import { ShaderScene } from "./scenes/shaderScene";
import { StarfieldScene } from "./scenes/starfieldScene";
export declare class Engine {
    pixi: PIXI.Application;
    scenes: (typeof ShaderScene | typeof LifeScene | typeof StarfieldScene)[];
    sceneNumber: number;
    currentScene: AbstractScene;
    time: number;
    constructor(pixi: PIXI.Application);
    startScene(num: number): void;
    stopScene(): void;
    update(dt: number): void;
    setupButtons(): void;
    loadPrevScene(): void;
    loadNextScene(): void;
    get width(): number;
    get height(): number;
}
