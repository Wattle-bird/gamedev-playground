import { Engine } from "../engine";
import * as PIXI from "pixi.js";
export declare abstract class AbstractScene {
    e: Engine;
    container: PIXI.Container;
    constructor(e: Engine);
    abstract update(dt: number): void;
    add(container: PIXI.Container): void;
    stop(): void;
}
