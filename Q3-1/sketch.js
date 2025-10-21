// 心臓の鼓動のようなアニメーション
const cycle = 100; // 1周期のフレーム数
let count = 0; // 何フレーム目か

function setup(){
  createCanvas(200, 200);
  count = 0;
}

function draw(){
  let size = 50;
  background(160, 192, 255);
  count = (count + 1) % cycle;
  if(keyIsPressed){
    count = (count + 3) % cycle;
  }
  if(count < cycle / 2){
    size = 50 + cycle - count; //150~100
  }else{
    size = 50 + count; //100~150
  } 
  
  //let speed = 1; // アニメーションの速さ
  // BLANK[2]
  //count = (count + speed) % cycle;
  //let size = 50;
  // BLANK[1] 1周期の前半は size が大きくなり、後半は小さくなる

  ellipse(width / 2, height / 2, size);
}
