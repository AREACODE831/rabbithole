'use strict';


let state = 'title';
let cnv;
let points = 1;
let lives = 1;
let w = 600;
let h = 600;
let player;
let alice;
let coins = [];
let enemies = [];
let fails = [];
let safes = [];
//let bgImg;
let playerImg;
let coinImg;
let enemyImg;
let titleImg;
let failImg;
let safeImg;
let gameBgc;
let introImg;
let holeImg;
let eyeImg;
let inImg;
let cursorImg;
let holeSize = 200;
let bhImg;
let wbImg;
//let gifLoad;
//let gifCreate;
let aliceImg;
let buymeImg;
let gradImg;
let drinkImg;



function preload() {
  playerImg = loadImage('asset/r.png');
  //coinImg = loadImage('asset/hole.png');
  coinImg = loadImage('asset/st.png');
  enemyImg = loadImage('asset/n.png');
  titleImg = loadImage('asset/title.png');
  failImg = loadImage('asset/rec.png');
  safeImg = loadImage('asset/c.png');
  introImg = loadImage('asset/intro.png');
  //bgImg = loadImage('asset/bg.png');
  holeImg = loadImage('asset/2.png');
  eyeImg = loadImage('asset/eye.jpg');
  inImg = loadImage('asset/ra.png');
  cursorImg = loadImage('asset/r.png');
  bhImg = loadImage('asset/blackhole.png');
  wbImg = loadImage('asset/rabbit.png');
  aliceImg = loadImage('asset/alice.png');
  //gifLoad = loadImage("asset/'magic.gif");
  //gifCreate = createImg
  buymeImg = loadImage('asset/b.png');
  gradImg = loadImage('asset/g.png');
  drinkImg = loadImage('asset/dm.png');

}


function setup() {
  cnv = createCanvas(w, h);
  //bgImg = loadImage('asset/hole.jpg');
  gameBgc = color(107, 242, 217);

  frameRate(50);
  imageMode(CENTER);
  rectMode(CENTER);
  textFont('Futura');

  player = new Player();
  alice = new Alice();

  //coins[0] = new Coin();
  coins.push(new Coin());
  enemies.push(new Enemy());
  fails.push(new Fail());
  safes.push(new Safe());

}

function draw() {
  //background(bgImg);

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'instruction':
      instruction();
      cnv.mouseClicked(instructMouseClicked);
      break;

    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'level 2':
      level2();
      cnv.mouseClicked(level2MouseClicked);
      break;
    case 'down':
      down();
      cnv.mouseClicked(downMouseClicked);
      break;
    case 'level 3':
      level3();
      cnv.mouseClicked(level3MouseClicked);
      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    case 'final':
      final();
      cnv.mouseClicked(finalMouseClicked);
      break;
    case 'game over':
      gameOver();
      cnv.mouseClicked(gameOverMouseClicked);
      break;
    default:
      break;
  }

  // if (state === 'title') {
  //   title();
  //   cnv.mouseClicked(titleMouseClicked);
  //
  // } else if (state === 'level 1' && points > 50) {
  //   level1();
  //   cnv.mouseClicked(level1MouseClicked);
  // } else {
  //
  // }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left'
    alice.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
    alice.direction = 'right'
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up'
    alice.direction = 'up'
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down'
    alice.direction = 'down'
  } else if (key == ' ') {
    player.direction = 'still';
    alice.direction = 'still';
  }


  // if (keyCode == 'a') {
  //   alice.direction = 'left'
  // } else if (keyCode == 'd') {
  //   alice.direction = 'right'
  // } else if (keyCode == 'w') {
  //   alice.direction = 'up'
  // } else if (keyCode == 's') {
  //   alice.direction = 'down'
  // }
}



function keyReleased() {

  let numberKeysPressed = 0;

  if (keyIsDown(LEFT_ARROW)) {
    numberKeysPressed++;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    numberKeysPressed++;
  }
  if (keyIsDown(DOWN_ARROW)) {
    numberKeysPressed++;
  }
  if (keyIsDown(UP_ARROW)) {
    numberKeysPressed++;
  }
  console.log(numberKeysPressed);
  if (numberKeysPressed == 0) {
    player.direction = 'still';
  }
  if (numberKeysPressed == 0) {
    alice.direction = 'still';
  }
}

