var myState = 0 ;

function setup() {
  // put setup code here
  createCanvas(800,800);
  background('black');

}

function draw() {



switch(myState) {
  case 0:
  background('black');
  text("Why did the sun skip college?") ;
  break ;

  case 1:
  background('black');
  text("It already has a million degrees.");
  break ;


}

function mouseReleased(){
  myState = myState + 1;
  if (myState > 1){
    myState = 0
  }



function mouseReleased(){
  myState = myState + 1;
  if (myState > 1){
    myState = 0
  }
