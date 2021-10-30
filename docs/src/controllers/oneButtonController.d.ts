import PointerTracker from "pointer-tracker";
export declare class OneButtonController {
    onPress: Function | undefined;
    pointerTracker: PointerTracker;
    constructor();
    doPress(ev: PointerEvent): void;
    isPressed(): boolean;
}