function title() {
  background(147, 103, 255);
  textSize(80);
  textFont('Girassol');
  fill(255);
  textAlign(CENTER);
  //text('Rabbit Hole', w / 2, h / 5);
  image(titleImg, w / 2, h / 3, 300, 250);
  image(inImg, w / 2, h / 1.15, 300, 250);
  push();
  textSize(30);
  textFont('Mansalva');
  text('click anywhere to start!', w / 2, h / 1.5);
  pop();
  //image(gifLoad, w / 2, h / 1);

}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'instruction'
}

function instruction(){
  background(147, 103, 255);
  textSize(30);
  textFont('Mansalva');
  text('Rabbit Hole', w / 2, h / 5);
  push();
  textSize(22);
  textAlign(LEFT);
  text('Are you the one ready to fall into the rabbit hole of adventure?', w / 30, h / 1.8);

  text('You can use arrows to move around to get or lose the points', w / 30, h / 2.35);
  text('by facing the obstacles coming down.', w / 30, h / 2.15);

  text('Nobody but curious person can see the White Rabbit.', w / 30, h / 3);
  // text('by facing the obstacles coming down.', w / 20, h / 1.9);


  pop();
  image(introImg, w / 5.3, h / 1.2, 225, 225);

}

function instructMouseClicked(){
  state = 'level 1';
}

function level1() {
  // background(107, 242, 217);
  gameBg()
  //text('click for points', w/2, h - 30);

  //frequency of coin droping

  if (random(1) <= 0.005) {
    coins.push(new Coin());
  }
  if (random(1) <= 0.005) {
    enemies.push(new Enemy());
  }
  if (random(1) <= 0.005) {
    fails.push(new Fail());
  }
  if (random(1) <= 0.005) {
    safes.push(new Safe());
  }

  player.display();
  player.move();

  // coins[0].display();
  // coins[0].move();

  //iterating through coins array to display and move them
  //using for loop
  for (let i = 0; i < coins.length; i++) {
    coins[i].display();
    coins[i].move();
  }

  for (let i = 0; i < enemies.length; i++) {
    enemies[i].display();
    enemies[i].move();
  }

  for (let i = 0; i < fails.length; i++) {
    fails[i].display();
    fails[i].move();
  }
  for (let i = 0; i < safes.length; i++) {
    safes[i].display();
    safes[i].move();
  }

  //using foreach loop
  // coins.forEach(function(coin){
  //   coin.display();
  //   coin.move();
  // })

  //using for of loop
  // for (let coin of coins){
  //   coin.display();
  //   coin.move();
  // }

  //check for collision, if there is a collision increase points by 1 and splice that coin out of array.
  //need to iterate backwards through array

  for (let i = coins.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2) {
      points--;
      console.log(points);
      coins.splice(i, 1);
    } else if (coins[i].y > h) {
      coins.splice(i, 1);
      //console.log('coin is out of town');

    }
  }

  //enemies
  for (let i = enemies.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, enemies[i].x, enemies[i].y) <= (player.r + enemies[i].r) / 2) {
      points++;
      console.log(points);
      enemies.splice(i, 1);
    } else if (enemies[i].y > h) {
      enemies.splice(i, 1);
      //console.log('enemies is out of town');

    }
  }

  for (let i = fails.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, fails[i].x, fails[i].y) <= (player.r + fails[i].r) / 2) {
      points--;
      console.log(points);
      fails.splice(i, 1);
    } else if (fails[i].y > h) {
      fails.splice(i, 1);
      //console.log('enemies is out of town');

    }
  }
  for (let i = safes.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, safes[i].x, safes[i].y) <= (player.r + safes[i].r) / 2) {
      points++;
      console.log(points);
      safes.splice(i, 1);
    } else if (safes[i].y > h) {
      safes.splice(i, 1);
      //console.log('enemies is out of town');

    }
  }

  text(`pOiNtS: ${points}`, w / 7, h / 15);

  //check point values to win or lose the game.
  if (points >= 3) {
    state = 'you win';
  } else if (points <= -2) {
    state = 'game over';
  }

  if (points > 3) {
    gameBgc = color(138, 214, 232);
    // lvlInt = 2;
  }
  if (points >5) {
    gameBgc = color( 164, 190, 255);
    // lvlInt = 4;
  }
  if (points >7) {
    gameBgc = color(154, 129, 232);
    // lvlInt = 8;
  }

}

function level1MouseClicked() {
  // points++;
  // //points += 1;
  // //points = points + 1;
  // console.log('points = ' + points);
  // if (points >= 10){
  //   state = 'you win';
  // }


}

