/*

Officer: 5148740
CaseNum: 702-2-64154991-5148740

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a green car with a Number_Plate of 887NB0. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of Chase_CarObject and the cars in
trafficObjectsArray to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function DriveCar() {
  /*
	This function should do the following: 
	 - increment Chase_CarObject's Dist_Amount property by its Speed_Amt property 
	 - add a random amount between -0.03 and 0.03 to Chase_CarObject's Shudder_Val property
	 - use the constrain function to constrain Chase_CarObject's Shudder_Val property to values between 0.04 and 1.13
	 - call the DriveCarEngine function passing Chase_CarObject as an argument
	*/

  Chase_CarObject.Dist_Amount += Chase_CarObject.Speed_Amt;
  Chase_CarObject.Shudder_Val += random(-0.03, 0.03);
  Chase_CarObject.Shudder_Val = constrain(
    Chase_CarObject.Shudder_Val,
    0.04,
    1.13
  );
  DriveCarEngine(Chase_CarObject);
}

function MoveLanes(car_obj) {
  /*
	This function should do the following: 
	 - move car_obj from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use laneCoordinateA and laneCoordinateB to effect the change.
	 hint: You will need to modify the Position_X property of car_obj.
	*/
  if (car_obj.Position_X == laneCoordinateA) {
    car_obj.Position_X = laneCoordinateB;
  } else {
    car_obj.Position_X = laneCoordinateA;
  }
}

function CheckInfront(vehicle) {
  /*
	This function should do the following: 
	 - determine if vehicle is in the same lane and less than 200px behind any of the cars in trafficObjectsArray.
	 - do this by traversing trafficObjectsArray and comparing each car's Dist_Amount property to that of vehicle.
	 - use the Number_Plate property of each car to ignore cars that match vehicle.
	 - if you find a car that matches these requirements then return the index representing the car's position in trafficObjectsArray. Otherwise return false.
	*/

  for (let i = 0; i < trafficObjectsArray.length; i++) {
    if (trafficObjectsArray[i].Number_Plate == vehicle.Number_Plate) {
      continue;
    }

    if (
      vehicle.Position_X == trafficObjectsArray[i].Position_X &&
      trafficObjectsArray[i].Dist_Amount - vehicle.Dist_Amount > 0 &&
      trafficObjectsArray[i].Dist_Amount - vehicle.Dist_Amount < 200
    ) {
      return i;
    }
  }

  return false;
}

function CheckIsAtSide(targetCar) {
  /*
	This function should do the following: 
	 - determine if targetCar is parallel with Chase_CarObject.
	 - if targetCar is found to be parallel to Chase_CarObject then return the Number_Plate property of targetCar.
	 - cars are considered parallel if the absolute difference between their Dist_Amount properties is less than 25 px and they have non-matching Position_X properties	*/

  if (
    abs(targetCar.Dist_Amount - Chase_CarObject.Dist_Amount) < 25 &&
    targetCar.Position_X != Chase_CarObject.Position_X
  ) {
    return targetCar.Number_Plate;
  }
}

