import * as PIXI from "pixi.js";
import { OneButtonController } from "../controllers/oneButtonController";
import { Engine } from "../engine";
import { PhysicsBody } from "../gamestuff/physicsBody";
import { ShadowText, SimpleText } from "../graphics/text";
import { AbstractScene } from "./abstractScene";
export declare class TextShootyScene extends AbstractScene {
    letters: ShadowText[];
    background: PIXI.Graphics;
    shootInterval: Interval;
    bullets: Bullet[];
    stars: {
        x: number;
        y: number;
        distance: number;
    }[];
    controller: OneButtonController;
    player: Player;
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
declare class Player extends PhysicsBody {
    sc: TextShootyScene;
    img: SimpleText;
    dy: number;
    constructor(sc: TextShootyScene);
    update(dt: any): void;
}
declare class Bullet extends SimpleText {
    scene: TextShootyScene;
    constructor(scene: TextShootyScene);
    shouldDelete(): boolean;
}
export {};
