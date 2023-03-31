class TwistMain {  
  constructor(){
    this.res = 50;
    this.twists = 5;

    this.radius = 300;
    this.slope = 8;
    this.stripH = 150;

    this.ang = 2*PI/this.res;
  }

  update(){

  }

  display(){
    var centerU, centerV; 

    push();
      translate(0, -this.res * this.slope * this.twists/2);
      for(var m = 0; m < this.twists; m++){
        push();
          translate(0, this.res * this.slope * m);

          ////// TOP/BOT
          noStroke();

          for(var p = 0; p < 2; p++){
            if(p==0){
              fill(colorTop);
            } else {
              fill(colorBot);
            }

            beginShape(TRIANGLE_STRIP);
            for(var n = 0; n <= this.res; n++){
              var y = this.slope * n + p * this.stripH;

              var xIn = cos(n * this.ang) * (this.radius - this.stripH/2);
              var zIn = sin(n * this.ang) * (this.radius - this.stripH/2);

              var xOut = cos(n * this.ang) * (this.radius + this.stripH/2);
              var zOut = sin(n * this.ang) * (this.radius + this.stripH/2);
              
              vertex(xIn, y, zIn);
              vertex(xOut, y, zOut);
            }
            endShape();
          }

          ////// IN/OUT
          for(var p = 0; p < 2; p++){
            if(p==0){
              fill(colorIn);
            } else {
              texture(pgImage[0]);
              centerU = -pgImage[0].width/2;

              var culm = this.res * this.slope * this.twists/2;
              centerV = culm - pgImage[0].width/2;
            }

            beginShape(TRIANGLE_STRIP);
            for(var n = 0; n <= this.res; n++){
              var x = cos(n * this.ang) * (this.radius - this.stripH/2 + p * this.stripH);
              var z = sin(n * this.ang) * (this.radius - this.stripH/2 + p * this.stripH);

              var yTop = this.slope * n;
              var yBot = this.slope * n + this.stripH;
              
              var u = map(x, centerU, centerU + pgImage[0].width, 0, 1);
              var vTop = map(yTop + m * this.res * this.slope, centerV, centerV + pgImage[0].height, 0, 1);
              var vBot = map(yBot + m * this.res * this.slope, centerV, centerV + pgImage[0].height, 0, 1);

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