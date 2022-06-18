var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var invisibleGround;
var clouds, cloudsImage;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloudsImage = loadImage("cloud.png");
  groundImage = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);

  //create a trex sprite
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  //create a ground sprite
  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);
  ground.x = ground.width / 2;

  invisibleGround = createSprite(200, 195, 400, 20);
  invisibleGround.visible = false;
}

function draw() {
  background("white");

  //jump when the space button is pressed
  if (keyDown("space")) {
    trex.velocityY = -8;
  }
  trex.collide(invisibleGround);

  trex.velocityY = trex.velocityY + 0.5;
  ground.velocityX = -4;
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  console.log(trex.y);
  drawSprites();
  createClouds();
}
function createClouds() {
  if (frameCount % 50 === 0) {
    clouds = createSprite(500, 80, 100, 20);
    clouds.addImage("cloudy", cloudsImage);
    clouds.scale = 0.1;
    clouds.velocityX = -4;
    // console.log("display clouds", frameCount);
    clouds.y = Math.round(random(80, 150));
    trex.depth = clouds.depth;
    trex.depth += 1;

    console.log("clouds depth is ", clouds.depth);
    console.log("trex depth is ", trex.depth);
  }
}
