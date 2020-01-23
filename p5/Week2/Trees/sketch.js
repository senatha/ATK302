

function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}



function draw() {
  // put drawing code here
  background('cyan');
  noStroke();
  //
  // fill(204);
  // triangle(18, 18, 18, 360, 81, 360);
  //
  fill('green');
  rect(330, 350 , 450, 500);
  //
  // fill(204);
  // quad(189, 18, 216, 18, 216, 360, 144, 360);
  //
  fill('yellow');
  ellipse(613, 39 , 150, 150);
  //
  // fill(204);
  // triangle(288, 18, 351, 360, 288, 360);
  //
  // fill();
  // arc(479, 300, 280, 280, PI, TWO_PI);

fill(0) ;
textSize (40) ;
text(mouseX + "," + mouseY, 40, 40 ) ;



}
