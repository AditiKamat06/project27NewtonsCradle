const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
}

function setup() {
	createCanvas(1600,700);
	engine = Engine.create();
	world = engine.world;

    bob1 = new Bob (720,600,40);
    bob1.shapeColor=0;
	bob2 = new Bob (760,600,40);
	bob3 = new Bob (820,600,40);
	bob4 = new Bob (860,600,40);
	bob5 = new Bob (920,600,40);

	roof = new Roof (800,175,900,20);

    rope1 = new Rope (-80,0,bob1.body,roof.body);
	rope2 = new Rope (-40,0,bob2.body,roof.body);
	rope3 = new Rope (0,0,bob3.body,roof.body);
	rope4 = new Rope (40,0,bob4.body,roof.body);
	rope5 = new Rope (80,0,bob5.body,roof.body);

    Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();   
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-95});
}		
}