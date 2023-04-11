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

  pgImage[0] = loadImage("resources/images/flower0.jpg");
  pgImage[1] = loadImage("resources/images/flower1.jpg");
  pgImage[2] = loadImage("resources/images/flower2.jpg");
  pgImage[3] = loadImage("resources/images/flower3.jpg");
  pgImage[4] = loadImage("resources/images/flower4.jpg");
  pgImage[5] = loadImage("resources/images/flower5.jpg");
  pgImage[6] = loadImage("resources/images/city0.jpg");
  pgImage[7] = loadImage("resources/images/city1.jpg");
  pgImage[8] = loadImage("resources/images/city2.jpg");
  pgImage[9] = loadImage("resources/images/city3.jpg");
  pgImage[10] = loadImage("resources/images/evening0.jpg");
  pgImage[11] = loadImage("resources/images/evening1.jpg");
  pgImage[12] = loadImage("resources/images/palms0.jpg");
  pgImage[13] = loadImage("resources/images/palms1.jpg");
  pgImage[14] = loadImage("resources/images/water0.jpg");
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