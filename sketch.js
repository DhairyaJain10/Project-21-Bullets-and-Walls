var wall,thickness;
var bullet,speed,weight;
var hasCollided;

function setup() {
  createCanvas(1200,1200);

  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
}

function draw() {
  background(255,255,255); 

thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);

if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  
  if(damage>10){
    wall.shapeColor=color(255,0,0)
  }
  if(damage<10){
wall.shapeColor=color(0,255,0)
  }
}

hasCollided();
  
  drawSprites();
}

function hasCollided(Lbullet,Lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wall.leftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}