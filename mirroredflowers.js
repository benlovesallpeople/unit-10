let garden;
const blooms = ["🌸", "🌺", "🌻", "🌼", "🌷", "💐", "🏵️", "🪷"];
const foliage = ["🌿", "🍀", "🌱", "🍃", "☘️"];
let bgColor;

function setup() {
  garden = createCanvas(500, 500);
  textSize(24);
  textAlign(CENTER, CENTER);
  
  bgColor = color(
    random(150, 240), 
    random(150, 230),  
    random(150, 255) 
  );
  noLoop();
}

function draw() {
  background(bgColor); 
  createMirrorFlowers();
  drawBorders();
}

function createMirrorFlowers() {
  const size = 12;
  const cell = width / size;
  
  let y = 0;
  while (y < size) {
    for (let x = 0; x < size/2; x++) {
      const posX = x * cell + cell/2;
      const posY = y * cell + cell/2;
      const f = (y * x) % blooms.length;
      const l = (y + x) % foliage.length;
      
      drawCluster(posX, posY, f, l);
      drawCluster(width - posX, posY, f, l);
    }
    y++;
  }
}

function drawCluster(x, y, f, l) {
  push();
  translate(x, y);
  text(blooms[f], 0, 0);
  for (let i = 0; i < 3; i++) {
    const angle = i * TWO_PI/3;
    text(foliage[l], cos(angle)*15, sin(angle)*15);
    if (i % 2 === 0) {
      text(blooms[(f + 1) % blooms.length], cos(angle)*9, sin(angle)*9);
    }
  }
  pop();
}

function drawBorders() {
  const decor = ["✿", foliage[0], "❀", foliage[2], "✽"];
  const space = 30;
  fill(100, 80, 50);
  for (let p = space/2; p < width; p += space) {
    text(decor[int(p/space) % decor.length], p, 15);
    text(decor[int(p/space) % decor.length], p, height-15);
    text(decor[int(p/space) % decor.length], 15, p);
    text(decor[int(p/space) % decor.length], width-15, p);
  }
}
