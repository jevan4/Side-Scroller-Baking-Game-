let hero;
let force;
let gravity;
let mySound;
let sNum = 0;
let enemys=[];
let img;
let winningScore=1500;

function setup() {
  createCanvas(400, 400);
   img = loadImage("baker.jpg");
  let img2 = loadImage("cupcakesidescroller-1.png")
  let img3 = loadImage("cookie.png")
  let img4 = loadImage("brownie.png")

  hero = new Mover(img);
  force = createVector(-0.01, 0);
  gravity = createVector(0, 0.01);
  
  //I created sepparate for loops, to change the amount of images there are per "baddie," making certain ones more rare, so then when I assign them point values, the more uncommon ones are worth more. 
  for(let i=0;i<50; i++){
    enemys.push(new Baddies(img2,5));
  }
   for(let i=0;i<30; i++){
    enemys.push(new Baddies(img3,25));
  }
   for(let i=0;i<15; i++){
    enemys.push(new Baddies(img4,100));
  }
}
//this function was created so that you don't have to press the play button in p5, to get it to work, and that it will restart itself when you play the game again. 
function resetGame(){
  //reset the game state
  hero.pos=createVector(30,300);
  hero.score=0;
 
  for(let i=0; i<enemys.length; i++){
    enemys[i].pos = createVector(random(1000), random(400));
  }
  
}

function keyPressed() {
  if (key == " ") {
    let jump = createVector(0, -1);
    hero.applyForce(jump);
  }
}

function mousePressed() {
  sNum++;
  
}

function draw() {
  if (sNum%3 === 0) {
    open();
    resetGame();
  } else if (sNum%3 === 1) {
      //This code checks the hero's score and if above a certain value, it will show the win screen, else it will call game, and continue. 
      if(hero.score >= winningScore)
      {
        background (247, 82, 153); 
       textSize(25);
       text("You Win!", 75, 150);
          text("Click the screen to play again", 15, 180);
      } 
    else {
          game();
    }

  } else if (sNum%3 === 2) {
    close();
  }
}
//setup for the mainscreen 
function open() {
  background(20,20,200);
  textFont('Georgia');
   textSize(25);
  text("Welcome to the Game!", 75, 150);
  textSize(15);
    text("Click anywhere to start", 75, 170);
  textSize(20);
 text("Cupcakes are 5 points, Cookies are", 20, 200);
   text("25, and Brownies are worth 100 points", 20, 230);

      //mySound.play();

}
//setup for the transition slide 
function close() {
  background(200, 20, 10);
  text("Thanks for playing!", 100, 100);
}

function game() {
  background(255,255,245);

  hero.applyForce(gravity);
  translate(-hero.pos.x + 100, 0);
  // if (mouseIsPressed) {
  //    hero.applyForce(force);
  //  }
  hero.update();
  hero.show();
  hero.edges();
  
  for(let i=0; i<enemys.length; i++){
    enemys[i].show();
    enemys[i].update() ;
    hero.hit(enemys[i]);
  }

}  
