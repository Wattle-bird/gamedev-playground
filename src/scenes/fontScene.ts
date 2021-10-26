import * as PIXI from "pixi.js";
import { Engine } from "../engine";
import { PixelArray } from "../graphics/pixelArray";
import { ShadowText, SimpleText } from "../graphics/text";
import { sw16index, sweetie16 } from "../utils";
import { AbstractScene } from "./abstractScene";

export class FontScene extends AbstractScene {
  letters: ShadowText[] = []
  constructor(e: Engine) {
    super(e)

    const background = new PixelArray()
    this.add(background)
    background.drawPixels(192, 192, (x,y)=>{
      if ((x/8^y/8)&1) return sweetie16[8]
      return sweetie16[1]
    })

    const loader = new PIXI.Loader()
loader.add('ModernDOS', 'assets/ModernDOS.fnt').load(() => {
  // Once font has been loaded, call a function that uses it
  const font = new PIXI.BitmapText('Hello\n newline', {fontName: 'Modern DOS 437 8x8'})
  this.add(font)
  font.tint = 0xff6644
})

/*
    const text1 = new SimpleText(0,0,"Hello from font!")
    this.add(text1)

    const text2 = new SimpleText(0,16,"This is a loooong sentence, and can be wrapped")
    text2.style.wordWrap = true;
    text2.style.wordWrapWidth = 192
    this.add(text2)

    const text3 = new SimpleText(0, 48, "Color!")
    text3.tint = sweetie16[3]
    this.add(text3)

    const shadowText = new ShadowText(0, 64, "And some text with a\nshadow!")
    this.add(shadowText)
    
    "Wheeeeeeeeeeeeeeeeeeeee!".split('').forEach((letter, index)=>{
      const st = new ShadowText(index*8, 0,letter)
      this.letters.push(st)
      this.add(st)
    })
    */
  }

  update(dt: number) {
    const t = this.e.time;

    /*this.letters.forEach((letter, index) => {
      letter.text.tint = sw16index(t/10 + index/3)
      letter.y = 140 + Math.sin(t/40 - index/3)*20|0;
    })*/
  }

}
