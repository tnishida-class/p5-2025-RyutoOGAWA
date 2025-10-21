// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height * 0.8 - height * 0.05;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  // BLANK[1] キャラクターの左右移動
  if(keyIsDown(LEFT_ARROW)){x -= 5;}
  if(keyIsDown(RIGHT_ARROW)){x += 5;}
  if(keyIsDown("B".charCodeAt(0))){
    if(keyIsDown(LEFT_ARROW)){vx -= 1;}
    if(keyIsDown(RIGHT_ARROW)){vx += 1;}
  }else{
    vx = 0;
  }

  // BLANK[2] 重力とジャンプ
  //if(keyPressed(" ".charCodeAt(0))){vy = -10;}

  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // 位置を更新
  x += vx;
  y += vy;

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);
}