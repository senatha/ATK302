var myState = 0 ;
var timer = 0 ;


function setup() {
  createCanvas(800, 800) ;

  rectMode('center') ;
  ellipse('center') ;

}

function draw() {
  fill('black')
  rect(width/2, height/2, 200, 500) ;

timer = 1+timer ;
if (timer = 60)

myState = myState + 1 ;
timer = 0 ;


if(myState = 3)

myState = 0 ;

}

switch (myState) {

  case 0:
  fill(97, 255, 69, 100)
  ellipse(width/2, height/2, 150, 150);
  console.log("green light");
  break;

  case 1:
  fill(255,234,67,100)
  ellipse(width/2, height/2 - 160, 150, 150);
  console.log('yellow light');

  case 2:
  fill(255,34,26,100)
  ellipse(width/2, height/2 + 160, 150, 150);
  console.log('red light');

 break;

}
