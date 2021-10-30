import PointerTracker from "pointer-tracker";

export class OneButtonController {
  onPress: Function | undefined;
  pointerTracker: PointerTracker;
  constructor() {
    document.querySelector('#controls').innerHTML = `
      <style>
        #press {
          background: black;
          color: white;
          text-align: center;
          font-family: monospace;
          font-weight: bold;
          font-size: calc(var(--control-height) / 3);
          height: var(--control-height);
          line-height: var(--control-height)
        }
      </style>
      <div id="press"> PRESS </div>
    `
    const pressButton = document.querySelector('#press')
    pressButton.addEventListener('pointerdown', this.doPress.bind(this));
    this.pointerTracker = new PointerTracker(pressButton as HTMLElement);
  }

  doPress(ev: PointerEvent) {
    if (this.onPress) this.onPress();
    ev.preventDefault();
  }

  isPressed() {
    return this.pointerTracker.currentPointers.length > 0;
  }
}