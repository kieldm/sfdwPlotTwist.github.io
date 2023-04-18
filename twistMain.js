class TwistMain {  
  constructor(){
    this.res = 300;

    this.radius = 300;
    this.slope = 8;
    this.stripH = 150;

    this.twists = 5;
    this.ang = (this.twists * 2 * PI)/this.res;

    this.yHalf = -this.res * this.slope/2 - this.stripH/2;
  }

  update(){

  }

  display(){
    push();
      translate(0, this.yHalf);

      ////// TOP/BOT
      // fill(bkgdColor);
      // stroke(foreColor);
      noStroke();

      for(var p = 0; p < 2; p++){       ///////// p == 0: Top  ///////// p == 1: Bot
        var currentTexture;
        var textureOn = false;
        var offU = 0;
        var offV = 0;

        if(p == 0 && topMode == 1){
          currentTexture = pgTop;
        } else if(p == 0 && topMode == 2){
          currentTexture = pgTop;
        } else if(p == 1 && botMode == 1){
          currentTexture = pgBot;
        } else if(p == 1 && botMode == 2){
          currentTexture = pgBot;
        }

        if(p==0) {
          if(wrapTop == 0){
            textureWrap(MIRROR);
          } else if(wrapTop == 1){
            textureWrap(REPEAT);
          } else {
            textureWrap(CLAMP);
          }
        } else if(p==1) {
          if(wrapBot == 0){
            textureWrap(MIRROR);
          } else if(wrapBot == 1){
            textureWrap(REPEAT);
          } else {
            textureWrap(CLAMP);
          }
        } 

        if(p == 0 && topMode == 0){
          fill(colorTop);
        } else if(p == 1 && botMode == 0){
          fill(colorBot);
        } else {
          texture(currentTexture);
          textureOn = true;
        }

        if(textureOn){
          centerW = -currentTexture.width/2;
          centerH = -currentTexture.height/2;
          if(p==0){
            offU = map(uOffset[0], 0, 100, -currentTexture.width, currentTexture.width);
            offV = map(vOffset[0], 0, 100, -currentTexture.height, currentTexture.height);
          } else if(p==1){
            offU = map(uOffset[1], 0, 100, -currentTexture.width, currentTexture.width);
            offV = map(vOffset[1], 0, 100, -currentTexture.height, currentTexture.height);
          }
        }

        beginShape(TRIANGLE_STRIP);
        for(var n = 0; n <= this.res; n++){
          var y = this.slope * n + p * this.stripH;

          var xIn = cos(n * this.ang) * (this.radius - this.stripH/2);
          var zIn = sin(n * this.ang) * (this.radius - this.stripH/2);

          var xOut = cos(n * this.ang) * (this.radius + this.stripH/2);
          var zOut = sin(n * this.ang) * (this.radius + this.stripH/2);
          
          var uIn = 0; var uOut = 0; var vIn = 0; var vOut = 0;
          if(textureOn){
            var xInU = cos(n * this.ang - spinCore) * (this.radius - this.stripH/2);
            var zInV = sin(n * this.ang - spinCore) * (this.radius - this.stripH/2);

            var xOutU = cos(n * this.ang - spinCore) * (this.radius + this.stripH/2);
            var zOutV = sin(n * this.ang - spinCore) * (this.radius + this.stripH/2);

            uIn = map(xInU + offU, 0, currentTexture.width, 0, 1);
            uOut = map(xOutU + offU, 0, currentTexture.width, 0, 1);
            vIn = map(zInV + offV, 0, currentTexture.height, 0, 1);
            vOut = map(zOutV + offV, 0, currentTexture.height, 0, 1);
          }
          
          vertex(xIn, y, zIn, uIn, vIn);
          vertex(xOut, y, zOut, uOut, vOut);
        }
        endShape();
      }

      ////// IN/OUT
      for(var p = 0; p < 2; p++){       ///////// p == 0: In  ///////// p == 1: Out
        var currentTexture;
        var textureOn = false;
        var centerW = 0;
        var centerH = 0;
        var offU = 0;
        var offV = 0;

        if(p == 0 && inMode == 1){
          currentTexture = pgIn;
        } else if(p == 0 && inMode == 2){
          currentTexture = pgIn;
        } else if(p == 1 && outMode == 1){
          currentTexture = pgOut;
        } else if(p == 1 && outMode == 2){
          currentTexture = pgOut;
        }

        if(p==0) {
          if(wrapIn == 0){
            textureWrap(MIRROR);
          } else if(wrapIn == 1){
            textureWrap(REPEAT);
          } else {
            textureWrap(CLAMP);
          }
        } else if(p==1) {
          if(wrapOut == 0){
            textureWrap(MIRROR);
          } else if(wrapOut == 1){
            textureWrap(REPEAT);
          } else {
            textureWrap(CLAMP);
          }
        } 

        if(p == 0 && inMode == 0){
          fill(colorIn);
        } else if(p == 1 && outMode == 0){
          fill(colorOut);
        } else {
          texture(currentTexture);
          textureOn = true;
        }

        if(textureOn){
          centerW = -currentTexture.width/2;
          centerH = -currentTexture.height/2;
          if(p==0){
            offU = map(uOffset[2], 0, 100, -currentTexture.width, currentTexture.width);
            offV = map(vOffset[2], 0, 100, -currentTexture.height, currentTexture.height);
          } else if(p==1){
            offU = map(uOffset[3], 0, 100, -currentTexture.width, currentTexture.width);
            offV = map(vOffset[3], 0, 100, -currentTexture.height, currentTexture.height);
          }
        }

        beginShape(TRIANGLE_STRIP);
        for(var n = 0; n <= this.res; n++){
          var x = cos(n * this.ang) * (this.radius - this.stripH/2 + p * this.stripH);
          var z = sin(n * this.ang) * (this.radius - this.stripH/2 + p * this.stripH);

          var yTop = this.slope * n;
          var yBot = this.slope * n + this.stripH;
          
          var u = 0; var vTop = 0; var vBot = 0;
          if(textureOn){
            var xU = cos(n * this.ang - spinCore) * (this.radius - this.stripH/2 + p * this.stripH);

            u = map(xU + offU, centerW, currentTexture.width + centerW, 0, 1);

            var yTopV = yTop + this.yHalf;
            var yBotV = yBot + this.yHalf;

            vTop = map(yTopV + offV, centerH, currentTexture.height + centerH, 0, 1);
            vBot = map(yBotV + offV, centerH, currentTexture.height + centerH, 0, 1);
          } 

          vertex(x, yTop, z, u, vTop);
          vertex(x, yBot, z, u, vBot);
        }
        endShape();
      }
    pop();
  }
}