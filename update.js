function setRadius(val){
  mainTwist.radius = round(map(val, 0, 100, 150, 800));
}

function setSlope(val){
  // mainTwist.slope = round(map(val, 0, 100, 10, 30));
  mainTwist.slope = round(map(val, 0, 100, 4, 25));
}

function setStrip(val){
  mainTwist.stripH = round(map(val, 0, 100, 75, 500));
}

function setColorTop(val){ colorTop = colorA[val]; }
function setColorBot(val){ colorBot = colorA[val]; }
function setColorIn(val){ colorIn = colorA[val]; }
function setColorOut(val){ colorOut = colorA[val]; }

function setPhoto(section, val){
  if(section == 0){
    pgTop = pgImage[val];
  } else if(section == 1){
    pgBot = pgImage[val];
  } else if(section == 2){
    pgIn = pgImage[val];
  } else {
    pgOut = pgImage[val];
  }
}

function setUpload(section, val){
  if(section == 0){
    var image0 = document.getElementById('topOutput');
    image0.src = URL.createObjectURL(event.target.files[0]);
    pgTop = loadImage(image0.src);
  } else if(section == 1){
    var image1 = document.getElementById('botOutput');
    image1.src = URL.createObjectURL(event.target.files[0]);
    pgBot = loadImage(image1.src);
  } else if(section == 2){
    var image2 = document.getElementById('inOutput');
    image2.src = URL.createObjectURL(event.target.files[0]);
    pgIn = loadImage(image2.src);
  } else {
    var image3 = document.getElementById('outOutput');
    image3.src = URL.createObjectURL(event.target.files[0]);
    pgOut = loadImage(image3.src);
  }
}

function setTop(val){
  topMode = val;
  if(topMode == 0){
    document.getElementById('radio-top').style.display = "flex";
    document.getElementById('photo-top').style.display = "none";
    document.getElementById('upload-top').style.display = "none";

    document.getElementById('uv-top').style.display = "none";
  } else if(topMode == 1){
    document.getElementById('radio-top').style.display = "none";
    document.getElementById('photo-top').style.display = "flex";
    document.getElementById('upload-top').style.display = "none";

    document.getElementById('uv-top').style.display = "flex";
  } else if(topMode == 2){
    document.getElementById('radio-top').style.display = "none";
    document.getElementById('photo-top').style.display = "none";
    document.getElementById('upload-top').style.display = "flex";

    document.getElementById('uv-top').style.display = "flex";
  }
}

function setBot(val){
  botMode = val;
  if(botMode == 0){
    document.getElementById('radio-bot').style.display = "flex";
    document.getElementById('photo-bot').style.display = "none";
    document.getElementById('upload-bot').style.display = "none";

    document.getElementById('uv-bot').style.display = "none";
  } else if(botMode == 1){
    document.getElementById('radio-bot').style.display = "none";
    document.getElementById('photo-bot').style.display = "flex";
    document.getElementById('upload-bot').style.display = "none";

    document.getElementById('uv-bot').style.display = "flex";
  } else if(botMode == 2){
    document.getElementById('radio-bot').style.display = "none";
    document.getElementById('photo-bot').style.display = "none";
    document.getElementById('upload-bot').style.display = "flex";

    document.getElementById('uv-bot').style.display = "flex";
  }
}

function setIn(val){
  inMode = val;
  if(inMode == 0){
    document.getElementById('radio-in').style.display = "flex";
    document.getElementById('photo-in').style.display = "none";
    document.getElementById('upload-in').style.display = "none";

    document.getElementById('uv-in').style.display = "none";
  } else if(inMode == 1){
    document.getElementById('radio-in').style.display = "none";
    document.getElementById('photo-in').style.display = "flex";
    document.getElementById('upload-in').style.display = "none";

    document.getElementById('uv-in').style.display = "flex";
  } else if(inMode == 2){
    document.getElementById('radio-in').style.display = "none";
    document.getElementById('photo-in').style.display = "none";
    document.getElementById('upload-in').style.display = "flex";

    document.getElementById('uv-in').style.display = "flex";
  }
}

