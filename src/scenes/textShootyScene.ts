import * as PIXI from "pixi.js";
import { Engine } from "../engine";
import { PixelArray } from "../graphics/pixelArray";
import { ShadowText, SimpleText } from "../graphics/text";
import { sw16index, sweetie16 } from "../utils";
import { AbstractScene } from "./abstractScene";

export class TextShootyScene extends AbstractScene {
  letters: ShadowText[] = []
  background: PixelArray;
  player: SimpleText;
  playerDY: number;
  shootInterval: Interval;
  bullets: Bullet[] = []
  constructor(e: Engine) {
    super(e)

    this.background = new PixelArray()
    this.add(this.background)


    this.player = new SimpleText(16,16,"C")
    this.playerDY = 1
    this.add(this.player)

    this.shootInterval = new Interval(12, ()=>this.shoot())
  }

  update(dt: number) {
    const t = this.e.time;

    this.player.y += this.playerDY * dt
    if (this.player.y > 192-24) {
      this.playerDY = -1
      this.player.y = 192-24
    }

    if (this.player.y < 16) {
      this.playerDY = 1
      this.player.y = 16
    }

    this.bullets.forEach((bullet)=>{
      bullet.x += dt*3
    })

    this.bullets.filter((b)=>b.shouldDelete()).forEach((b)=>this.container.removeChild(b))
    this.bullets = this.bullets.filter((b)=>!b.shouldDelete())


    this.shootInterval.update(dt) 
  }

  shoot() {
    this.bullets.push(new Bullet(this))

  }
  

}

class Interval {
  elapsed = 0;
  constructor(public frequency: number, public callback:Function) { }

  update(dt: number) {
    this.elapsed += dt
    if (this.elapsed > this.frequency) {
      this.elapsed = 0
      this.callback()
    }
  }
}

class Bullet extends SimpleText {
  constructor(public scene: TextShootyScene) {
    super(24, scene.player.y, ":")
    scene.add(this)
  }

  shouldDelete() {
    if ( this.x > 192 ) return true;
    return false
  }
}
