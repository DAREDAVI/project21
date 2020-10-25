
var bullet,speed,weight
var thikness
var wall,thikness


function setup() {
  createCanvas(1600,400);

speed=random(223, 321);
weight=random(30,52)
thikness=random(22,83)

bullet=createSprite(50, 200, 50, 50);
bullet.velocityX = speed;

wall=createSprite(1000,200,60,thikness,height/2);
wall.shapeColor=(80,80,80);

}

function draw() {
  background(0);  


if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
  bullet.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(damage<3.68)
  {
    bullet.shapeColor=color(0,255,0);
  }

  

  
  if(damage>12.43)
  {
    bullet.shapeColor=color(255,0,0);


    function hasCollided(bullet,wall)

    bulletRightEdge=bullet.x+bullet.width;
    wallLEFTeDGE=WALL.x
    if(bulletRightEdge>=wallLeftEdge)

  {

  return true

  }
return false
  }
  }
  drawSprites();
}

