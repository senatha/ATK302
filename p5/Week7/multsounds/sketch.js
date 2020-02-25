var song1; song2, song3;
var myState = 0;

function preload() {
  // put setup code here
  song1 = loadSound('assets/thrill.mp3');
  song2 = loadSound('assets/donkey.mp3');
  song3 = loadSound('assets/skate.mp3');
}

song1.loop();
song1.stop();
song2.loop();
song2.stop();
song3.loop();
song3.stop();

function setup() {

  createCanvas(720,200);
  background(255,0,0);

}


function draw() {
  switch(myState){
    case 0:
    song1.play(); //starts state for sound
    myState = 1;
    break ;

    case 1: //hanging out and listening to music state

    break ;

    case 2:
    song2.play(); //starts state for sound
    myState = 3;
    break ;

    case 3:
    break ;

    case 4:
    song.3play();
    myState = 5 ;
    break ;

    case 5:
    break ;

  }
  // put drawing code here
}

function mouseReleased() {
  song1.pause() ;
  song2.pause();
  song3.pause();

  myState++ ;
  if (myState > 5 ){
  myState  = 0 ;
  }
}

function touchStarted (){
  getAudioContext().resume();
}
