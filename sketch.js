/* 
  Maeve Potter <mp0000@bard.edu>
 I worked alone.
 */

var paddle_x, paddle_y;
var paddle_w, paddle_h;
var paddle_step;

var ball_x, ball_y;
var ball_r;
var ball_x_step, ball_y_step;

var score;
var lives;


function setup() {
  
  createCanvas(500, 300);
  paddle_h = 16;
  paddle_w = 6 * paddle_h;
  paddle_x = width / 2;
  paddle_y = height - paddle_h;
  paddle_step = 0;
  ball_r = 13;
  score = 0;
  lives = 5;
  reset();
}

function draw() {

  background(0, 0, mouseY-400, 100);
  

  // move paddle
  //paddle_x += (mouseX - paddle_x) * .1;
  paddle_x = paddle_x + paddle_step;

  // is the ball hitting the right or left wall?
  if (ball_x - ball_r < 0 || ball_x + ball_r > width) {
    ball_x_step = -ball_x_step;
  }

  // hitting the top?
  if (ball_y - ball_r < 0) {
    ball_y_step = -ball_y_step;
  }

  // hitting the paddle?
  if (ball_y + ball_r > paddle_y) {
    if (ball_x >= paddle_x && ball_x <= paddle_x + paddle_w) {
      ball_y_step = -ball_y_step;
      ball_y = paddle_y - ball_r;
    }
    else if (ball_y + ball_r > paddle_y){
      reset();
    }
  }

  // move ball by ball_x_step and ball_y_step
  ball_x = ball_x + ball_x_step;
  ball_y = ball_y + ball_y_step;

  //draw ball
    noStroke();
    fill(43, 159, 161);
    ellipse(ball_x, ball_y, ball_r * 2, ball_r * 2);

  // draw paddle
    stroke(24);
    fill(60);
    rect(paddle_x, paddle_y, paddle_w, paddle_h);

strokeWeight(1);
fill(221, 239, 255, 100);
    
//score
  if (frameCount==300){
    score=10;
  }
  
  if (frameCount==600){
    score=20;
  }
  
  if (frameCount==900){
    score=30;
  }
  
  if (frameCount==1200){
    score=40;
  }
  
  if (frameCount==1500){
    score=50;
  }
  
  if (frameCount==1800){
    score=60;
  }
  
  if (frameCount==2100){
    score=70;
  }
  
   if (frameCount==2400){
    score=80;
  }
  
   if (frameCount==2700){
    score=90;
  }
  
   if (frameCount==3000){
    score=100;
  }
  
   if (frameCount==3300){
    score=110;
  }
  
  if (frameCount==3600){
    score=120;
  }
  
  if (frameCount==3900){
    score=130;
  }
  
  if (frameCount==4200){
    score=140;
  }
  
  if (frameCount==4500){
    score=150;
  }
  
  if (frameCount==4800){
    score=160;
  }
  
  if (frameCount==5100){
    score=170;
  }
  
   if (frameCount==5400){
    score=80;
  }
  
   if (frameCount==5700){
    score=190;
  }
  
   if (frameCount==6000){
    score=200;
  }
  
  
  
//score
    noStroke();
  if (score==0){
    color(255, 255, 255, 60);
    text("Score: 0", 40, 40);
  }
  
  if (score==10){
    text("Score: 5", 40, 40);
  }
  
  if (score==20){
    text("Score: 10", 40, 40);
  }
  
  if (score==30){
    text("Score: 15", 40, 40);
  }
  
  if (score==40){
    text("Score: 20", 40, 40);
  }
  
    if (score==50){
    text("Score: 25", 40, 40);
  }
  
   if (score==60){
    text("Score: 30", 40, 40);
  }
  
  if (score==70){
    text("Score: 35", 40, 40);
  }
  
  if (score==80){
    text("Score: 40", 40, 40);
  }
  
  if (score==90){
    text("Score: 45", 40, 40);
  }
  
  if (score==100){
    text("Score: 50", 40, 40);
  }
  
    if (score==110){
    text("Score: 55", 40, 40);
  }
  
  if (score==120){
    text("Score: 60", 40, 40);
  }
  
  if (score==130){
    text("Score: 65", 40, 40);
  }
  
  if (score==140){
    text("Score: 70", 40, 40);
  }
  
    if (score==150){
    text("Score: 75", 40, 40);
  }
  
   if (score==160){
    text("Score: 80", 40, 40);
  }
  
  if (score==170){
    text("Score: 85", 40, 40);
  }
  
  if (score==180){
    text("Score: 90", 40, 40);
  }
  
  if (score==190){
    text("Score: 95", 40, 40);
  }
  
  if (score==200){
    text("Score: 100", 40, 40);
  }
  
  
//lives count
   if (ball_y + ball_r > paddle_y) {
    if (ball_x >= paddle_x && ball_x <= paddle_x + paddle_w) {
      ball_y_step = -ball_y_step;
      ball_y = paddle_y - ball_r;
    }
    else if (ball_y + ball_r > paddle_y){
      lives=lives-1;;
    }

  }
  
  
//lives
  if (lives==5){
    noStroke();
    color(255, 255, 255, 100);
    text("~~~~~", 400, 40);
  }
  
    if (lives==4){
    noStroke();
    text("~~~~", 400, 40);
  }
  
    if (lives==3){
    noStroke();
    text("~~~", 400, 40);
      
  }
  
    if (lives==2){
    noStroke();
    text("~~", 400, 40);
  }
  
    if (lives==1){
    noStroke();
    text("~", 400, 40);
  }
  
    
  if (lives==0){
    stroke(0);
    fill(15, 84, 196, 100);
    background(255);
    text("You lose, sucker.");
    reset();
  }

  
  if (ball_y + ball_r > paddle_y){
    noStroke();
    lives==4
    
  }
}

function reset() {
  ball_x = random(ball_r, width - ball_r);
  ball_y = random(ball_r, height / 2);
  ball_x_step = random(-3, 3);
  ball_y_step = random(1, 3);
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    paddle_step = -3;
  } else if (keyCode == RIGHT_ARROW) {
    paddle_step = 3;
  } else if (key == ' ') {
    reset();
  }
}

function keyReleased() {
  paddle_step = 0;
}


