import { Engine } from "../engine";
import { PixelArray } from "../graphics/pixelArray";
import { AbstractScene } from "./abstractScene";
export declare class RadialScene extends AbstractScene {
    pa: PixelArray;
    constructor(e: Engine);
    update(dt: number): void;
}
