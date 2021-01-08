var leftdust,middledust,rightdust
var paper
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	leftdust = new dustbin(750,615,20,100);
	middledust = new dustbin(810,655,100,20);
	rightdust = new dustbin(870,615,20,100);

	paper = new circle(20,650);
	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1200,height:700,wireFrames:false
		}
	}) 
	Engine.run(engine);
 Render.run(render) 
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  leftdust.display();
  middledust.display();
  rightdust.display();
  paper.display();



 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,{x:paper.position.x,y:paper.position.y},{x:85,y:-85});
	}

}

