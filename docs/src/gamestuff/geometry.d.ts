export declare class Vector {
    x: number;
    y: number;
    constructor(x: number, y: number);
    get abs(): number;
}
export declare class Rect {
    loc: Vector;
    size: Vector;
    constructor(x: number, y: number, w: number, h: number);
    get left(): number;
    set left(val: number);
    get right(): number;
    set right(val: number);
    get top(): number;
    set top(val: number);
    get bottom(): number;
    set bottom(val: number);
    get centerX(): number;
    set centerX(val: number);
    get centerY(): number;
    set centerY(val: number);
    private get x();
    private set x(value);
    private get y();
    private set y(value);
    get w(): number;
    set w(val: number);
    get h(): number;
    set h(val: number);
}
