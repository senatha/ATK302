var myState = 0 ;

function setup() {
  // put setup code here
  createCanvas(800,800);


}

function draw() {


switch(myState) {
  case 0:
  background('blue')
  text("Why did the sun skip college?" 100, 100) ;
  break ;

  case 1:
  background('pink');
  fill('black')
  text("It already has a million degrees." 100, 100 ) ;
  break ;
}
}



function mouseReleased(){
  myState = myState + 1;
  if (myState > 1){
    myState = 0
  }
}
