const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies
var myEngine,myWorld;
var ground;
var ball;
function setup() {
  createCanvas(800,400);
myEngine = Engine.create();
myWorld =myEngine.world
var options = {
  isStatic:true
}
ground = Bodies.rectangle(400,380,800,10,options);
World.add(myWorld,ground)
console.log(ground)
var op ={
  restitution:0.7
}
ball=Bodies.circle(200,200,20,op);
World.add(myWorld,ball);
}

function draw() {
  background(0); 
  Engine.update(myEngine);
 rectMode(CENTER) 
 rect(ground.position.x,ground.position.y,800,10);
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,20,20);
}