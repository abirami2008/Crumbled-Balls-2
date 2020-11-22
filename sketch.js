
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var dustbin1;
var green;

function preload()
{
	green = loadImage("dustbingreen.png");
}

function setup() {
  createCanvas(800, 700);
  rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  ball = new Ball(160,400,40);
  ground = new Ground(400,650,800,20);


  dustbin2 = createSprite(525,555,20,190);

  dustbin2 = createSprite(635,555,20,190);
  

  dustbin1 = createSprite(580,555,200,15);
  dustbin1.shapeColor = "red";
  dustbin1.addImage(green);
  dustbin1.scale = 0.6;


  
	Engine.run(engine);
  
}


function draw() {

  background(0);

  ball.display();
  dustbin1.display();
  ground.display();
  drawSprites();
}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(ball.body, ball.body.position, {x:60, y:-60})

}

}



