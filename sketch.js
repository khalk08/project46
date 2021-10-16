var gameState = 0;
var backgroundImg, paperImg;
var backgroundImg1, backgroundImg2;
var boy, boyImg, ground, groundImg;
var demon1, demon1Img, demon2, demon2Img;
var obstaclesGroup;
var score=0;

function preload(){
   backgroundImg = loadImage("images/background.jpg");
   paperImg = loadImage("images/paper.png");
   backgroundImg1 = loadImage("images/background1.jpg");
   backgroundImg2 = loadImage("images/background2.jpg");
   boyImg = loadImage("images/homeboy.gif");
   groundImg = loadImage("images/ground2.png");

   demon1Img = loadImage("images/demon1.png");
   demon2Img = loadImage("images/demon2.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  boy = createSprite(100, windowHeight-150, 20,20);
  boy.addImage("boy", boyImg);
  boy.visible = false;

  ground = createSprite(600, windowHeight-75, windowWidth+400 ,20);
  ground.addImage("ground", groundImg);
  ground.visible = false;
  ground.velocityX = -3;

  demon2 = createSprite(windowWidth, windowHeight-165, 20,20);
  demon2.addImage("demon2", demon2Img);
  demon2.visible = false;
  demon2.velocityX = -4;
  demon2.scale = 0.3;

  demon1 = createSprite(windowWidth-240, windowHeight-160, 20,20);
  demon1.addImage("demon1", demon1Img);
  demon1.visible = false;
  demon1.velocityX = -4;
  demon1.scale = 2;

  score = 0;

  obstaclesGroup = new Group();
}

function draw(){
  if(gameState === 0){
    background(backgroundImg);

    image(paperImg, 300, 200, 850,300);
    textSize(25)
    fill("black")
    text(" hey! welcome to my game! \n if you want to know the story of my game, press the up arrow key, \n if you want to directly play the game, press the space key!",
    350, windowHeight/2);

    if(keyCode === 38){
      gameState = 1.1;
    }

    if(keyCode === 32){
      gameState = 1.2;
    }

  if(gameState === 1.1){
    background(backgroundImg1);
    textSize(25)
    fill("white")
    text(" Not long ago, demons had invaded my \n village, becasue of that, many people \n felt the urge to buy all the resources like \n food and water and lock themselves \n indoors, in the daytime there's always \n a huge crowd of people buying food \n which makes it hard for me to buy \n resources for my family. So I always \n go out at night to buy my family food, \n but at night is when the demons are \n out... \n Help me reach home safely with all the \n resources for my family! Press 'space'  \n to play the game!",
    470, 145);  

    if(keyCode === 32){
      gameState = 1.2;
    }
   }

  if(gameState === 1.2){
    background(backgroundImg1);
    boy.visible = true;
    ground.visible = true;
    demon2.visible = true;
    demon1.visible = true;

  if(ground.x < 200){
    ground.x = 500;
  }

  if(obstaclesGroup.isTouching(boy)){
    gameState = 2;
  }

  if(gameState === 2){
    background(backgroundImg2);
    textSize(30)
    fill("black")
    text("GAME OVER! \n", 200,150)

    textSize(30)
    fill("black")
    text("Well done for completing the game! You played well! \n         by Khaliya", 200,190);
  }
}
  
  spawnObstacles();

  drawSprites();
}

function spawnObstacles(){
  if(frameCount % 60 === 0) {
    var demon = createSprite(600,165,10,40);
    //obstacle.debug = true;
    demon.velocityX = -6(2 + 3*score/100);
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: demon.addImage(demon1);
              break;
      case 2: demon.addImage(demon2);
              break;
    default: break;
  }
  demon.scale = 0.5;
  demon.lifetime = 300;
  obstaclesGroup.add(demon);
 }
}
}
