export class Vector {
  constructor(public x: number, public y: number) {}

  get abs() {
    return Math.hypot(this.x, this.y)
  }
}

export class Rectangle {
  loc: Vector
  size: Vector

  constructor(x: number, y: number, w: number, h: number) {
    this.loc = new Vector(x, y)
    this.size = new Vector(w, h)
  }

  // Edges
  get left() {
    return this.x
  }
  get right() {
    return this.x + this.w
  }
  set right(val) {
    this.x = val - this.w
  }
  get top() {
    return this.y
  }
  get bottom() {
    return this.y + this.h
  }
  set bottom(val) {
    this.y = val - this.h
  }

  // Scalars
  private get x() {
    return this.loc.x
  }
  private set x(val: number) {
    this.loc.x = val
  }

  private get y() {
    return this.loc.y
  }
  private set y(val: number) {
    this.loc.y = val
  }

  get w() {
    return this.size.x
  }
  set w(val: number) {
    this.size.x = val
  }

  get h() {
    return this.size.y
  }
  set h(val: number) {
    this.size.y = val
  }

}
