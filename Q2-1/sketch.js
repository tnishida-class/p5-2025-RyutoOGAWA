// 小手調べ
function setup(){
  createCanvas(110, 110);
  noFill();
  for(let i = 0; i < 10; i++){
    let size = (i + 1) * 10;  
    if(i < 5){
      stroke(0, 0, 255);
    }else{
      stroke(255, 0, 0);
    }
    ellipse(50, 50, size, size)
  }
}
