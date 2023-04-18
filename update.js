function setRadius(val){
  mainTwist.radius = round(map(val, 0, 100, 10, width));
}

function setSlope(val){
  mainTwist.slope = round(map(val, 0, 100, mainTwist.stripH/(mainTwist.res/mainTwist.twists), 10 * mainTwist.stripH/(mainTwist.res/mainTwist.twists)));
}

function setStrip(val){
  mainTwist.stripH = round(map(val, 0, 100, 0, mainTwist.radius * 2));
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

function setSpin(val){
  spin = map(val, 0, 20, -0.1, 0.1);
}

function setRotX(val){
  rotXcamera = map(val, 0, 100, -PI/2, PI/2);
}

function setRotZ(val){
  rotZcamera = map(val, 0, 100, -PI/2, PI/2);
}

function setRotY(val){
  rotYcamera = map(val, 0, 100, -PI, PI);
}

function setUoffset(select, val){
  uOffset[select] = val;
}

function setVoffset(select, val){
  vOffset[select] = val;
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
}

function toggleRecMessage(){
  recMessageOn = !recMessageOn;

  if(recMessageOn){
    document.getElementById('recStatus').style.display = "block";
  } else {
    document.getElementById('recStatus').style.display = "none";
  }
}