function CheckSuspect() {
  /*
	This function should do the following: 
	 - Check cars passing parallel to Chase_CarObject to see if they match the Number_Plate property in the suspect description.
	 - it does this by traversing trafficObjectsArray and calling CheckIsAtSide for each car
.	 - if a positive result is returned then the Number_Plate property of the found car is then checked against the suspect description.
	 - if a match is found then the object of the car in question is returned.
	 - otherwise return false.
	*/

  for (let i = 0; i < trafficObjectsArray.length; i++) {
    if (
      CheckIsAtSide(trafficObjectsArray[i]) != undefined &&
      CheckIsAtSide(trafficObjectsArray[i]) == "887NB0"
    ) {
      return trafficObjectsArray[i];
    }
  }

  return false;
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var Chase_CarObject;

var roadWidth;
var roadLeftEdge;
var laneCoordinateA;
var laneCoordinateB;
var carImages = {};
var suspect;

var trafficObjectsArray = [
  {
    Position_X: 300,
    Position_Y: 0,
    Dist_Amount: -200,
    Vehicle_Variety: "greenCar",
    Number_Plate: "7V0QOJ",
    Speed_Amt: 2,
    exhaust: [],
  },
  {
    Position_X: 300,
    Position_Y: 0,
    Dist_Amount: 200,
    Vehicle_Variety: "redCar",
    Number_Plate: "UBDDI6",
    Speed_Amt: 2,
    exhaust: [],
  },
  {
    Position_X: 500,
    Position_Y: 0,
    Dist_Amount: 600,
    Vehicle_Variety: "redCar",
    Number_Plate: "SAQ6LH",
    Speed_Amt: 2,
    exhaust: [],
  },
  {
    Position_X: 500,
    Position_Y: 0,
    Dist_Amount: 1000,
    Vehicle_Variety: "redCar",
    Number_Plate: "5NX2AG",
    Speed_Amt: 2,
    exhaust: [],
  },
  {
    Position_X: 500,
    Position_Y: 0,
    Dist_Amount: 1400,
    Vehicle_Variety: "greenCar",
    Number_Plate: "887NB0",
    Speed_Amt: 2,
    exhaust: [],
  },
  {
    Position_X: 300,
    Position_Y: 0,
    Dist_Amount: 1800,
    Vehicle_Variety: "blueCar",
    Number_Plate: "EZIJB9",
    Speed_Amt: 2,
    exhaust: [],
  },
  {
    Position_X: 500,
    Position_Y: 0,
    Dist_Amount: 2200,
    Vehicle_Variety: "whiteCar",
    Number_Plate: "73RWYN",
    Speed_Amt: 2,
    exhaust: [],
  },
  {
    Position_X: 300,
    Position_Y: 0,
    Dist_Amount: 2600,
    Vehicle_Variety: "blueCar",
    Number_Plate: "Q0UQ2R",
    Speed_Amt: 2,
    exhaust: [],
  },
  {
    Position_X: 500,
    Position_Y: 0,
    Dist_Amount: 3000,
    Vehicle_Variety: "whiteCar",
    Number_Plate: "PB6FZC",
    Speed_Amt: 2,
    exhaust: [],
  },
  {
    Position_X: 500,
    Position_Y: 0,
    Dist_Amount: 3400,
    Vehicle_Variety: "redCar",
    Number_Plate: "G0D9WZ",
    Speed_Amt: 2,
    exhaust: [],
  },
  {
    Position_X: 300,
    Position_Y: 0,
    Dist_Amount: 3800,
    Vehicle_Variety: "redCar",
    Number_Plate: "XVTA24",
    Speed_Amt: 2,
    exhaust: [],
  },
  {
    Position_X: 500,
    Position_Y: 0,
    Dist_Amount: 4200,
    Vehicle_Variety: "blueCar",
    Number_Plate: "O1ZGUV",
    Speed_Amt: 2,
    exhaust: [],
  },
  {
    Position_X: 300,
    Position_Y: 0,
    Dist_Amount: 4600,
    Vehicle_Variety: "greenCar",
    Number_Plate: "SDRGV1",
    Speed_Amt: 2,
    exhaust: [],
  },
  {
    Position_X: 300,
    Position_Y: 0,
    Dist_Amount: 5000,
    Vehicle_Variety: "redCar",
    Number_Plate: "N1TUW6",
    Speed_Amt: 2,
    exhaust: [],
  },
  {
    Position_X: 500,
    Position_Y: 0,
    Dist_Amount: 5400,
    Vehicle_Variety: "whiteCar",
    Number_Plate: "CJVY8R",
    Speed_Amt: 2,
    exhaust: [],
  },
  {
    Position_X: 300,
    Position_Y: 0,
    Dist_Amount: 5800,
    Vehicle_Variety: "redCar",
    Number_Plate: "IZBEZQ",
    Speed_Amt: 2,
    exhaust: [],
  },
  {
    Position_X: 300,
    Position_Y: 0,
    Dist_Amount: 6200,
    Vehicle_Variety: "greenCar",
    Number_Plate: "XII1F6",
    Speed_Amt: 2,
    exhaust: [],
  },
  {
    Position_X: 500,
    Position_Y: 0,
    Dist_Amount: 6600,
    Vehicle_Variety: "greenCar",
    Number_Plate: "ZIVL57",
    Speed_Amt: 2,
    exhaust: [],
  },
  {
    Position_X: 300,
    Position_Y: 0,
    Dist_Amount: 7000,
    Vehicle_Variety: "whiteCar",
    Number_Plate: "J7Y4FT",
    Speed_Amt: 2,
    exhaust: [],
  },
  {
    Position_X: 300,
    Position_Y: 0,
    Dist_Amount: 7400,
    Vehicle_Variety: "blueCar",
    Number_Plate: "B8NC4K",
    Speed_Amt: 2,
    exhaust: [],
  },
];

function preload() {
  var carTypes = ["detective", "redCar", "greenCar", "blueCar", "whiteCar"];

  for (var i = 0; i < carTypes.length; i++) {
    carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
  }
}

function setup() {
  createCanvas(800, 800);
  textSize(30);
  textAlign(CENTER);

  roadWidth = 400;
  roadLeftEdge = 200;
  laneCoordinateA = 300;
  laneCoordinateB = 500;

  Chase_CarObject = {
    Position_X: roadLeftEdge + roadWidth / 4,
    Position_Y: 550,
    Dist_Amount: 0,
    Speed_Amt: 3,
    Shudder_Val: 0,
    Vehicle_Variety: "detective",
    Number_Plate: "5L3UTH",
    exhaust: [],
  };
}

function draw() {
  background(0);

  drawRoad();
  drawCars();

  if (suspect) {
    fill(255);

    text("suspect found !", width / 2, height / 2);
    return;
  }

  ////////////////////// HANDLE DETECTIVE /////////////////////////

  DriveCar();
  var b2b = CheckInfront(Chase_CarObject);
  if (b2b) MoveLanes(Chase_CarObject);
  var a = CheckSuspect();
  if (a != false) suspect = a;

  //////////////////////HANDLE THE OTHER CARS//////////////////////

  for (var i = 0; i < trafficObjectsArray.length; i++) {
    trafficObjectsArray[i].Dist_Amount += trafficObjectsArray[i].Speed_Amt;
    trafficObjectsArray[i].Position_Y =
      Chase_CarObject.Position_Y -
      trafficObjectsArray[i].Dist_Amount +
      Chase_CarObject.Dist_Amount;
  }
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
      i * 100 + (Chase_CarObject.Dist_Amount % 100),
      roadLeftEdge + roadWidth / 2,
      i * 100 + 70 + (Chase_CarObject.Dist_Amount % 100)
    );
  }
}

