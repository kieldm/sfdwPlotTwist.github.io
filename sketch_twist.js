var tFont = [];
var pgTextSize = 50;
var bkgdColor, foreColor;

var keyText;

var gridStructure;
var spacer = 50;

var pgT = [];
var pgImage = [];
var pgLogo;

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

var twistCore = 0;
var twistTicker = 0;
var twist = 0;

var rotXcamera = 0;
var rotZcamera = 0;
var rotYcamera = 0;

var widgetOn = true;
var thisDensity = 1;
let cwidth, cheight;
let saveMode = 0;
let templateMode = 0;

const frate = 30;
var loopLength = 180;
var numFrames = loopLength;
let recording = false;
let recordedFrames = 0;

let recMessageOn = false;

let templateScale = 1;
let sizeScale = 1;

let secretX = 0;
let secretY = 0;
let secretZ = 0;

function preload(){
  tFont[0] = loadFont("resources/Linotype - NHaasGroteskDSPro-65Md.otf");

  pgImage[0] = loadImage("resources/images/city1.jpg");
  pgImage[1] = loadImage("resources/images/city2.jpg");
  pgImage[2] = loadImage("resources/images/city3.jpg");
  pgImage[3] = loadImage("resources/images/city4.jpg");
  pgImage[4] = loadImage("resources/images/city5.jpg");
  pgImage[5] = loadImage("resources/images/city6.jpg");
  pgImage[6] = loadImage("resources/images/city7.jpg");
  pgImage[7] = loadImage("resources/images/clouds1.jpg");
  pgImage[8] = loadImage("resources/images/clouds2.jpg");
  pgImage[9] = loadImage("resources/images/clouds3.gif");
  pgImage[10] = loadImage("resources/images/discoball.gif");
  pgImage[11] = loadImage("resources/images/escalator.gif");
  pgImage[12] = loadImage("resources/images/fabric.gif");
  pgImage[13] = loadImage("resources/images/flora1.jpg");
  pgImage[14] = loadImage("resources/images/flora2.jpg");
  pgImage[15] = loadImage("resources/images/flora3.jpg");
  pgImage[16] = loadImage("resources/images/flora4.jpg");
  pgImage[17] = loadImage("resources/images/flora5.jpg");
  pgImage[18] = loadImage("resources/images/flora6.gif");
  pgImage[19] = loadImage("resources/images/flora7.gif");
  pgImage[20] = loadImage("resources/images/hoops.gif");
  pgImage[21] = loadImage("resources/images/lights.gif");
  pgImage[22] = loadImage("resources/images/ocean1.gif");
  pgImage[23] = loadImage("resources/images/ocean2.gif");

  pgLogo = loadImage("resources/PlotTwist_logo.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight,WEBGL);

  thisDensity = pixelDensity();

  bkgdColor = color('#faff00');
  foreColor = color('#000000');  
  colorA[0] = color('#f06428');
  colorA[1] = color('#3447ff');
  colorA[2] = color('#ffdcce');
  colorA[3] = color('#f13dff');

  colorTop = colorA[0];
  colorBot = colorA[1];
  colorIn = colorA[2];
  colorOut = colorA[3];

  pgIn = pgImage[0];
  pgOut = pgImage[0];
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

  setTemplate(0);
}

function draw(){
  background(bkgdColor);
  ortho(-width/2, width/2, -height/2, height/2, -10000, 100000);
  // ortho();
  // orbitControl();
  
  push();
    scale(sizeScale);
    translate(secretX, secretY, secretZ);

    rotateX(rotXcamera);
    rotateZ(rotZcamera);
    rotateY(rotYcamera);

    rotateY(spinCore);

    mainTwist.update();
    mainTwist.display();
  pop();

  push();
    scale(sizeScale);

    templateDisplay();
  pop();

  runRecording();

  spinCore += spin;

  twistTicker += twist;
  twistCore = map(sin(twistTicker), -1, 1, -2.75, 2.75);
}

// function mouseReleased(){
//   console.log("Radius: " + mainTwist.radius);
//   console.log("Slope: " + mainTwist.slope);
//   console.log("StripH: " + mainTwist.stripH);

//   console.log("rotX: " + rotXcamera);
//   console.log("rotZ: " + rotZcamera);
//   console.log("rotY: " + rotYcamera);
// }

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
    templateScale = 1;

    resizeCanvas(windowWidth, windowHeight,WEBGL);
  } else if(saveMode == 1){
    if(windowWidth > windowHeight * 9/16){
      tempHeight = windowHeight;
      tempWidth = windowHeight * 9/16;
    } else {
      tempWidth = windowWidth;
      tempHeight = windowWidth * 16/9;
    }
    templateScale = tempHeight/1920;

    resizeCanvas(tempWidth, tempHeight, WEBGL);
  } else if(saveMode == 2){
    if(windowWidth < windowHeight){
      tempWidth = windowWidth;
      tempHeight = windowWidth;
    } else {
      tempHeight = windowHeight;
      tempWidth = windowHeight;
    }
    templateScale = tempHeight/1080;

    resizeCanvas(tempWidth, tempHeight, WEBGL);
  }

  cwidth = width;
  cheight = height;
}

