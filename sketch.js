const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;


function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

fill("green");
  stick1=new Stick(455,360,240,100);
  stick2=new Stick(765,360,240,100);
  stick3=new Stick(614,260,550,100);
  ground=new Stick(600,390,1200,20);

}

function draw() {
  background(255,255,255); 
  background("black"); 
  Engine.update(engine);
  console.log(mouseX+"   "+mouseY);

fill("blue");
  triangle(425,140,350,260,500,260);
  fill("blue");
  triangle(763,145,711,212,798,212);

  stick1.display();
  stick2.display();
  stick3.display();
  ground.display();
  
  drawSprites();
}