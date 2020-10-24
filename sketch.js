var ball,rope;
var engine, world;
var box1,box2,box3,box4;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);
	engine = Engine.create();
	world = engine.world;
	ball = new Ball(50,50,100);
	box1 = new Box(300,500,40,40);
	box2 = new Box(350,500,40,40);
	box3 = new Box(400,500,40,40);
	box4 = new Box(450,500,40,40);
	rope = new Rope(ball.body,{x: 200, y: 50})

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	background("white");
	rope.display();
	ball.display();
	box1.display();
	box2.display();
	box3.display();
	box4.display();
}

function mouseReleased(){
	rope.fly();
}
function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x: mouseX, y: mouseY});
}


