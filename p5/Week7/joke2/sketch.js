  var myState = 0 ;
  var timer = 0 ;
  function setup() {
    // put setup code here
    createCanvas(800,800);


  }

  function draw() {



  switch(myState) {
    case 0:
    background('black');
    text("Why did the sun skip college?", 100, 100) ;
    timer ++ ;
    if (timer > 200) {
      myState = 1 ;
      timer = 0 ;
    }
   break ;

    case 1:
    background('black');
    text("It already has a million degrees.", 100,100) ;
    timer ++ ;
    if (timer > 200){
      myState = 0;
      timer = 0;
    }

    break ;


  }

  function mouseReleased(){
    myState = myState + 1;
    if (myState > 1){
      myState = 0
