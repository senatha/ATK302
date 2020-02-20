var myState = 0 ;
var timer = 0;

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
  text("WELCOME TO MY WORLD", 100, 100) ;
  timer = timer + 1;
  if (timer > 200) {
    myState = 1 ;
    timer = 0 ;
  }

  break ;

  case 1:
  background('green');
  text("My name is Shazea and theres something you should know about me", 100, 100);
  break ;

  case 2:
  background('blue');
  text("I love elephants", 100, 100);
  break ;

  case 3:
  background('blue');
  text("I love elephants", 100, 100);
  break ;

  case 4:
  background('blue');
  text("I love elephants", 100, 100);
  break ;

  case 5:
  background('blue');
  text("I love elephants", 100, 100);
  break ;


}
}
function mouseReleased(){
  myState = myState + 1;
  if (myState > 4){
    myState = 0
  }
}