function drawCars() {
  //draw the detective car

  image;
  drawExhaust(Chase_CarObject);
  image(
    carImages["detective"],
    Chase_CarObject.Position_X -
      carImages["detective"].width / 2 +
      random(-Chase_CarObject.Shudder_Val, Chase_CarObject.Shudder_Val),
    Chase_CarObject.Position_Y +
      random(-Chase_CarObject.Shudder_Val, Chase_CarObject.Shudder_Val)
  );

  //draw all other cars

  for (var i = 0; i < trafficObjectsArray.length; i++) {
    if (
      trafficObjectsArray[i].Position_Y < height &&
      trafficObjectsArray[i].Position_Y > -height / 2
    ) {
      image(
        carImages[trafficObjectsArray[i].Vehicle_Variety],
        trafficObjectsArray[i].Position_X -
          carImages[trafficObjectsArray[i].Vehicle_Variety].width / 2,
        trafficObjectsArray[i].Position_Y
      );
      DriveCarEngine(trafficObjectsArray[i]);

      drawExhaust(trafficObjectsArray[i]);
    }
  }
}

function DriveCarEngine(car) {
  car.exhaust.push({
    size: 2,
    x: car.Position_X,
    y: car.Position_Y + carImages[car.Vehicle_Variety].height,
  });

  for (var i = car.exhaust.length - 1; i >= 0; i--) {
    car.exhaust[i].y += max(0.75, car.Speed_Amt / 3);
    if (car.Vehicle_Variety != "detective")
      car.exhaust[i].y += Chase_CarObject.Speed_Amt - car.Speed_Amt;
    car.exhaust[i].x += random(-1, 1);
    car.exhaust[i].size += 0.5;

    if (car.exhaust[i].y > height || car.exhaust[i].y < 0) {
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
