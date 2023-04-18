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

var wrapTop = 0;
var wrapBot = 0;
var wrapIn = 0;
var wrapOut = 0;

var uOffset = [];
var vOffset = [];

var mainTwist;
var spinCore = 0;
var spin = 0;

var rotXcamera = 0;
var rotZcamera = 0;
var rotYcamera = 0;

var widgetOn = true;
var thisDensity = 1;
let cwidth, cheight;
let saveMode = 0;

const frate = 30;
var numFrames = 100;
let recording = false;
let recordedFrames = 0;

let recMessageOn = false;

let sizeScale = 1;

function preload(){
  // tFont[0] = loadFont("resources/NeueMontreal-LightItalic.otf");
  tFont[0] = loadFont("resources/Linotype - Neue Haas Grotesk Text Std 55 Roman.ttf");

  pgImage[0] = loadImage("resources/images2/flower0.jpg");
  pgImage[1] = loadImage("resources/images2/flower1.jpg");
  pgImage[2] = loadImage("resources/images2/flower2.jpg");
  pgImage[3] = loadImage("resources/images2/flower3.jpg");
  pgImage[4] = loadImage("resources/images2/flower4.jpg");
  pgImage[5] = loadImage("resources/images2/flower5.jpg");
  pgImage[6] = loadImage("resources/images2/city0.jpg");
  pgImage[7] = loadImage("resources/images2/city1.jpg");
  pgImage[8] = loadImage("resources/images2/city2.jpg");
  pgImage[9] = loadImage("resources/images2/city3.jpg");
  pgImage[10] = loadImage("resources/images2/evening0.jpg");
  pgImage[11] = loadImage("resources/images2/evening1.jpg");
  pgImage[12] = loadImage("resources/images2/palms0.jpg");
  pgImage[13] = loadImage("resources/images2/palms1.jpg");
  pgImage[14] = loadImage("resources/images2/water0.jpg");
  pgImage[15] = loadImage("resources/images2/clouds0.gif");
}

function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL);

  thisDensity = pixelDensity();

  bkgdColor = color('#000000');
  foreColor = color('#FFFFFF');  
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
  pgOut = pgImage[15];
  pgTop = pgImage[0];
  pgBot = pgImage[0];

  for(var m = 0; m < 4; m++){
    uOffset[m] = 50;
    vOffset[m] = 50;
  }

  noSmooth();
  frameRate(frate);
  textureMode(NORMAL);
  // textureWrap(REPEAT);
  textureWrap(MIRROR);
  // textureWrap(CLAMP);

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
    scale(sizeScale);

    rotateX(rotXcamera);
    rotateZ(rotZcamera);
    rotateY(rotYcamera);

    rotateY(spinCore);

    mainTwist.update();
    mainTwist.display();
  pop();

  runRecording();

  spinCore += spin;
}

function windowResized(){
  if(saveMode == 0){
    resizeCanvas(windowWidth, windowHeight,WEBGL);
    sizeScale = 1;
  } else if(saveMode == 1){
    resizeCanvas(1080, 1920, WEBGL);
    sizeScale = width/cwidth;
  } else if(saveMode == 2){
    resizeCanvas(1080, 1080, WEBGL);
    sizeScale = width/cwidth;
  }
}

function resizeForSave(){
  if(saveMode == 0){
    resizeCanvas(windowWidth, windowHeight,WEBGL);
    sizeScale = 1;
  } else if(saveMode == 1){
    resizeCanvas(1080, 1920, WEBGL);
    sizeScale = width/cwidth;
  } else if(saveMode == 2){
    resizeCanvas(1080, 1080, WEBGL);
    sizeScale = width/cwidth;
  }
}

function resizeForPreview(){
  var tempWidth, tempHeight;

  if(saveMode == 0){
    resizeCanvas(windowWidth, windowHeight,WEBGL);
  } else if(saveMode == 1){
    if(windowWidth > windowHeight * 9/16){
      tempHeight = windowHeight;
      tempWidth = windowHeight * 9/16;
    } else {
      tempWidth = windowWidth;
      tempHeight = windowWidth * 16/9;
    }
    resizeCanvas(tempWidth, tempHeight, WEBGL);
  } else if(saveMode == 2){
    if(windowWidth < windowHeight){
      tempWidth = windowWidth;
      tempHeight = windowWidth;
    } else {
      tempHeight = windowHeight;
      tempWidth = windowHeight;
    }
    resizeCanvas(tempWidth, tempHeight, WEBGL);
  }

  cwidth = width;
  cheight = height;
}