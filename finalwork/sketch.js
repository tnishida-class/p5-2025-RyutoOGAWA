// 最終課題を制作しよう

let refreshButton;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(240);

  refreshButton = createButton('新しいフレーズを生成する');
  refreshButton.position(30, 50);
  refreshButton.mousePressed(reloadPage);

  //各音符の長さを2小節におさまるように決定する
  let length = [];
  let lengthSum = 0;
  for(let i = 0; lengthSum < 8; i++){
    length[i] = Math.round(random(1, 3));
    if(length[i] == 3){
      length[i] = 4;
    }
    if(lengthSum + length[i] < 9){
      lengthSum += length[i];
    }else if(lengthSum + length[i] >= 9){
      length.pop();
      i -= 1;
    }
  }
  for(let i = length.length; lengthSum < 16; i++){
    length[i] = Math.round(random(1, 3));
    if(length[i] == 3){
      length[i] = 4;
    }
    if(lengthSum + length[i] < 17){
      lengthSum += length[i];
    }else if(lengthSum + length[i] >= 17){
      length.pop();
      i -= 1;
    }
  }
  console.log(length);

  //各音符の音高を0～10で決定する
  let tone = [];
  for(let i = 0; i < length.length; i++){
    tone[i] = Math.round(random(0, 10));
  }
  console.log(tone);

  //五線を描く
  const n = 20;
  for(let i = 3; i < 8; i++){line(0, height * i / n, width, height * i / n);}
  for(let i = 13; i < 18; i++){line(0, height * i / n, width, height * i / n);}
  
  //noStroke();

  //音符を描く
  let lengthSumB = 1;
  for(let i = 0; i < length.length; i++){
    strokeWeight(5);
    //音符の長さによる形の別
    if(length[i] == 1){
      fill(0);
    }else if(length[i] == 2){
      fill(0);
    }else if(length[i] == 4){
      fill(255);
    }
    //各音符の位置
    if(lengthSumB < 9){
      ellipse(width * lengthSumB / 9, height * (tone[i] + 5) / 40, 40, 30);
      if(tone[i] < 6){
        line(width * lengthSumB / 9 - 20, height * (tone[i] + 5) / 40, width * lengthSumB / 9 - 20, height * (tone[i] + 5) / 40 + 100);
        if(length[i] == 1){hata(width * lengthSumB / 9 - 20, height * (tone[i] + 5) / 40 + 100);}
      }else if(tone[i] >= 6){
        line(width * lengthSumB / 9 + 20, height * (tone[i] + 5) / 40, width * lengthSumB / 9 + 20, height * (tone[i] + 5) / 40 - 100);
        if(length[i] == 1){hata(width * lengthSumB / 9 + 20, height * (tone[i] + 5) / 40 - 100);}
      }
      lengthSumB += length[i];
    }else if(lengthSumB >= 9){
      ellipse(width * (lengthSumB - 8) / 9, height * (tone[i] + 25) / 40, 40, 30);
      if(tone[i] < 6){
        line(width * (lengthSumB - 8) / 9 - 20, height * (tone[i] + 25) / 40, width * (lengthSumB - 8) / 9 - 20, height * (tone[i] + 25) / 40 + 100);
        if(length[i] == 1){hata(width * (lengthSumB - 8) / 9 - 20, height * (tone[i] + 25) / 40 + 100);}
      }else if(tone[i] >= 6){
        line(width * (lengthSumB - 8) / 9 + 20, height * (tone[i] + 25) / 40, width * (lengthSumB - 8) / 9 + 20, height * (tone[i] + 25) / 40 - 100);
        if(length[i] == 1){hata(width * (lengthSumB - 8) / 9 + 20, height * (tone[i] + 25) / 40 - 100);}
      }
      lengthSumB += length[i];
    }
  }
}

function draw(){
  //background(160, 192, 255);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

// ページをリロードする関数
function reloadPage() {
  location.reload();
}

//八分音符の旗を描く関数
function hata(x, y){
  strokeWeight(10);
  line(x + 2, y, x + 40, y);
}