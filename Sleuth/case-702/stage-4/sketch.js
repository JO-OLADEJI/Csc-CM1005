/*

Officer: 5148740
CaseNum: 702-3-15696676-5148740

Case 702 - The case of Vanishing Vannevar
Stage 4 - High speed chase

“All units: Vannevar is on the run. They are driving a white car with a number_plate of TY4426.  Pursue at speed.
I repeat pursue at speed.” Okay Vannevar’s game is nearly up. Go get him kid.
Complete the helper functions below to locate, chase and arrest Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of chase_vehicleObject and the cars in
carObject_array to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////
// TY4426 - white car
function MoveVehicle() {
  /*
	This function should do the following: 
	 - increment chase_vehicleObject's dist_amount property by its speed_amount property 
	 - add a random amount between -0.03 and 0.03 to chase_vehicleObject's engineRumble_val property
	 - use the constrain function to constrain chase_vehicleObject's engineRumble_val property to values between 0.06 and 0.9
	 - call the TurnoverEngine function passing chase_vehicleObject as an argument
	*/

  chase_vehicleObject.dist_amount += chase_vehicleObject.speed_amount;
  chase_vehicleObject.engineRumble_val += random(-0.03, 0.03);
  chase_vehicleObject.engineRumble_val = constrain(
    chase_vehicleObject.engineRumble_val,
    0.06,
    0.9
  );
  TurnoverEngine(chase_vehicleObject);
}

function CrossLanes(carObj) {
  /*
	This function should do the following: 
	 - move carObj from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lane_pos_a and lane_pos_b to effect the change.
	 - finally you should return carObj at the end of the function.
	 hint: You will need to modify the position_x property of carObj.
	*/

  if (carObj.position_x == lane_pos_a) {
    carObj.position_x = lane_pos_b;
  } else {
    carObj.position_x = lane_pos_a;
  }

  return carObj;
}

function SearchCarIsAhead(car_obj_a, car_obj_b) {
  /*
	This function should do the following: 
	 - determine if car_obj_a is in the same lane and less than 200px behind car_obj_b.
	 - do this by comparing the two cars' dist_amount properties
	 - if these requirements are met then return true. Otherwise return false.
	*/

  if (
    car_obj_a.position_x == car_obj_b.position_x &&
    car_obj_b.dist_amount - car_obj_a.dist_amount > 0 &&
    car_obj_b.dist_amount - car_obj_a.dist_amount < 200
  ) {
    return true;
  }
  return false;
}

function VehicleIsAtSide(targetVehicle_a, targetVehicle_b) {
  /*
	This function should do the following: 
	 - determine if targetVehicle_a is parallel with targetVehicle_b.
	 - if targetVehicle_a is found to be parallel to targetVehicle_b then return true.
	 - cars are considered parallel if the absolute difference between their dist_amount properties is less than 25 px and they have non-matching position_x properties	*/

  if (
    targetVehicle_a.position_x != targetVehicle_b.position_x &&
    abs(targetVehicle_a.dist_amount - targetVehicle_b.dist_amount) < 25
  ) {
    return true;
  }
}

function DetectAssailant() {
  /*
	This function should do the following: 
	 - Check cars passing parallel to chase_vehicleObject to see if they match the number_plate property in the assailant description.
	 - it does this by traversing carObject_array and calling VehicleIsAtSide for each car
.	 - if a positive result is returned then the number_plate property of the found car is then checked against the assailant description.
	 - if a match is found then the car in question is assigned to the global variable assailant.
	*/
  for (let i = 0; i < carObject_array.length; i++) {
    if (
      VehicleIsAtSide(chase_vehicleObject, carObject_array[i]) == true &&
      carObject_array[i].number_plate == "TY4426"
      // carObject_array[i].car_type == "whiteCar"
    ) {
      // console.log("assialant detected!");
      assailant = carObject_array[i];
      break;
    }
  }
}

