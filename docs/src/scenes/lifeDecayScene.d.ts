import { Engine } from "../engine";
import { PixelArray } from "../graphics/pixelArray";
import { AbstractScene } from "./abstractScene";
export declare class LifeDecayScene extends AbstractScene {
    image: PixelArray;
    life: LifeEngine;
    lastUpdate: number;
    constructor(e: Engine);
    update(dt: number): void;
}
declare class LifeEngine {
    width: number;
    height: number;
    stayAlive: number[];
    comeAlive: number[];
    newValue: number;
    grid: WrappingGrid;
    nextGrid: WrappingGrid;
    constructor(width?: number, height?: number, stayAlive?: number[], comeAlive?: number[]);
    update(): void;
    flip(): void;
    decay(): void;
}
declare class WrappingGrid {
    width: number;
    height: number;
    grid: number[][];
    constructor(width?: number, height?: number);
    howManySurround(x: any, y: any): number;
    randomize(threshold?: number): void;
    get(x: number, y: number): number;
    set(x: number, y: number, val: number): void;
}
export {};
