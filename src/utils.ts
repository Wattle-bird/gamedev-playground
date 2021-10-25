export function makeSprite(pixels: string, width: number, height: number, palette: string[]): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  let x = 0;
  let y = -1; // because we start with a new line before data


  for (let char of pixels.split("")) {
    if (char == "\n") {
      y++;
      x = 0;
      continue;
    }

    let color = "transparent";
    if (char !== " ") {
      const index = +("0x" + char)
      color = palette[index]
    }

    ctx.fillStyle = color;
    ctx.fillRect(x, y, 1, 1);
    x++
  }

  return canvas
}


/**
 * Sweetie 16 palette
 */
export const sweetie16 = [
  0x000000, // black
  0x5d275d, // maroon
  0xb13e53, // red
  0xef7d57, // orange
  0xffcd75, // yellow
  0xa7f070, // light green
  0x38b764, // deep green
  0x257179, // dark teal
  0x29366f, // dark blue
  0x3b5dc9, // mid blue
  0x41a6f6, // light blue
  0x73eff7, // aqua
  0xffffff, // white
  0x94b0c2, // light grey
  0x566c86, // mid grey
  0x333c57, // dark grey
]

export function sw16index(n: number) {
  return sweetie16[mod(n|0, 16)]
}

export function for2d(width: number, height: number, func: Function) {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      func(x, y)
    }
  }
}

export function for1d(max: number, func: Function) {
  for (let x = 0; x < max; x++) {
    func(x)
  }
}

export function srand(a: number): Function {
  // https://github.com/bryc/code/blob/master/jshash/PRNGs.md#lcg-lehmer-rng
  return function() {
    return (a = a * 48271 % 2147483647)/2**31;
  }
}

export function rgb(r: number, g:number, b:number) {
  return (r << 16) + (g << 8) + (b|0)
}

/**
 * Mod function that works for negative numbers
 */
export function mod(x: number, y: number) {
  while (x < 0) x += y;
  return x % y;
}

export function makeGrid(width:number, height:number, default_:any=0): any[][] {
  const grid = []
  for1d(width, (x: number)=>{
    grid[x] = []
    for1d(height, (y: number)=>{
      grid[x][y] = default_
    })
  })
  return grid
}
