import * as PIXI from "pixi.js";
import { OneButtonController } from "../controllers/oneButtonController";
import { Engine } from "../engine";
import {ShadowText} from "../graphics/text";
import { sweetie16 } from "../utils";
import { AbstractScene } from "./abstractScene";

export class ButtonScene extends AbstractScene {
  controller: OneButtonController;
  gfx: PIXI.Graphics;
  background: number;
  constructor(e: Engine) {
    super(e)

    this.gfx = new PIXI.Graphics();
    this.background = Math.random()*0xffffff
    this.add(this.gfx)

    this.add(new ShadowText(0, 0, "Button test"))
    this.controller = new OneButtonController();
    this.controller.onPress = this.onPress.bind(this)
  }

  update(dt: number) {
    this.gfx.clear()
    this.gfx.beginFill(this.background);
    this.gfx.drawRect(0,0,192,192)

    if (this.controller.isPressed()) {
      this.gfx.beginFill(0);
    } else {
      this.gfx.beginFill(0xffffff);
    }
    this.gfx.drawCircle(96, 96, 50)

  }

  onPress() {
    this.background = Math.random()*0xffffff
  }

}
