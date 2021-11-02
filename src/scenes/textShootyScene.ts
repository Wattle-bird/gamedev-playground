import * as PIXI from "pixi.js";
import {OneButtonController} from "../controllers/oneButtonController";
import { Engine } from "../engine";
import {Rect} from "../gamestuff/geometry";
import {PhysicsBody} from "../gamestuff/physicsBody";
import { PixelArray } from "../graphics/pixelArray";
import { ShadowText, SimpleText } from "../graphics/text";
import { for1d, rgb, sw16index, sweetie16 } from "../utils";
import { AbstractScene } from "./abstractScene";

export class TextShootyScene extends AbstractScene {
  letters: ShadowText[] = []
  background: PIXI.Graphics;
  shootInterval: Interval;
  bullets: Bullet[] = []
  stars: {x:number, y:number, distance:number}[] = []
  controller: OneButtonController;
  player: Player;
  constructor(e: Engine) {
    super(e)

    this.controller = new OneButtonController()

    this.background = new PIXI.Graphics()
    this.add(this.background)


    this.player = new Player(this)
    //this.player = new SimpleText(16,16,"C")
    //this.playerDY = 1
    //this.add(this.player)

    const r = Math.random
    for1d(64, ()=> {
      this.stars.push({x: r()*192, y: r()*192, distance: r()})
    })

    this.shootInterval = new Interval(12, ()=>this.shoot())

    this.controller.onPress = () => this.player.dy *=-1
  }

  update(dt: number) {
    const t = this.e.time;

    this.player.update(dt)
    //if (!this.controller.isPressed())
      //this.player.y += this.playerDY * dt
    //if (this.player.y > 192-24) {
      //this.playerDY = -1
      //this.player.y = 192-24
    //}
    //if (this.player.y < 16) {
      //this.playerDY = 1
      //this.player.y = 16
    //}

    this.bullets.forEach((bullet)=>{
      bullet.x += dt*3
    })
    this.bullets.filter((b)=>b.shouldDelete()).forEach((b)=>this.container.removeChild(b))
    this.bullets = this.bullets.filter((b)=>!b.shouldDelete())

    this.background.clear()
    this.stars.forEach((star)=>{
      star.x -= star.distance * dt
      if (star.x < 0) star.x += 192
      const brightness = star.distance * 128
      this.background.beginFill(rgb(brightness, brightness, brightness))
      this.background.drawRect(star.x, star.y, 1, 1)
    })

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

class Player extends PhysicsBody {
  img: SimpleText;
  dy = 1;
  constructor(public sc: TextShootyScene) {
    super(new Rect(16,16,8,8))
    this.img = new SimpleText(16,16, "C")
    this.sc.add(this.img)
  }

  update(dt) {
    if (!this.sc.controller.isPressed())
      this.physics(dt)

    if (this.rect.bottom > 192-16) {
      this.dy = -1
      this.rect.bottom = 192-16
    }
    if (this.rect.top < 16) {
      this.dy = 1
      this.rect.top = 16
    }

    this.moveImage(this.img)
  }

}

class Bullet extends SimpleText {
  constructor(public scene: TextShootyScene) {
    super(24, scene.player.rect.top, ":")
    scene.add(this)
  }

  shouldDelete() {
    if ( this.x > 192 ) return true;
    return false
  }
}
