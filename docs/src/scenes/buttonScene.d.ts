import * as PIXI from "pixi.js";
import { OneButtonController } from "../controllers/oneButtonController";
import { Engine } from "../engine";
import { AbstractScene } from "./abstractScene";
export declare class ButtonScene extends AbstractScene {
    controller: OneButtonController;
    gfx: PIXI.Graphics;
    background: number;
    constructor(e: Engine);
    update(dt: number): void;
    onPress(): void;
}
