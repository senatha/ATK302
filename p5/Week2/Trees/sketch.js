

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
  rect(0, 350 , width , 700);

  fill('brown');
  rect(500, 190 , 70, 193);

  fill(54,40,16);
  rect(565, 300 , 30, 193);
  //
  // fill(204);
  // quad(189, 18, 216, 18, 216, 360, 144, 360);
  //
  fill('yellow');
  ellipse(613, 39 , 150, 150);
  //
   fill('green');
   ellipse(530, 169, 200, 200);

   fill('white');
   ellipse(180, 40 , 150, 150);

   fill('white');
   ellipse(107, 53 , 150, 150);

   fill('white');
   ellipse(15, 30 , 100, 100);
  //


fill(0) ;
textSize (40) ;
text(mouseX + "," + mouseY, 40, 40 ) ;



}
