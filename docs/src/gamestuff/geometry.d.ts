export declare class Vector {
    x: number;
    y: number;
    constructor(x: number, y: number);
    get abs(): number;
}
export declare class Rectangle {
    loc: Vector;
    size: Vector;
    constructor(x: number, y: number, w: number, h: number);
    get left(): number;
    get right(): number;
    set right(val: number);
    get top(): number;
    get bottom(): number;
    set bottom(val: number);
    private get x();
    private set x(value);
    private get y();
    private set y(value);
    get w(): number;
    set w(val: number);
    get h(): number;
    set h(val: number);
}
