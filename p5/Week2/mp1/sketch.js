function setup() {
  // put setup code here
  createCanvas(800, 800);
  ellipseMode(CENTER);


}

function draw() {
  // put drawing code here

  background('pink');






  if (mouseIsPressed) {

//string

    line(85, 287, 85, 75);


//horns
    triangle(82,54, 498, 85, 280,40);
    triangle(82,54, 498, 85, 280, 1
      0);



//face
    fill(178, 34, 34);
    strokeWeight(8);
    ellipse(300, 250, 400, 400);


//nosefill('black')
noFill(0);
stroke(0);
strokeWeight(9);
arc(425, 165, 150, 100, 500, 376 );

noFill(0);
stroke(0);
strokeWeight(9);
arc(268, 292, 150, 100, 100, 76 );





//eyetwitch
        noFill(0);
        stroke(0);
        strokeWeight(4);



//eyeballs//
            fill('white');
            stroke(0);
            strokeWeight(5);
            arc(244, 214, 100, 100, 5, 5);

            fill('white');
            stroke(0);
            strokeWeight(5);
            arc(377, 205, 80, 80, 5, 5 );


  //eyes//
            fill(0);
            noStroke(0);
            ellipse(243, 208, 68, 68);

            fill(0);
            noStroke(0);
            ellipse(376, 211, 30, 30);

//mouth
            noFill(0);
            stroke(0);
            strokeWeight(9);

          }



  else {



    fill(210, 105, 3)
    ellipse(300, 250, 400, 400);
    stroke(0);

//hair
    fill(0);
    noStroke(0);
    ellipse(154, 92, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(55, 216, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(96, 149, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(231, 47, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(304, 37, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(392, 51, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(444, 94, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(484, 151, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(497, 222, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(81, 284, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(26, 139, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(141, 221, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(77, 60, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(133, 14, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(141, 151, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(187, 4, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(354, 6, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(260, 1, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(435, 8, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(494, 52, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(81, 284, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(544, 100, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(533, 169, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(557, 228, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(81, 284, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(583, 146, 100, 100);
    fill(0);
    noStroke(0);
    ellipse(531, 281, 100, 100);



//eyeballs//
    fill('white');
    stroke(0);
    strokeWeight(5);
       arc(250, 205, 80, 80, 5, 5 );

       fill('white');
       stroke(0);
       strokeWeight(5);
          arc(375, 205, 80, 80, 5, 5 );

//eyebrows//

          noFill(0);
          stroke(0);
          strokeWeight(9);
          arc(425, 165, 150, 100, 500, 376 );

          noFill(0);
          stroke(0);
          strokeWeight(9);
          arc(252, 186, 150, 100, 500, 376 );

//eyes//

      fill(0);
      noStroke(0);
      ellipse(254, 217, 40, 40);

      fill(0);
      noStroke(0);
      ellipse(376, 211, 40, 40);




//nose
      noFill(0);
      stroke(0);
      strokeWeight(9);
      arc(425, 165, 150, 100, 500, 376 );

      noFill(0);
      stroke(0);
      strokeWeight(9);
      arc(268, 292, 150, 100, 100, 76 );}



     fill(0);
     arc(279, 374, 104, 95, 0, PI + QUARTER_PI, CHORD)
}


  function mousePressed () {
    console.log(mouseX+","+mouseY);
  }
