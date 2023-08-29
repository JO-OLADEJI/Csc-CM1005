/*

Officer: 5148740
CaseNum: 702-1-17382828-5148740

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of chaseCar and the cars in
Vehicle_List to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Move_Car() {
  // - increment chaseCar's distAmt property by its accelAmt property
  chaseCar.distAmt += chaseCar.accelAmt;

  // - add a random amount between -0.04 and 0.04 to chaseCar's shudderVal property
  chaseCar.shudderVal += random(-0.04, 0.04);

  // - use the constrain function to constrain chaseCar's shudderVal property to values between 0.09 and 0.96
  chaseCar.shudderVal = constrain(chaseCar.shudderVal, 0.09, 0.96);

  // - call the Cycle_Engine function passing chaseCar as an argument
  Cycle_Engine(chaseCar);
}

function Switch_Lanes(target_car) {
  // - move target_car from one lane to the other.
  if (target_car.xPos == LaneCoordinate_A) {
    target_car.xPos = LaneCoordinate_B;
  } else {
    target_car.xPos = LaneCoordinate_A;
  }

  // - do the move in a single step without any extra animation.

  // - use LaneCoordinate_A and LaneCoordinate_B to effect the change.

  // hint: You will need to modify the xPos property of target_car.
}

function SearchCar_Ahead(car) {
  /*
	This function should do the following: 
	 - determine if car is in the same lane and less than 200px behind any of the cars in Vehicle_List.
	 - do this by traversing Vehicle_List and comparing each car's distAmt property to that of car.
	 - if you find a car that matches these requirements then return the index representing the car's position in Vehicle_List. Otherwise return false.
	*/

	// console.log(car.distAmt);
  for (let i = 0; i < Vehicle_List.length; i++) {
    if (
      car.xPos == Vehicle_List[i].xPos &&
      Vehicle_List[i].distAmt - car.distAmt > 0 &&
      Vehicle_List[i].distAmt - car.distAmt < 200
    ) {
      // console.log(i);
      return i;
    }
  }

  // console.log(false);
  return false;
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var chaseCar;

var roadWidth;
var roadLeftEdge;
var LaneCoordinate_A;
var LaneCoordinate_B;
var carImages = {};

