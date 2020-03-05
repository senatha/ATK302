var myState = 0;
var timer = 0;
let fingers;
let x = 0;
var boldfont;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  background('green');
  // specify multiple formats for different browsers
  fingers = createVideo(['assets/jb.mp4']);
//  button = createButton('play');
//  button.mousePressed(toggleVid); // attach button listener
fingers.hide();
fingers.loop();
fingers.pause();
boldfont = loadFont("assets/boldfont.ttf");


}

function draw() {
  // put drawing code here


  switch (myState) {
    case 0:
      background('red');
      textSize(48);
      textFont(boldfont);
      text("WELCOME TO MY WORLD", x, 100);
      x++;
      if (x > width){
        x = -200;
      }
      timer = timer + 1;
      if (timer > 400) {
        x = 0;
        myState = 1;
        timer = 0;
      }

      break;

    case 1:
      background('green');
      textSize(24);
      text("My name is Shazea and theres something you should know about me", 100, 100, 600, 600);
      break;

    case 2:
      background('blue');
      text("I love elephants", 100, 100);
      break;

    case 3:
      background('blue');
      text("While the first human fossils are dated back to 2 to 6 million years ago", 100, 100, 600, 600);
      break;

    case 4:
      background('blue');
      text("The first elephant ancestors are dated back to 55 million years ago", 100, 100, 600, 600);
      break;

    case 5:
      fingers.loop();
      myState = 6;

      break;

  case 6:
  background('blue');
  image(fingers, 0, 0, width, height);
  fill('white');
  text("I love elephants", 100, 100);
  break;

case 7:
fingers.pause();
myState = 0;

  }
}

function mouseReleased() {
//fingers.loop();
  myState = myState + 1;
  if (myState > 7) {
    myState = 0
  }
}
