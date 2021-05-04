//PROJECT 43 - TREASURE HUNT - WHTJR - C43
//TREASURE HUNT - DEVELOPED AT : 4-5-2021 @ 13:00

var bg,bg2,form,system,code,security;
var treasure, treasureImage;

var score=0;

function preload() {
  bg= loadImage("aladdin_cave.jpg")
  bg2 = loadImage("treasure.jpg");
  
}

function setup() {
  createCanvas(1000,500);

  security = new Security();
  system = new System();
  
}

function draw() {
  background(bg);
  
  clues();
  security.display();

  textSize(20);
  fill("white");
  text("Score: " + score, 800, 50);

  if(score === 3) {
    clear()
    background(bg2)
    fill("white")
    textSize(40);
    textFont("Verdana")
    text("TREASURE UNLOCKED!",250, 200);
    textSize(18);
    fill(rgb(0, 0, 0))
    text("Congrats! Give me a Lamborghini later!", 260, 400);

    security.hide();

  }

  drawSprites()
}