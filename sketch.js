const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9;
var block10,block11,block12;
var block13,block14;
var player;
var ground1;

var block14,block15,block16,block17,block18;
var block19,block20,block21;
var block22;
var ground2;

var rope;
var player;

var ball;
var img;

function preload(){
  img = loadImage("hexagon (1).png");

}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;

// Bottom layer :-
  block1 = new Block(600,260,30,40);
  block2 = new Block(570,260,30,40);
  block3 = new Block(540,260,30,40);
  block4 = new Block(630,260,30,40);
  block5 = new Block(660,260,30,40);


  // forth layer :-
  block6 = new Block(585,220,30,40);
  block7 = new Block(555,220,30,40);
  block8 = new Block(615,220,30,40);
  block9 = new Block(645,220,30,40);


  // third layer :-
  bolck10 = new Block(600,170,30,40);
  block11 = new Block(570,180,30,40);
  block12 = new Block(630,180,30,40);

  // Second layer :-
  block13 = new Block(600,140,30,40);

// ground for the above pyrimid/pyrimid1 :-
  ground1 = new Ground(600,285,200,10);
  ground2 = new Ground(900,195,200,10);

  // Second Pyrimid :-
  block14 = new Block(900,170,30,40);
  block15 = new Block(930,170,30,40);
  block16 = new Block(870,170,30,40);
  block17 = new Block(840,170,30,40);
  block18 = new Block(960,170,30,40);

  block19 = new Block(900,140,30,40);
  block20 = new Block(930,140,30,40);
  block21 = new Block(870,140,30,40);

  block22 = new Block(900,110,30,40);

  //player = new Player(50,200,30,30);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  rope = new Chain(this.ball,{x:100, y:200});

}

function draw() {
  background("black");
  Engine.update(engine);

   fill(rgb(135, 205, 236));
   console.log("start");
  block1.display();
 // console.log(block1);
  block2.display();
  //console.log("2");
  block3.display();
  block4.display();
  block5.display();

  fill("lightPink");
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  fill("lightGreen");
  bolck10.display();
  block11.display();
  block12.display();

  fill(rgb(47, 48, 48));
  block13.display();

  fill(rgb(135, 205, 236));
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill("lightGreen");
  block19.display();
  block20.display();
  block21.display();

  fill("lightPink");
  block22.display();

  fill("#642C2C");
  ground1.display();
  ground2.display();
  
   // drawSprites();

   // player.display();
   imageMode(CENTER);
   image(img,ball.position.x,ball.position.y,40,40);
  //fill("lightBlue");
  rope.display();
  

}


function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}