function ChasingAssailant() {
  /*
	This function should do the following: 
	 - scale the speed_amount property of chase_vehicleObject by a factor of 1.001.
	 - use the min function to make sure that chase_vehicleObject's speed_amount property does not exceed 6.
	 - it should traverse carObject_array calling SearchCarIsAhead for each car to detect any cars in front of chase_vehicleObject.
	 - if a positive result is returned it should check to see if the number_plate property of that car matches that of assailant.
	 - for a match, PullOverAssailant should be called, otherwise call CrossLanes.
	*/

  chase_vehicleObject.speed_amount *= 1.001;
  chase_vehicleObject.speed_amount = min(chase_vehicleObject.speed_amount, 6);

  for (let i = 0; i < carObject_array.length; i++) {
    if (SearchCarIsAhead(chase_vehicleObject, carObject_array[i])) {
      if (carObject_array[i].number_plate == assailant.number_plate) {
        PullOverAssailant(i);
      } else {
        CrossLanes(chase_vehicleObject);
      }
      break;
    }
  }
}

function PullOverAssailant(target_vehicle) {
  /*
	This function should do the following: 
	 - set the arrested property of the car at the index of target_vehicle to true.
	 - set the isArresting_assailant property of chase_vehicleObject to true.
	 - set the speed_amount properties of both vehicles to zero.
	*/

  // we have a match
  carObject_array[target_vehicle].arrested = true;
  carObject_array[target_vehicle].speed_amount = 0;

  chase_vehicleObject.speed_amount = 0;
  chase_vehicleObject.isArresting_assailant = true;
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var chase_vehicleObject;

var roadWidth;
var roadLeftEdge;
var lane_pos_a;
var lane_pos_b;
var carImages = {};
var assailant;

var carObject_array = [
  {
    position_x: 300,
    position_y: 0,
    dist_amount: -200,
    car_type: "greenCar",
    number_plate: "832K28",
    speed_amount: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    dist_amount: 200,
    car_type: "whiteCar",
    number_plate: "MYCX4J",
    speed_amount: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    dist_amount: 600,
    car_type: "whiteCar",
    number_plate: "Y8H28E",
    speed_amount: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    dist_amount: 1000,
    car_type: "redCar",
    number_plate: "8XN3OH",
    speed_amount: 2,
    exhaust: [],
  },
  {
    position_x: 500,
    position_y: 0,
    dist_amount: 1400,
    car_type: "redCar",
    number_plate: "VX2HRX",
    speed_amount: 2,
    exhaust: [],
  },
  {
    position_x: 500,
    position_y: 0,
    dist_amount: 1800,
    car_type: "redCar",
    number_plate: "FXI70X",
    speed_amount: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    dist_amount: 2200,
    car_type: "greenCar",
    number_plate: "VT8PAJ",
    speed_amount: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    dist_amount: 2600,
    car_type: "whiteCar",
    number_plate: "TY4426",
    speed_amount: 2,
    exhaust: [],
  },
  {
    position_x: 500,
    position_y: 0,
    dist_amount: 3000,
    car_type: "blueCar",
    number_plate: "YDH854",
    speed_amount: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    dist_amount: 3400,
    car_type: "blueCar",
    number_plate: "DX6JD2",
    speed_amount: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    dist_amount: 3800,
    car_type: "redCar",
    number_plate: "YDDN9O",
    speed_amount: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    dist_amount: 4200,
    car_type: "redCar",
    number_plate: "WI3VQU",
    speed_amount: 2,
    exhaust: [],
  },
  {
    position_x: 500,
    position_y: 0,
    dist_amount: 4600,
    car_type: "greenCar",
    number_plate: "1BEUS3",
    speed_amount: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    dist_amount: 5000,
    car_type: "greenCar",
    number_plate: "W16A99",
    speed_amount: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    dist_amount: 5400,
    car_type: "greenCar",
    number_plate: "JAA6AV",
    speed_amount: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    dist_amount: 5800,
    car_type: "blueCar",
    number_plate: "0OGQ2L",
    speed_amount: 2,
    exhaust: [],
  },
  {
    position_x: 300,
    position_y: 0,
    dist_amount: 6200,
    car_type: "redCar",
    number_plate: "TVO5HG",
    speed_amount: 2,
    exhaust: [],
  },
  {
    position_x: 500,
    position_y: 0,
    dist_amount: 6600,
    car_type: "whiteCar",
    number_plate: "ULWK7E",
    speed_amount: 2,
    exhaust: [],
  },
  {
    position_x: 500,
    position_y: 0,
    dist_amount: 7000,
    car_type: "redCar",
    number_plate: "8LPA1J",
    speed_amount: 2,
    exhaust: [],
  },
  {
    position_x: 500,
    position_y: 0,
    dist_amount: 7400,
    car_type: "redCar",
    number_plate: "9V0X6M",
    speed_amount: 2,
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
  lane_pos_a = 300;
  lane_pos_b = 500;

  chase_vehicleObject = {
    position_x: roadLeftEdge + roadWidth / 4,
    position_y: 550,
    dist_amount: 0,
    speed_amount: 3,
    engineRumble_val: 0,
    car_type: "detective",
    number_plate: "5L3UTH",
    isArresting_assailant: false,
    following_assailant: false,
    exhaust: [],
  };
}

function draw() {
  background(0);

  drawRoad();
  drawCars();

  if (assailant) {
    if (assailant.arrested) {
      fill(255);

      text("assailant arrested!", width / 2, height / 2);
    }
  }

  ////////////////////// HANDLE DETECTIVE /////////////////////////

  if (
    !chase_vehicleObject.following_assailant &&
    !chase_vehicleObject.isArresting_assailant
  ) {
    MoveVehicle();
    for (var i = 0; i < carObject_array.length; i++) {
      var b2b = SearchCarIsAhead(chase_vehicleObject, carObject_array[i]);
      if (b2b) CrossLanes(chase_vehicleObject);
    }
    DetectAssailant();
    if (assailant) chase_vehicleObject.following_assailant = true;
  } else if (!chase_vehicleObject.isArresting_assailant) {
    ChasingAssailant();
    MoveVehicle();
  }

  ////////////////////// HANDLE ASSAILANT /////////////////////////

  if (assailant) {
    if (!assailant.arrested) {
      assailant.speed_amount = 5;
      for (var i = 0; i < carObject_array.length; i++) {
        var b2b = SearchCarIsAhead(assailant, carObject_array[i]);
        if (b2b) {
          if (b2b.number_plate != assailant.number_plate) {
            CrossLanes(assailant);
          }
        }
      }
    }
  }

  //////////////////////HANDLE THE OTHER CARS//////////////////////

  for (var i = 0; i < carObject_array.length; i++) {
    carObject_array[i].dist_amount += carObject_array[i].speed_amount;
    carObject_array[i].position_y =
      chase_vehicleObject.position_y -
      carObject_array[i].dist_amount +
      chase_vehicleObject.dist_amount;

    if (assailant) {
      if (assailant.arrested) {
        if (carObject_array[i].position_x == chase_vehicleObject.position_x) {
          if (
            carObject_array[i].dist_amount < chase_vehicleObject.dist_amount
          ) {
            if (
              carObject_array[i].dist_amount - chase_vehicleObject.dist_amount <
              200
            ) {
              CrossLanes(carObject_array[i]);
            }
          }
        }
      }
    }
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
      i * 100 + (chase_vehicleObject.dist_amount % 100),
      roadLeftEdge + roadWidth / 2,
      i * 100 + 70 + (chase_vehicleObject.dist_amount % 100)
    );
  }
}

function drawCars() {
  //draw the detective car

  drawExhaust(chase_vehicleObject);
  image(
    carImages["detective"],
    chase_vehicleObject.position_x -
      carImages["detective"].width / 2 +
      random(
        -chase_vehicleObject.engineRumble_val,
        chase_vehicleObject.engineRumble_val
      ),
    chase_vehicleObject.position_y +
      random(
        -chase_vehicleObject.engineRumble_val,
        chase_vehicleObject.engineRumble_val
      )
  );

  //draw all other cars

  for (var i = 0; i < carObject_array.length; i++) {
    if (
      carObject_array[i].position_y < height &&
      carObject_array[i].position_y > -height / 2
    ) {
      image(
        carImages[carObject_array[i].car_type],
        carObject_array[i].position_x -
          carImages[carObject_array[i].car_type].width / 2,
        carObject_array[i].position_y
      );
      TurnoverEngine(carObject_array[i]);

      drawExhaust(carObject_array[i]);
    }
  }
}

function TurnoverEngine(car) {
  car.exhaust.push({
    size: 2,
    x: car.position_x,
    y: car.position_y + carImages[car.car_type].height,
  });

  for (var i = car.exhaust.length - 1; i >= 0; i--) {
    car.exhaust[i].y += max(0.75, car.speed_amount / 3);
    if (car.car_type != "detective")
      car.exhaust[i].y += chase_vehicleObject.speed_amount - car.speed_amount;
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
