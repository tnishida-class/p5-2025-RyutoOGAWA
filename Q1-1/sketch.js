// 神戸市のマーク
function setup(){
  createCanvas(200, 200);
  background(255);

  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  stroke(41, 125, 64)
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  arc(100 - 25, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);
}