function setOut(val){
  outMode = val;
  if(outMode == 0){
    document.getElementById('radio-out').style.display = "flex";
    document.getElementById('photo-out').style.display = "none";
    document.getElementById('upload-out').style.display = "none";

    document.getElementById('uv-out').style.display = "none";
  } else if(outMode == 1){
    document.getElementById('radio-out').style.display = "none";
    document.getElementById('photo-out').style.display = "flex";
    document.getElementById('upload-out').style.display = "none";

    document.getElementById('uv-out').style.display = "flex";
  } else if(outMode == 2){
    document.getElementById('radio-out').style.display = "none";
    document.getElementById('photo-out').style.display = "none";
    document.getElementById('upload-out').style.display = "flex";

    document.getElementById('uv-out').style.display = "flex";
  }
}

function setWrap(section, val){
  if(section == 0){
    wrapTop = val;
  } else if(section == 1){
    wrapBottom = val;
  } else if(section == 2){
    wrapIn = val;
  } else {
    wrapOut = val;
  }
}

function setSpin(){
  spinOn = !spinOn;

  if(spinOn){
    spin = -2*PI/loopLength;
  } else {
    spin = 0;
  }

  // if(val == -1){
  //   spin = -2*PI/loopLength;
  // } else if(val == 1){
  //   spin = -2*PI/loopLength;
  // } else {
  //   spin = 0;
  // }
}

function setTwist(){
  twistOn = !twistOn;

  if(twistOn){
    twist = -2*PI/loopLength;
  } else {
    twist = 0;
  }

  // if(val == -1){
  //   twist = -2*PI/loopLength;
  // } else if(val == 1){
  //   twist = -2*PI/loopLength;
  // } else {
  //   twist = 0;
  // }
}

function setRotX(val){
  rotXcameraAdd = map(val, 0, 100, -PI/8, PI/8);
}

function setRotZ(val){
  // rotZcameraAdd = map(val, 0, 100, -PI/8, PI/8);
  rotZcameraAdd = map(val, 0, 100, -PI/2, PI/2);
}

function setRotY(val){
  // rotYcameraAdd = map(val, 0, 100, -PI/4, PI/4);
  rotYcameraAdd = map(val, 0, 100, -PI, PI);
}

function setUoffset(select, val){
  uOffset[select] = val;
}

function setVoffset(select, val){
  vOffset[select] = val;
}

function setTestRot(val){
  textureRot = map(val, 0, 100, -PI, PI);
}

function hideWidget(){
  widgetOn = !widgetOn;

  if(widgetOn){
    document.getElementById('widget').style.display = "block";
  } else {
    document.getElementById('widget').style.display = "none";
  }
}

function sizeSaveChange(val){
  saveMode = val;
  resizeForPreview();
  setTemplate(templateMode);
}

function toggleRecMessage(){
  recMessageOn = !recMessageOn;

  if(recMessageOn){
    document.getElementById('recStatus').style.display = "block";
  } else {
    document.getElementById('recStatus').style.display = "none";
  }
}

function setTemplate(val){
  templateMode = val;
}

