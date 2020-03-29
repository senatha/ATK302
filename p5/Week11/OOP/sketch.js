var myCar;
var myCar2;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  myCar = new Car();
  myCar2 = new Car();

}


function draw() {

  background('lightblue');

  myCar.display();
  myCar.drive();

  myCar2.display();
  myCar2.drive();

}

//car class
function Car() {
  //attributes
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(random(-5, 5), random(-5,5)) ;
  this.r = random(255) ;
  this.g = random(255) ;
  this.b = random(255) ;

  //methods

  this.display = function() {
    fill(this.r, this.g, this.b) ;
    rect(this.pos.x, this.pos.y, 100, 100);

  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0 ;
    if (this.pos.x < 0) this.pos.x = width ;
    if (this.pos.y > height) this.pos.y = 0 ;
    if (this.pos.y < 0) this.pos.y = height ;

    }
    //code phrase - city you were born
    //favorite movie character of all time
    //favorite hobby
  }
}
