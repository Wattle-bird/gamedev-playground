import { Rect } from "./geometry";
export declare class PhysicsBody {
    rect: Rect;
    dx: number;
    dy: number;
    ax: number;
    ay: number;
    constructor(rect: Rect);
    physics(dt: number): void;
    moveImage(img: {
        anchor: {
            x: number;
            y: number;
        } | number;
        x: number;
        y: number;
    }): void;
}
