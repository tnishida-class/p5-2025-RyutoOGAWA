// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 8; // マスの一辺の長さ
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i + j) % 2 == 1){
        fill(128);
        rect(size * i, size * j, size, size);
      }
    }
  }
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 3; j++){
      if((i + j) % 2 == 1){
        fill(255, 0, 0);
        ellipse(size * i + size / 2, size * j + size / 2 , size - 5, size - 5);
      }
    }
  }
  for(let i = 0; i < 8; i++){
    for(let j = 5; j < 8; j++){
      if((i + j) % 2 == 1){
        fill(0);
        ellipse(size * i + size / 2, size * j + size / 2 , size - 5, size - 5);
      }
    }
  }
}
// BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j