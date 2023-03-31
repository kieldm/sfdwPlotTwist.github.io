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

var topMode = 0;
var botMode = 0;
var inMode = 0;
var outMode = 0;

var mainTwist;

function preload(){
  // tFont[0] = loadFont("resources/NeueMontreal-LightItalic.otf");
  tFont[0] = loadFont("resources/Linotype - Neue Haas Grotesk Text Std 55 Roman.ttf");

  pgImage[0] = loadImage("resources/images/flower0.JPG");
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
    mainTwist.update();
    mainTwist.display();
  pop();
}

function windowResized(){
  resizeCanvas(windowWidth, windowWidth,WEBGL);
}