var hr;
var min;
var sc;
var secondsAngle;
var hoursAngle;
var minutesAngle;


function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);

}

function draw() {
  background("black"); 
  translate(380,370); 
  rotate(-90);
  hr = hour();
  min = minute();
  sc = second();

  secondsAngle = map(sc, 0, 60, 0,360);
  hoursAngle = map(hr % 12, 0, 12, 0, 360);
  minutesAngle = map(min, 0, 60, 0, 360);

  push();
  rotate(minutesAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(hoursAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,80,0);
  pop();

  push();
  rotate(secondsAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,120,0);
  pop();

  strokeWeight(7)
  noFill();
  stroke("red");
  arc(0,0,280,280,0,hoursAngle);
  stroke("blue");
  arc(0,0,300,300,0,minutesAngle);
  stroke("yellow");
  arc(0,0,320,320,0,secondsAngle);

  

  //drawSprites();
}