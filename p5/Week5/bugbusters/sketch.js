var state = 0;
//initialize it and declare, semicolon


function setup() {
  // all lowercase in fucntion
  createCanvas(800, 800);
  //COMMA, not semicolon
}
//only one closed
function draw() {
  //all LOWERCASE


  switch (state) {
    //"state is a variable, must be declared"
    case 0:
      //colon not semicolon
      background(255, 0, 0);
      //no quotes around colors
      //LOWERCASE
      fill('white')

      textSize(100);
      text("case 0", width / 2, 100);
      break;

    case 1:
      background(0, 255, 0);
      fill('black')
      textSize(100);
      text("case 1", 100, 100);
      break;

    case 2:
    //No repeats on cases "2"
      background(0, 0, 255);
      fill('gold')
      textSize(100);
      text("case 2", 100, 100);
      break;

  }
}

  function mouseReleased() {
    //LOWERCASE "m"


    state++;
    //NO "my", add ++, LOWERCASE

    if (state > 2) {
      state = 0;
      //no semicolon, NO my, LOWERCASE
    }

  }
