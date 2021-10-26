import { Engine } from "../engine";
import { ShadowText } from "../graphics/text";
import { AbstractScene } from "./abstractScene";
export declare class FontScene extends AbstractScene {
    letters: ShadowText[];
    constructor(e: Engine);
    update(dt: number): void;
}
