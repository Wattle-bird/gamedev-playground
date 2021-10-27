import { Engine } from "../engine";
import { PixelArray } from "../graphics/pixelArray";
import { ShadowText } from "../graphics/text";
import { AbstractScene } from "./abstractScene";
export declare class IntroScene extends AbstractScene {
    letters: ShadowText[];
    background: PixelArray;
    constructor(e: Engine);
    update(dt: number): void;
}