function setRibbon(val){
  var ribbonMode = val;

  secretX = 0;
  secretY = 0;
  secretZ = 0;

  rotXcameraAdd = 0;
  rotZcameraAdd = 0;
  rotYcameraAdd = 0;

  spinCore = 0;
  twistTicker = 0;

  if(saveMode == 0){
    colorIn = colorA[2];

    if(ribbonMode == 0){
      mainTwist.radius = 556;
      mainTwist.slope = 10;
      mainTwist.stripH = mainTwist.radius * 4/5;

      rotXcamera = 0.2513; 
      rotZcamera = -atan2(height, width);
      rotYcamera = -0.0628;
    } else if(ribbonMode == 1){
      mainTwist.radius = width/4;
      mainTwist.slope = 10;
      mainTwist.stripH = mainTwist.radius * 4/5;

      rotXcamera = -0.094; 
      rotZcamera = 0.095;
      rotYcamera = 0;
    }
  } else if(saveMode == 1){
    colorIn = colorA[3];

    if(ribbonMode == 0){
      mainTwist.radius = 364;
      mainTwist.slope = 15;
      mainTwist.stripH = 216;

      rotXcamera = 1.571; 
      rotZcamera = -0.408;
      rotYcamera = 0.628;
    } else if(ribbonMode == 1){
      mainTwist.radius = 393;
      mainTwist.slope = 15;
      mainTwist.stripH = 362;

      rotXcamera = -0.126; 
      rotZcamera = -0.188;
      rotYcamera = 1.005;
    }
  } else if(saveMode == 2){
    colorIn = colorA[3];

    if(ribbonMode == 0){
      secretY = -400;

      mainTwist.radius = 605;
      mainTwist.slope = 24;
      mainTwist.stripH = 363;

      rotXcamera = 1.508; 
      rotZcamera = -0.475;
      rotYcamera = 0.314;
    } else if(ribbonMode == 1){
      secretX = 150;

      mainTwist.radius = 631;
      mainTwist.slope = 17;
      mainTwist.stripH = 391;

      rotXcamera = -0.126; 
      rotZcamera = -0.314;
      rotYcamera = 0.691;
    }
  }
  document.getElementById('radiusSlider').value = map(mainTwist.radius, 150, 800, 0, 100);
  document.getElementById('stripSlider').value = map(mainTwist.stripH,  75, 500, 0, 100);
  // document.getElementById('slopeSlider').value = map(mainTwist.slope, 10, 30, 0, 100);
  document.getElementById('slopeSlider').value = map(mainTwist.slope, 4, 25, 0, 100);
  
  document.getElementById('rotXslider').value = map(0, -PI/8, PI/8, 0, 100);
  document.getElementById('rotZslider').value = map(0, -PI/2, PI/2, 0, 100);
  document.getElementById('rotYslider').value = map(0, -PI, PI, 0, 100);
}

// function setRotX(val){
//   rotXcameraAdd = map(val, 0, 100, -PI/8, PI/8);
// }

// function setRotZ(val){
//   // rotZcameraAdd = map(val, 0, 100, -PI/8, PI/8);
//   rotZcameraAdd = map(val, 0, 100, -PI/2, PI/2);
// }

// function setRotY(val){
//   // rotYcameraAdd = map(val, 0, 100, -PI/4, PI/4);
//   rotYcameraAdd = map(val, 0, 100, -PI, PI);

function setInitialTwist(){
  templateMode = 0;

  rotXcameraAdd = 0;
  rotZcameraAdd = 0;
  rotYcameraAdd = 0;

  spinCore = 0;
  twistTicker = 0;

  mainTwist.radius = 556;
  mainTwist.slope = 10;
  mainTwist.stripH = mainTwist.radius * 4/5;

  rotXcamera = 0.2513; 
  rotZcamera = -atan2(height, width);
  rotYcamera = -0.0628;

  document.getElementById('radiusSlider').value = map(mainTwist.radius, 150, 800, 0, 100);
  document.getElementById('stripSlider').value = map(mainTwist.stripH,  75, 500, 0, 100);
  // document.getElementById('slopeSlider').value = map(mainTwist.slope, 10, 30, 0, 100);
  document.getElementById('slopeSlider').value = map(mainTwist.slope, 4, 25, 0, 100);

  document.getElementById('rotXslider').value = map(0, -PI/8, PI/8, 0, 100);
  document.getElementById('rotZslider').value = map(0, -PI/2, PI/2, 0, 100);
  document.getElementById('rotYslider').value = map(0, -PI, PI, 0, 100);
}