function templateDisplay() {
  // template graphics
  if(saveMode == 0){    /////////////////////////////// saveMode Screen
    var logoHeight = 150;
    
    if(templateMode == 0){                ///////////// LAYOUT A
      push();      ////// LOGO
        translate(-width/2, -height/2);
        translate(width - 50, 50);

        scale(logoHeight/pgLogo.height);
        translate(-pgLogo.width, 0);
        image(pgLogo, 0, 0);
      pop();

      push();      ////// TEXT
        scale(templateScale);

        translate(-width/2, -height/2);
        translate(50, height - 50);
        textFont(tFont[0]);
        textSize(20);
        fill(foreColor);
        text("SF Design Week 2023", 0, -25);
        text("06.03 – 06.11", 0, 0);
      pop();
    } else if(templateMode == 1){         ///////////// LAYOUT B
      push();      ////// LOGO
        translate(-width/2, -height/2);
        translate(width - 50, height - 50);

        scale(logoHeight/pgLogo.height);
        translate(-pgLogo.width, -pgLogo.height);
        image(pgLogo, 0, 0);
      pop();

      push();      ////// TEXT
        translate(-width/2, -height/2);
        translate(50, 50);
        textFont(tFont[0]);
        textSize(20);
        fill(foreColor);
        text("SF Design Week 2023", 0, 0);
        text("06.03 – 06.11", 0, 25);
      pop();
    }
  } else if(saveMode == 1){    /////////////////////////////// saveMode Vertical
    var logoHeight = 300;

    if(templateMode == 0){                ///////////// LAYOUT A
      push();      ////// LOGO
        scale(templateScale);

        translate(-1080/2, -1920/2);
        translate(1080 - 100, 150);

        scale(logoHeight/pgLogo.height);
        translate(-pgLogo.width, 0);
        image(pgLogo, 0, 0);
      pop();

      push();      ////// TEXT
        scale(templateScale);

        translate(-1080/2, -1920/2);
        translate(100, 1920 - 100);
        textFont(tFont[0]);
        textSize(41);
        fill(foreColor);
        text("SF Design Week 2023", 0, -50);
        text("06.03 – 06.11", 0, 0);
      pop();
    } else if(templateMode == 1){         ///////////// LAYOUT B
      push();      ////// LOGO
        scale(templateScale);

        translate(-1080/2, -1920/2);
        translate(1080 - 100, 1920 - 100);

        scale(logoHeight/pgLogo.height);
        translate(-pgLogo.width, -pgLogo.height);
        image(pgLogo, 0, 0);
      pop();

      push();      ////// TEXT
        scale(templateScale);

        translate(-1080/2, -1920/2);
        translate(100, 190);
        textFont(tFont[0]);
        textSize(41);
        fill(foreColor);
        text("SF Design Week 2023", 0, 0);
        text("06.03 – 06.11", 0, 50);
      pop();
    }
  } else if(saveMode == 2){    /////////////////////////////// saveMode Square
    var logoHeight = 240;

    if(templateMode == 0){                ///////////// LAYOUT A
      push();      ////// LOGO
        scale(templateScale);

        translate(-1080/2, -1080/2);
        translate(1080 - 60, 60);

        scale(logoHeight/pgLogo.height);
        translate(-pgLogo.width, 0);
        image(pgLogo, 0, 0);
      pop();

      push();      ////// TEXT
        scale(templateScale);

        translate(-1080/2, -1080/2);
        translate(60, 1080 - 60);
        textFont(tFont[0]);
        textSize(41);
        fill(foreColor);
        text("SF Design Week 2023", 0, -50);
        text("06.03 – 06.11", 0, 0);
      pop();
    } else if(templateMode == 1){         ///////////// LAYOUT B
      push();      ////// LOGO
        scale(templateScale);

        translate(-1080/2, -1080/2);
        translate(1080 - 60, 1080 - 60);

        scale(logoHeight/pgLogo.height);
        translate(-pgLogo.width, -pgLogo.height);
        image(pgLogo, 0, 0);
      pop();

      push();      ////// TEXT
        scale(templateScale);

        translate(-1080/2, -1080/2);
        translate(60, 90);
        textFont(tFont[0]);
        textSize(41);
        fill(foreColor);
        text("SF Design Week 2023", 0, 0);
        text("06.03 – 06.11", 0, 50);
      pop();
    }
  }
}