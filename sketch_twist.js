var tFont = [];
var pgTextSize = 50;
var bkgdColor, foreColor;

var keyText;

var gridStructure;
var spacer = 50;

var pgT = [];
var pgImage = [];

var colorA = [];
var colorTop, colorBot, colorIn, colorOut;
var pgTop, pgBot, pgIn, pgOut;

var topMode = 0;
var botMode = 0;
var inMode = 0;
var outMode = 1;

var mainTwist;

var rotXcamera = 0;
var rotZcamera = 0;

function preload(){
  // tFont[0] = loadFont("resources/NeueMontreal-LightItalic.otf");
  tFont[0] = loadFont("resources/Linotype - Neue Haas Grotesk Text Std 55 Roman.ttf");
  pgImage[0] = loadImage("resources/images_opt/flower0.JPG");
  pgImage[1] = loadImage("resources/images_opt/flower1.JPG");
  pgImage[2] = loadImage("resources/images_opt/flower2.JPG");
  pgImage[3] = loadImage("resources/images_opt/flower3.JPG");
  pgImage[4] = loadImage("resources/images_opt/flower4.JPG");
  pgImage[5] = loadImage("resources/images_opt/flower5.JPG");
  pgImage[6] = loadImage("resources/images_opt/city0.JPG");
  pgImage[7] = loadImage("resources/images_opt/city1.JPG");
  pgImage[8] = loadImage("resources/images_opt/city2.JPG");
  pgImage[9] = loadImage("resources/images_opt/city3.JPG");
  pgImage[10] = loadImage("resources/images_opt/evening0.JPG");
  pgImage[11] = loadImage("resources/images_opt/evening1.JPG");
  pgImage[12] = loadImage("resources/images_opt/palms0.JPG");
  pgImage[13] = loadImage("resources/images_opt/palms1.JPG");
  pgImage[14] = loadImage("resources/images_opt/water0.JPG");
  
}

function setup(){
  createCanvas(windowWidth,windowWidth,WEBGL);

  colorA[0] = color('#000000');
  colorA[1] = color('#FFFFFF');
  colorA[2] = color('#f06428');
  colorA[3] = color('#3447ff');
  colorA[4] = color('#faff00');
  colorA[5] = color('#ffdcce');
  colorA[6] = color('#f13dff');

  colorTop = colorA[2];
  colorBot = colorA[3];
  colorIn = colorA[5];
  colorOut = colorA[6];

  pgIn = pgImage[0];
  pgOut = pgImage[0];
  pgTop = pgImage[0];
  pgBot = pgImage[0];

  noSmooth();
  textureMode(NORMAL);

  mainTwist = new TwistMain();

  setRadius(document.getElementById("radiusSlider").value);
  setStrip(document.getElementById("stripSlider").value);
  setSlope(document.getElementById("slopeSlider").value);
}

function draw(){
  background(colorA[4]);
  ortho(-width/2, width/2, -height/2, height/2, -10000, 100000);
  // ortho();
  // orbitControl();
  
  push();
    rotateX(rotXcamera);
    rotateZ(rotZcamera);
    mainTwist.update();
    mainTwist.display();
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowWidth,WEBGL);
}