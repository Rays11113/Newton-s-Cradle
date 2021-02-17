
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob (502,202, 20, 20);
	bobObject2 = new Bob (242,202, 20, 20);
	bobObject3 = new Bob (232,202, 20, 20);
	bobObject4 = new Bob (222, 202, 20, 20);
	bobObject5 = new Bob (212,202, 20, 20);
	roofObject = new Roof(502, 202, 400, 20);
	


	Engine.run(engine);
  
}


function draw() {
  background(0);
  
bobObject1.display ();
bobObject2.display ();
bobObject3.display ();
bobObject4.display ();
bobObject5.display ();
roofObject.display (); 

  drawSprites();
 
}



