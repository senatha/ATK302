var myState = 0 ;

function setup() {
  // put setup code here
  createCanvas(800,800);
  background('green');

}

function draw() {
  // put drawing code here


switch(myState) {
  case 0:
  background('red');
  text('WELCOME TO MY WORLD') ;
  break ;

  case 1:
  background('green');
  text('My name is Shazea and theres something you should know about me')
  break ;

  case 2:
  background('blue');
  text('I love elephants')
  break ;

}
}
function mouseReleased(){
  myState = myState + 1;
  if (myState > 4){
    myState = 0
  }
}