// function level2(){
//    background(107, 242, 217);
//    //image(eyeImg, w / 2, h / 1, 700, 700);
//    image(bhImg, w / 2, h / 1.19, holeSize, holeSize);
//    textSize(20);
//    text('still working on this part!',  w / 3, h / 30);
//    text('move(arrow)+click anywhere to end this',  w / 2, h / 15);
//    image(cursorImg, mouseX, mouseY, 80, 80);
//
//    if (mouseX > (width/2) && mouseX < (width/2)) {
//       if (mouseY > (height/1.19) && mouseY < (height/1.19)){
//         state = 'final';
//       }
//     }

function level2(){
   background(107, 242, 217);
   image(eyeImg, w / 2, h / 1.2, 700, 700);
   // image(holeImg, w / 2, h / 1.19, 200, 670);
   push();
   fill(0);
   rect(w/2, h/1, 100, 900);
   pop();
   image(wbImg, w/ 2, h / 1.1, 100, 100);
   textSize(22);
   textFont('Mansalva');
   textAlign(LEFT);
   text('Look! there is White rabbit!',  w / 22, h / 17);
   text('Should I follow him/her?',  w / 22, h / 10);
   text('press - Down arrow - ',  w / 22, h / 6);
   text('if you want to',  w / 22, h / 4.9);


   alice.display();
   alice.move();


}

function level2MouseClicked(){
  state = 'down';
//mapchanging
}

function youWin() {
  background(255, 126, 177);
  textSize(50);
  textFont('Satisfy');
  stroke(255);
  text('Hello, Alice-', w / 2, h / 2);
  textSize(30);
  text('where have you been?', w / 2, h * 3 / 5);
  textSize(20);
  text('click anywhere to resume', w / 2, h * 3 / 4);

}

function youWinMouseClicked() {
  state = 'level 2';
  //points = 1;
}

function gameOver() {

  background(107, 215, 255);
  textSize(50);
  textFont('Girassol');
  stroke(255);

  //check number of lives
  if (lives >= 0) {
    //if you have a life, you lose one.
    // text(lives + ' lives left', w / 2, h / 2);
    // text(lives + ' lives left', w / 2, h / 2);
    text(`Attempt left: ${lives}`, w / 2, h / 2);
    textSize(20);
    text('continue? click anywhere.', w / 2, h * 3 / 4);
  } else {
    //game over
    textSize(25);
    text('You are out of this rabbit hole!', w / 2, h / 2);
    textSize(20);
    text('click anywhere to find another rabbit hole', w / 2, h * 3 / 4);
  }

}
function down(){
  background(0);
  textAlign(LEFT);
  textSize(22);
  push();
  textFont('New Tegomin');
  //textFont(fontItalic);
  text(' “ She was falling', w / 20, h / 3);
  textSize(30);
  text('down', w / 2.9, h / 1.9);
  textSize(34);
  text('the rabbit hole."', w / 2.1, h / 1.4);
  // image(aliceImg, w/3, w/
  textSize(20);
  fill(198, 242, 102);
  textFont('Mansalva');
  text('-click to resume-', w/20, h/10);

  pop();
}
function downMouseClicked(){
state = 'level 3';
}


function level3(){
   background(107, 242, 217);
   textSize(30);
   textFont('Mansalva');
   text('Place Alice and click!', w / 20, h/10);
   image(buymeImg, w/6, h/2, 200, 200)
   image(gradImg, w/1.55, h/4, 210, 210)
   image(drinkImg, w/2, h/1.5, 210, 210)
   image(aliceImg, mouseX, mouseY, 100, 100);




}

function level3MouseClicked(){
state = 'final';
}

function final(){
  background(147, 103, 255);
  push();
  textAlign(LEFT);
  textSize(20);
  text('“This is impossible!”', w / 6, h / 5);
  textSize(25);
  text('“Only if you believe it is.”', w / 6, h / 4);
  text('click anywhere to wake up', w / 6, h / 1.09);
  pop();
}

function finalMouseClicked(){
  state = 'title';
}

function gameBg() {
  push()
  background(gameBgc);
  stroke(0);
  fill(255);
  textSize(25);
  textAlign(CENTER);
  text('Choose life obstacle that you prefer!', width*0.5, height*0.4);
  // imageMode(CENTER);
  pop()
}


function gameOverMouseClicked() {
  if (lives >= 0) { //this means they have 0 lives going into it.
    lives--;
    state = 'level 1';

  } else {
    state = 'title';
  }
  points = 1;

}
