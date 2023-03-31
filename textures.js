//////////////////////////////////////////////
/////////////////////////////       TEXT
//////////////////////////////////////////////

function drawText(p, inp, tFont){
  textSize(pgTextSize);
  textFont(tFont);
  var repeatSize = round(textWidth(inp)) * 1.1;

  pgT[p] = createGraphics(repeatSize, pgTextSize * 1.0);

  pgT[p].background(foreColor);
  pgT[p].fill(bkgdColor);

  pgT[p].noStroke();
  pgT[p].textSize(pgTextSize);
  pgT[p].textAlign(CENTER);
  pgT[p].textFont(tFont);
  pgT[p].text(inp, pgT[p].width/2, pgT[p].height/2 + pgTextSize*0.7/2);
}
