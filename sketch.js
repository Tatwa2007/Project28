
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world; 
var tree1, treeImage;
var boy, boyImg;


function preload(){
	treeImage = loadImage("sprites/tree.png");
	boyImg = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	tree1 = createSprite(width-width/5, height/2)
	tree1.addImage ("tree", treeImage);
	tree1.scale = 0.5;

    boy = createSprite (width/2-150, height-70);
	boy.addImage ("boy", boyImg);
	boy.scale = 0.1;
	
	mango1 = new Mango(tree1.x+20, 0.6*height/2,height/15);
	mango2 = new Mango(tree1.x+60, 0.3*height/2,height/15);
	mango3 = new Mango(tree1.x-80, 0.5*height/2,height/15);
	stone1 = new Stone(boy.x, boy.y);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  stone1.display();
  
 
}

function keyPressed(){
    if(keyCode===32 && stone.body.speed<1){
    stone.trajectory = [];
    Matter.Body.setPosition(stone.body, {x:200, y:50})
    stone.body.speed = 0;
    }
}



