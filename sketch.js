let opens;
let pressed;
let clap;

function setup() {
 let canvas = createCanvas(500, 500);
  canvas.parent('sketch-container');
  bg1 = loadImage('bg1.png');
  glass = loadImage('glass.png');
  crab1 = loadImage('crab1.png');
  crab2 = loadImage('crab2.png');
  
  soundFormats('mp3', 'ogg');
  clap = loadSound('clap.mp3');
}

function mousePressed() {
   pressed = true;
}

function mouseReleased() {
   pressed = false
}

function draw() {
  background(bg1)

if (pressed) {image(crab2,0,0);
             clap.play();} 
  else {image(crab1,0,0) }
  
    image(glass, 0, 0)
 }
