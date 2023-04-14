class TwistMain {  
  constructor(){
    this.res = 400;

    this.radius = 300;
    this.slope = 8;
    this.stripH = 150;

    this.twists = 5;
    this.ang = (this.twists * 2 * PI)/this.res;
  }

  update(){
  }

  display(){
    push();
      translate(0, -this.res * this.slope/2);

      ////// TOP/BOT
      // fill(bkgdColor);
      // stroke(foreColor);
      noStroke();

      for(var p = 0; p < 2; p++){
        var currentTexture;
        var textureOn = false;

        if(p == 0 && topMode == 1){
          currentTexture = pgTop;
        } else if(p == 0 && topMode == 2){
          currentTexture = pgTop;
        } else if(p == 1 && botMode == 1){
          currentTexture = pgBot;
        } else if(p == 1 && botMode == 2){
          currentTexture = pgBot;
        }

        if(p == 0 && topMode == 0){
          fill(colorTop);
        } else if(p == 1 && botMode == 0){
          fill(colorBot);
        } else {
          texture(currentTexture);
          textureOn = true;
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

            uIn = map(xInU, 0, currentTexture.width, 0, 1);
            uOut = map(xOutU, 0, currentTexture.width, 0, 1);
            vIn = map(zInV, 0, currentTexture.height, 0, 1);
            vOut = map(zOutV, 0, currentTexture.height, 0, 1);
          }
          
          vertex(xIn, y, zIn, uIn, vIn);
          vertex(xOut, y, zOut, uOut, vOut);
        }
        endShape();
      }

      ////// IN/OUT
      for(var p = 0; p < 2; p++){
        var currentTexture;
        var textureOn = false;

        if(p == 0 && inMode == 1){
          currentTexture = pgIn;
        } else if(p == 0 && inMode == 2){
          currentTexture = pgIn;
        } else if(p == 1 && outMode == 1){
          currentTexture = pgOut;
        } else if(p == 1 && outMode == 2){
          currentTexture = pgOut;
        }

        if(p == 0 && inMode == 0){
          fill(colorIn);
        } else if(p == 1 && outMode == 0){
          fill(colorOut);
        } else {
          texture(currentTexture);
          textureOn = true;
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

            u = map(xU, 0, currentTexture.width, 0, 1);

            var yTopV = yTop;
            var yBotV = yBot;

            vTop = map(yTopV, 0, currentTexture.height, 0, 1);
            vBot = map(yBotV, 0, currentTexture.height, 0, 1);
          } 

          vertex(x, yTop, z, u, vTop);
          vertex(x, yBot, z, u, vBot);
        }
        endShape();
      }
    pop();
  }
}