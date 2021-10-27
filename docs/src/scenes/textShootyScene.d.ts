import * as PIXI from "pixi.js";
import { Engine } from "../engine";
import { ShadowText, SimpleText } from "../graphics/text";
import { AbstractScene } from "./abstractScene";
export declare class TextShootyScene extends AbstractScene {
    letters: ShadowText[];
    background: PIXI.Graphics;
    player: SimpleText;
    playerDY: number;
    shootInterval: Interval;
    bullets: Bullet[];
    stars: {
        x: number;
        y: number;
        distance: number;
    }[];
    constructor(e: Engine);
    update(dt: number): void;
    shoot(): void;
}
declare class Interval {
    frequency: number;
    callback: Function;
    elapsed: number;
    constructor(frequency: number, callback: Function);
    update(dt: number): void;
}
declare class Bullet extends SimpleText {
    scene: TextShootyScene;
    constructor(scene: TextShootyScene);
    shouldDelete(): boolean;
}
export {};
