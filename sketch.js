
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var leftdustbin,centerdustbin,rightdustbin,imgbin;



function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(100,300,10);
    ground = new Ground(400,500,2000,10);
    centerdustbin = new Dustbin(600,490,200,15);
     leftdustbin = new Dustbin(500,452,15,90);
   rightdustbin = new Dustbin(700,452,15,90);
    imgbin = new Dustbin(800,800,10,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
Engine.update(engine);
  paper.display();
  ground.display();
  centerdustbin.display();
  leftdustbin.display();
  rightdustbin.display();
  imgbin.display();
  drawSprites();
 
}
function keyPressed(){
  if (keyCode === UP_ARROW ){
    Matter.Body.applyForce(paper.body, paper.body.position, {x:13,y:-13});
    
  }
}
