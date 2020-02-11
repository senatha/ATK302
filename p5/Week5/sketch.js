var

function setup() {
  // put setup code here
  createCanvas(800,800);
  background('green');

}

function draw() {
  // put drawing code here

  rect( 100, 100, 100, 100)
;
}

switch(myState) {
  case 0:
  background('red');
  Text('')
  break ;

  case 1:
  background('green');
  Text('')
  break ;

  case 2:
  background('blue');
  Text('')
  break ;

}
}
function mouseReleased(){
  myState = myState + 1;
  if (myState > 4){
    myState = 0
  }
}

function mouseReleased () {
  background(random(255));
  //to make sure the mouse background change is within the button
  if ((mouseX > 100) && (mouseX < 200) && (mouseY > 100) && (mouseY < 200)) {
    //cannot put semi colon, will read as error on if statement
    //CAPITALIZE all X,Y,Z


//Statemachines are machines with multiple states i.e washing machine, traffic light
  }

}
