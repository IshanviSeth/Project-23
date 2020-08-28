// Variable for helicopter,helicopter's image,package and package's image;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
//Variable for package's body and ground;
var packageBody,ground;
//Variable for three boxes;
var box1, box2, box3;

//Physics engine;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//Variable for the options 
var options; 
function preload(){
	//Loading the helicopter's image 
	helicopterIMG=loadImage("helicopter.png")
	//Loading the package's image;
	packageIMG=loadImage("package.png")
}

function setup() {
	//Creating the canvas 
	createCanvas(800, 700);
	//Rect mode to display the ground in the center of the canvas 
	rectMode(CENTER);
	
	//Creating the sprite of the package 
	packageSprite=createSprite(width/2, 80, 10,10);
	//Adding the image of the package 
	packageSprite.addImage(packageIMG);
	//Scaling the package's sprite 
	packageSprite.scale=0.2
	
	//Creating the sprite of the helicopter 
	helicopterSprite=createSprite(width/2, 200, 10,10);
	//Adding the image of thw helicopter 
	helicopterSprite.addImage(helicopterIMG);
	//Scaling the helicopter's sprite 
	helicopterSprite.scale=0.6

	//Creating the sprite of the ground  
	groundSprite=createSprite(width/2, height-35, width,10);
	//Giving a color to the ground 
	groundSprite.shapeColor=color(255);

	//Creating the engine 
	engine = Engine.create();
	//Adding the world in the world class
	world = engine.world;

	//Giving a shape to the package as circle, restituting it and adding a statuc property to it
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	//Adding the small world and the package body in the big world 
	World.add(world, packageBody);
	

	//Giving a shape to the ground as rectange and the static property 
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//Adding the small world and the ground in the big world
	 World.add(world, ground);
	 //Running the engine 
	//Engine.run(engine);
  
	box1 = new Box(400,650,120,10)
	box2 = new Box(335, 605, 10,100 )
	box3 = new Box(467,605,10,100)
	
}


function draw() {
  //Centering the rect 
  rectMode(CENTER);
  //Setting the background color 
  background(0);
  //Updating the engine 
  Engine.update(engine);
 
  
  box1.display();
  box2.display()
  box3.display()
  //Setting the package's position x equal to the position x 
  packageSprite.x= packageBody.position.x; 
  //Setting the package's position y equal to the position y
  packageSprite.y= packageBody.position.y; 
  //Drawing the sprites 
  drawSprites(); 
}

function keyPressed() {
//Dropping the package when down key is pressed 	
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false)
	 
	 
 }
}



