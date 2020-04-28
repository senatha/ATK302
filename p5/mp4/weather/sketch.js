
var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var ws = 0;
var temperature = 0;

function setup() {
  createCanvas(400, 400);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61701,us&units=imperial&';
  var myIDString = 'appid=be1fdf6d9c503d2a7a1de8d2b6446db0';
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.



}


function gotData(data) {
  weather = data;
  console.log(data);
  ws = weather.wind.speed ;
  temperature = weather.main.temp;

   // for debugging purposes, print out the JSON data when we get it.

}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
          myState = 1;
      }
      break;

    case 1:
    background(200) ;
    fill('black');
    text("we have weather", 20, 20) ;
    text("the temperature is" + weather.main.temp, 20, 40);
    text("the humidity is" + weather.main.humidity, 20, 60);
    text("the windspeed is" + weather.wind.speed, 20, 80);

    fill('white');
    noStroke();
    x = x + ws/3 ;
    if (x > width) x = 0 ;
    ellipse(x, 250, 200, 100);

    fill('red');
    var tmp = 0 ;
    tmp = map(temperature, -10, 200, 2, height-10);
    rect(width-40, height-10, 30, -tmp );

      break;




  }
}
