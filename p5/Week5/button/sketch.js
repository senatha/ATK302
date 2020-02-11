

function setup() {
  // put setup code here
  createCanvas(800,800);
  background('green');

}

function draw() {
  // put drawing code here

  rect( 100, 100, 100, 100)

}



function mouseReleased () {

  //to make sure the mouse background change is within the button
  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {
    //cannot put semi colon, will read as error on if statement
    //CAPITALIZE all X,Y,Z
  background(random(255), random(255), random(255));

//Statemachines are machines with multiple states i.e washing machine, traffic light
  }

}
