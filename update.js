function setText(val){
  keyText = val;
}

function setRadius(val){
  mainTwist.radius = round(map(val, 0, 100, 10, width/2));

  print(mainTwist.radius);

  mainTwist.resetStructure();
}

function setSlope(val){
  mainTwist.slope = round(map(val, 0, 100, mainTwist.stripH/mainTwist.res, 10 * mainTwist.stripH/mainTwist.res));

  mainTwist.resetStructure();
}

function setStrip(val){
  mainTwist.stripH = round(map(val, 0, 100, 0, mainTwist.radius * 2));

  print(mainTwist.stripH);

  mainTwist.resetStructure();
}
function setColorTop(val){ colorTop = colorA[val]; }
function setColorBot(val){ colorBot = colorA[val]; }
function setColorIn(val){ colorIn = colorA[val]; }
function setColorOut(val){ colorOut = colorA[val]; }

function setTop(val){
  topMode = val;
  if(topMode == 0){
    document.getElementById('radio-top').style.display = "flex";
  } else if(topMode == 1){
    document.getElementById('radio-top').style.display = "none";
  } else if(topMode == 2){
    document.getElementById('radio-top').style.display = "none";
  }
}

function setBot(val){
  botMode = val;
  if(botMode == 0){
    document.getElementById('radio-bot').style.display = "flex";
  } else if(botMode == 1){
    document.getElementById('radio-bot').style.display = "none";
  } else if(botMode == 2){
    document.getElementById('radio-bot').style.display = "none";
  }
}

function setIn(val){
  inMode = val;
  if(inMode == 0){
    document.getElementById('radio-in').style.display = "flex";
  } else if(inMode == 1){
    document.getElementById('radio-in').style.display = "none";
  } else if(inMode == 2){
    document.getElementById('radio-in').style.display = "none";
  }
}

function setOut(val){
  outMode = val;
  if(outMode == 0){
    document.getElementById('radio-out').style.display = "flex";
  } else if(outMode == 1){
    document.getElementById('radio-out').style.display = "none";
  } else if(outMode == 2){
    document.getElementById('radio-out').style.display = "none";
  }
}