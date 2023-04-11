class TwistMain {  
  constructor(){
    this.res = 50;
    this.twists = 5;

    this.radius = 300;
    this.slope = 8;
    this.stripH = 150;

    this.ang = 2*PI/this.res;

    this.culmVhalf = this.res * this.slope * this.twists/2;
  }

  update(){
    this.culmVhalf = this.res * this.slope * this.twists/2;
  }

  display(){
    push();
      translate(0, -this.culmVhalf);
      for(var m = 0; m < this.twists; m++){
        push();
          translate(0, this.res * this.slope * m);

          ////// TOP/BOT
          noStroke();

          for(var p = 0; p < 2; p++){
            var centerU = 0;
            var centerV = 0;
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
              centerU = -currentTexture.width/2;
              centerV = -currentTexture.height/2;
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
                uIn = map(xIn, centerU, centerU + currentTexture.width, 0, 1);
                uOut = map(xOut, centerU, centerU + currentTexture.width, 0, 1);
                vIn = map(zIn, centerV, centerV + currentTexture.height, 0, 1);
                vOut = map(zOut, centerV, centerV + currentTexture.height, 0, 1);
              }
              
              vertex(xIn, y, zIn, uIn, vIn);
              vertex(xOut, y, zOut, uOut, vOut);
            }
            endShape();
          }

          ////// IN/OUT
          for(var p = 0; p < 2; p++){
            var centerU = 0;
            var centerV = 0;
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
              centerU = -currentTexture.width/2;
              centerV = this.culmVhalf - currentTexture.height/2;
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
                u = map(x, centerU, centerU + currentTexture.width, 0, 1);
                vTop = map(yTop + m * this.res * this.slope, centerV, centerV + currentTexture.height, 0, 1);
                vBot = map(yBot + m * this.res * this.slope, centerV, centerV + currentTexture.height, 0, 1);
              } 

              vertex(x, yTop, z, u, vTop);
              vertex(x, yBot, z, u, vBot);
            }
            endShape();
          }
        pop();
      }
    pop();
  }

  resetStructure(){
    this.centerV = (this.res * this.slope * this.twists - height)/2;
    this.centerU = -width/2;
  }
}