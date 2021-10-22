const Engine  = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var sister, sisterHealth, brother, brotherHealth;
var snowball,snowballImage;
var sisterHealthImage1, sisterHealthImage2, 
    sisterHealthImage3, sisterHealthImage4, sisterHealthImage5;
var brotherHealthImage1, brotherHealthImage2, 
    brotherHealthImage3, brotherHealthImage4, brotherHealthImage5;


var bg = "snow1.jpg";

function prelod(){
  snowballImage = loadImage("snowball.png");

  //sister's health bar images ranging from the highest health to the lowest repectively
  sisterHealthImage1 = loadImage("Heath bar .png");
  sisterHealthImage2 = loadImage("Heath bar2.png");
  sisterHealthImage3 = loadImage("Heath bar3.png");
  sisterHealthImage4 = loadImage("Heath bar4.png");
  sisterHealthImage5 = loadImage("Heath bar5.png");

  //brother's health bar images ranging from the highest health to the lowest repectively
  brotherHealthImage1 = loadImage("Heath bar .png");
  brotherHealthImage2 = loadImage("Heath bar .png");
  brotherHealthImage3 = loadImage("Heath bar .png");
  brotherHealthImage4 = loadImage("Heath bar .png");
  brotherHealthImage5 = loadImage("Heath bar .png");

}

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  //sister and brother bodies
  sister = new Sister(100,250,10,10);
  brother = new Brother(300,250,11,16);

  //health bars for sister and brother
  sisterHealth = createSprite(50,100,10,10);
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  sister.display();
  brother.display();

  
  if(keyCode === 37){
    snowball = createSprite(brother.x-10, brother.y, 8,8);
    snowball.setVelocity(-8,0);
    snowball.addImage("snowbrother", snowballImage);
  }

  if(keyCode === 39){
    snowball = createSprite(sister.x+10, sister.y, 8,8);
    snowball.setVelocity(6,0);
    snowball.addImage("snowsister", snowballImage);
  }

  if(snowball.isTouched(sister)){
    

  }

  drawSprites();
}