var movingRect;
var standingRect;


function setup() {
  createCanvas(800,400);
  standingRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);

  standingRect.shapeColor = ("green");
  movingRect.shapeColor = ("green");

}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

 
  if(movingRect.x - standingRect.x < standingRect.width/2 + movingRect.width/2
    && standingRect.x - movingRect.x < standingRect.width/2 + movingRect.width/2
    &&movingRect.y - standingRect.y < standingRect.height/2 + movingRect.height/2
    && standingRect.y - movingRect.y < standingRect.height/2 + movingRect.height/2 ) {
    movingRect.shapeColor = "red";
    standingRect.shapeColor = "red";
  }

  else {
    standingRect.shapeColor = ("green");
    movingRect.shapeColor = ("green");
  }

  drawSprites();
}