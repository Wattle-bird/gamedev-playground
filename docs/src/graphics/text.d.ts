import * as PIXI from "pixi.js";
export declare class SimpleText extends PIXI.BitmapText {
    constructor(x: number, y: number, text: string);
}
export declare class ShadowText extends PIXI.Container {
    readonly text: SimpleText;
    readonly shadow: SimpleText;
    constructor(x: number, y: number, text: string);
    setText(text: string): void;
}
