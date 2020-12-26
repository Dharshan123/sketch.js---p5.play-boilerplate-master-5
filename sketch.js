wall, thickness
var bullet,speed, thickness 

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
 bullet = createSprite(50, 200, 10, 20);
  bullet = createSprite(50, 250, 10, 20);
   bullet = createSprite(50, 300, 10, 20);
   wall = createSprite(1200, 200, thickness, height/2);
  wall = createSprite(1200, 200, thickness, height/2);

bullet.shapeColor = "white"
}

function draw() {
  background(80, 80, 80);  
  thickness = random(22, 83)
  speed = random(223, 321)
  weight = random(30, 52)

  if(wallThickness < 10) {
    wall.shapecolor = "green"
  }
  if(wallThckness > 10) {
  wall.shapeColor = "red"
  }
  drawSprites();
}