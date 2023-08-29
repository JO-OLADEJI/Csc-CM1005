/*

Officer: 5148740
CaseNum: 702-0-22050455-5148740

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of investigatorCarObject to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function move_car() {
  // - increment investigatorCarObject's distanceAmt property by its gasAmount property
  investigatorCarObject.distanceAmt += investigatorCarObject.gasAmount;

  // - add a random amount between -0.04 and 0.04 to investigatorCarObject's vibrateAmt property
  investigatorCarObject.vibrateAmt += random(-0.04, 0.04);

  // - use the constrain function to constrain investigatorCarObject's vibrateAmt property to values between 0.04 and 0.99
  investigatorCarObject.vibrateAmt = constrain(
    investigatorCarObject.vibrateAmt,
    0.04,
    0.99
  );

  // - call the cycle_motor function passing investigatorCarObject as an argument
  cycle_motor(investigatorCarObject);
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var investigatorCarObject;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};

function preload() {
  carImages.detective = loadImage("cars/detective.png");
}

function setup() {
  createCanvas(800, 800);

  investigatorCarObject = {
    x: roadLeftEdge + roadWidth / 4,
    y: 300,
    distanceAmt: 0,
    gasAmount: 3,
    vibrateAmt: 0,
    vehicleCategory: "detective",
    licencePlate: "5L3UTH",
    exhaust: [],
  };
}

function draw() {
  background(0);

  move_car();

  drawRoad();
  drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad() {
  stroke(100);
  fill(50);
  rect(roadLeftEdge, 0, roadWidth, 800);
  stroke(255);

  for (var i = -1; i < 20; i++) {
    line(
      roadLeftEdge + roadWidth / 2,
      i * 100 + (investigatorCarObject.distanceAmt % 100),
      roadLeftEdge + roadWidth / 2,
      i * 100 + 70 + (investigatorCarObject.distanceAmt % 100)
    );
  }
}

function drawCars() {
  //draw the detective car

  image;
  drawExhaust(investigatorCarObject);
  image(
    carImages["detective"],
    investigatorCarObject.x -
      carImages["detective"].width / 2 +
      random(
        -investigatorCarObject.vibrateAmt,
        investigatorCarObject.vibrateAmt
      ),
    investigatorCarObject.y +
      random(
        -investigatorCarObject.vibrateAmt,
        investigatorCarObject.vibrateAmt
      )
  );
}

function cycle_motor(car) {
  car.exhaust.push({
    size: 2,
    x: car.x,
    y: car.y + carImages[car.vehicleCategory].height,
  });

  for (var i = car.exhaust.length - 1; i >= 0; i--) {
    car.exhaust[i].y += max(0.75, car.gasAmount / 3);
    car.exhaust[i].x += random(-1, 1);
    car.exhaust[i].size += 0.5;

    if (car.exhaust[i].y > height) {
      car.exhaust.splice(i, 1);
    }
  }
}

function drawExhaust(car) {
  noStroke();
  for (var i = 0; i < car.exhaust.length; i++) {
    var alpha = map(car.exhaust[i].size, 0, 40, 50, 0);
    fill(125, alpha);
    ellipse(car.exhaust[i].x + 20, car.exhaust[i].y, car.exhaust[i].size);
  }
}
