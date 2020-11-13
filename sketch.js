
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground1,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10,ground11,ground12,ground13,ground14,ground15,ground16,ground17,ground18,ground19,ground20,ground21,ground22,ground23,ground24,ground25,ground26,ground27,ground28,ground29,ground30,ground31,ground32,ground33,ground34,ground35,ground36,ground37,ground38;

function preload(){
  forestImage=loadImage("forest background.jpg")
  groundImage=loadImage("GroundImage.png")
  kid_running=loadAnimation("kid1.png","kid2.png","kid3.png")
  pinImage=loadImage("pin.png")
}

function setup() {
  createCanvas(7400,600);

  engine = Engine.create();
  world = engine.world;
  
  ground1=new Ground(90,500,200,50);
  ground2=new Ground(320,420,200,50);
 //ground1.shapeColor="brown"
 //ground1.addImage(groundImage)
// ground1.scale=0.4
  

  //kid=createSprite(80,450,150,30)
// kid.addAnimation("running",kid_running)
// kid.scale=0.4

 //ground1.setCollider("rectangle",0,35)

 kid1=new Kid();
 
}

function draw() {
  background(forestImage);
  Engine.update(engine);
  //if(keyDown("space")){
//    kid.velocityY=-4;
 // }
 // if(keyDown("right_arrow")){
 //   kid.x=kid.x+10;
  //}
  //if(keyDown("left_arrow")){
 //   kid.x=kid.x-10;
 // }
 // kid.velocityY=kid.velocityY+0.5;
// createObstacles();
// kid.collide(ground1)
ground1.display();
ground2.display();
kid1.display()
}

//function createObstacles(){
//for(i=600;i<7000;i=i+600){
  //pin=createSprite(i,320,50,30)
  //pin.addImage(pinImage)
  //pin.scale=0.2
//}
//}