var Vehicle_List = [
  {
    xPos: 300,
    yPos: 0,
    distAmt: -200,
    carModel: "greenCar",
    numberPlate: "0PXIQ3",
    accelAmt: 2,
    exhaust: [],
  },
  {
    xPos: 500,
    yPos: 0,
    distAmt: 200,
    carModel: "whiteCar",
    numberPlate: "YJ14XJ",
    accelAmt: 2,
    exhaust: [],
  },
  {
    xPos: 300,
    yPos: 0,
    distAmt: 600,
    carModel: "whiteCar",
    numberPlate: "3DIAC5",
    accelAmt: 2,
    exhaust: [],
  },
  {
    xPos: 300,
    yPos: 0,
    distAmt: 1000,
    carModel: "blueCar",
    numberPlate: "Q1BNVW",
    accelAmt: 2,
    exhaust: [],
  },
  {
    xPos: 500,
    yPos: 0,
    distAmt: 1400,
    carModel: "whiteCar",
    numberPlate: "LCMI01",
    accelAmt: 2,
    exhaust: [],
  },
  {
    xPos: 500,
    yPos: 0,
    distAmt: 1800,
    carModel: "redCar",
    numberPlate: "9MKWGW",
    accelAmt: 2,
    exhaust: [],
  },
  {
    xPos: 300,
    yPos: 0,
    distAmt: 2200,
    carModel: "blueCar",
    numberPlate: "AGC5MW",
    accelAmt: 2,
    exhaust: [],
  },
  {
    xPos: 300,
    yPos: 0,
    distAmt: 2600,
    carModel: "whiteCar",
    numberPlate: "AH1HFH",
    accelAmt: 2,
    exhaust: [],
  },
  {
    xPos: 500,
    yPos: 0,
    distAmt: 3000,
    carModel: "redCar",
    numberPlate: "ZWJF43",
    accelAmt: 2,
    exhaust: [],
  },
  {
    xPos: 300,
    yPos: 0,
    distAmt: 3400,
    carModel: "greenCar",
    numberPlate: "7J40XE",
    accelAmt: 2,
    exhaust: [],
  },
  {
    xPos: 300,
    yPos: 0,
    distAmt: 3800,
    carModel: "blueCar",
    numberPlate: "ZO68U7",
    accelAmt: 2,
    exhaust: [],
  },
  {
    xPos: 500,
    yPos: 0,
    distAmt: 4200,
    carModel: "redCar",
    numberPlate: "NNPHUJ",
    accelAmt: 2,
    exhaust: [],
  },
  {
    xPos: 300,
    yPos: 0,
    distAmt: 4600,
    carModel: "redCar",
    numberPlate: "5VER2Y",
    accelAmt: 2,
    exhaust: [],
  },
  {
    xPos: 300,
    yPos: 0,
    distAmt: 5000,
    carModel: "redCar",
    numberPlate: "3L0HQ8",
    accelAmt: 2,
    exhaust: [],
  },
  {
    xPos: 500,
    yPos: 0,
    distAmt: 5400,
    carModel: "whiteCar",
    numberPlate: "GXNC31",
    accelAmt: 2,
    exhaust: [],
  },
  {
    xPos: 500,
    yPos: 0,
    distAmt: 5800,
    carModel: "greenCar",
    numberPlate: "DYIERS",
    accelAmt: 2,
    exhaust: [],
  },
  {
    xPos: 300,
    yPos: 0,
    distAmt: 6200,
    carModel: "greenCar",
    numberPlate: "89R9XJ",
    accelAmt: 2,
    exhaust: [],
  },
  {
    xPos: 500,
    yPos: 0,
    distAmt: 6600,
    carModel: "greenCar",
    numberPlate: "YMQ7SX",
    accelAmt: 2,
    exhaust: [],
  },
  {
    xPos: 300,
    yPos: 0,
    distAmt: 7000,
    carModel: "redCar",
    numberPlate: "5211WW",
    accelAmt: 2,
    exhaust: [],
  },
  {
    xPos: 500,
    yPos: 0,
    distAmt: 7400,
    carModel: "redCar",
    numberPlate: "Y77HQH",
    accelAmt: 2,
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

  roadWidth = 400;
  roadLeftEdge = 200;
  LaneCoordinate_A = 300;
  LaneCoordinate_B = 500;

  chaseCar = {
    xPos: roadLeftEdge + roadWidth / 4,
    yPos: 550,
    distAmt: 0,
    accelAmt: 3,
    shudderVal: 0,
    carModel: "detective",
    numberPlate: "5L3UTH",
    exhaust: [],
  };
}

function draw() {
  background(0);

  drawRoad();
  drawCars();

  ////////////////////// HANDLE DETECTIVE /////////////////////////

  Move_Car();
  var b2b = SearchCar_Ahead(chaseCar);
  if (b2b) Switch_Lanes(chaseCar);

  //////////////////////HANDLE THE OTHER CARS//////////////////////

  for (var i = 0; i < Vehicle_List.length; i++) {
    Vehicle_List[i].distAmt += Vehicle_List[i].accelAmt;
    Vehicle_List[i].yPos =
      chaseCar.yPos - Vehicle_List[i].distAmt + chaseCar.distAmt;
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
      i * 100 + (chaseCar.distAmt % 100),
      roadLeftEdge + roadWidth / 2,
      i * 100 + 70 + (chaseCar.distAmt % 100)
    );
  }
}

function drawCars() {
  //draw the detective car

  image;
  drawExhaust(chaseCar);
  image(
    carImages["detective"],
    chaseCar.xPos -
      carImages["detective"].width / 2 +
      random(-chaseCar.shudderVal, chaseCar.shudderVal),
    chaseCar.yPos + random(-chaseCar.shudderVal, chaseCar.shudderVal)
  );

  //draw all other cars

  for (var i = 0; i < Vehicle_List.length; i++) {
    if (Vehicle_List[i].yPos < height && Vehicle_List[i].yPos > -height / 2) {
      image(
        carImages[Vehicle_List[i].carModel],
        Vehicle_List[i].xPos - carImages[Vehicle_List[i].carModel].width / 2,
        Vehicle_List[i].yPos
      );
      Cycle_Engine(Vehicle_List[i]);

      drawExhaust(Vehicle_List[i]);
    }
  }
}

function Cycle_Engine(car) {
  car.exhaust.push({
    size: 2,
    x: car.xPos,
    y: car.yPos + carImages[car.carModel].height,
  });

  for (var i = car.exhaust.length - 1; i >= 0; i--) {
    car.exhaust[i].y += max(0.75, car.accelAmt / 3);
    if (car.carModel != "detective")
      car.exhaust[i].y += chaseCar.accelAmt - car.accelAmt;
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
