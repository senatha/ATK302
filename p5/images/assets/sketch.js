var elephant;
var elephantdead;
var tusks;

function setup() {
  // put setup code here
createCanvas (800,800)
elephant = loadImage("assets/elephant.jpg")
elephantdead = loadImage("assets/elephantdead.jpg")
tusks = loadImage("assets/tusks.jpe")
}

function draw() {
  // put drawing code here
  image(elephant,width/2,0,200,200);
  image(elephantdead,width/2,200,200,200);
  image(tusk,width/2,400,200,200);
}
