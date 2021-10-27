import { Engine } from "../engine";
import { PixelArray } from "../graphics/pixelArray";
import { ShadowText, SimpleText } from "../graphics/text";
import { AbstractScene } from "./abstractScene";
export declare class TextShootyScene extends AbstractScene {
    letters: ShadowText[];
    background: PixelArray;
    player: SimpleText;
    playerDY: number;
    shootInterval: Interval;
    bullets: Bullet[];
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
