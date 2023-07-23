/*

The Game Project 6

Adding game mechanics

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var collectable;
var canyons;
var clouds;
var mountains;
var trees;
var flagpole;

var cameraPosX;
var groundWidth;
var game_score;
var lives;
let displayText;
let displayFlagpoleWarning;

function setup() {
  // canvas size
  createCanvas(1024, 576);

  floorPos_y = (height * 3) / 4;
  lives = 3;
  startGame();
}

function draw() {
  // blue sky
  background(100, 155, 255);

  // green ground
  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height - floorPos_y);

  // Side Scrolling [start]
  push();
  translate(-cameraPosX, 0);

  // CLOUDS
  drawClouds(clouds);

  // MOUNTAIN
  drawMountains(mountains);

  // CANYON
  drawCanyons(canyons);

  // TREES
  drawTrees(trees);

  // FLAGPOLE
  renderFlagpole(flagpole);

  // GAME CHARACTER
  if (isLeft && isFalling) {
    // jumping-left
    fill(255);
    stroke(0);
    strokeWeight(2);
    // head
    ellipse(gameChar_x, gameChar_y - 55, 25, 25);
    // legs
    noFill();
    strokeWeight(4);
    beginShape();
    vertex(gameChar_x - 1, gameChar_y - 22);
    vertex(gameChar_x - 3, gameChar_y - 17);
    vertex(gameChar_x, gameChar_y - 10);
    endShape();

    fill(255);
    strokeWeight(2);
    // body
    rect(gameChar_x - 5, gameChar_y - 42, 10, 20);
    // hands
    rect(gameChar_x - 2, gameChar_y - 39, 4, 20);
    // nose
    fill(0);
    ellipse(gameChar_x - 10, gameChar_y - 55, 6, 6);

    strokeWeight(1);
  } else if (isRight && isFalling) {
    // jumping-right
    fill(255);
    stroke(0);
    strokeWeight(2);
    // head
    ellipse(gameChar_x, gameChar_y - 55, 25, 25);
    // legs
    noFill();
    strokeWeight(4);
    beginShape();
    vertex(gameChar_x - 1, gameChar_y - 22);
    vertex(gameChar_x + 2, gameChar_y - 17);
    vertex(gameChar_x - 3, gameChar_y - 10);
    endShape();

    fill(255);
    strokeWeight(2);
    // body
    rect(gameChar_x - 5, gameChar_y - 42, 10, 20);
    // hands
    rect(gameChar_x - 2, gameChar_y - 39, 4, 20);
    // nose
    fill(0);
    ellipse(gameChar_x + 10, gameChar_y - 55, 6, 6);

    strokeWeight(1);
  } else if (isLeft) {
    // walking left
    fill(255);
    stroke(0);
    strokeWeight(2);
    // head
    ellipse(gameChar_x, gameChar_y - 55, 25, 25);
    // legs
    rect(gameChar_x - 2, gameChar_y - 25, 5, 20);
    rect(gameChar_x - 4, gameChar_y - 22, 5, 20);
    // body
    rect(gameChar_x - 5, gameChar_y - 42, 10, 20);
    // hands
    rect(gameChar_x - 2, gameChar_y - 39, 4, 20);

    // nose
    fill(0);
    ellipse(gameChar_x - 10, gameChar_y - 55, 6, 6);

    strokeWeight(1);
  } else if (isRight) {
    // walking right
    fill(255);
    stroke(0);
    strokeWeight(2);
    // head
    ellipse(gameChar_x, gameChar_y - 55, 25, 25);
    // legs
    rect(gameChar_x - 4, gameChar_y - 25, 5, 20);
    rect(gameChar_x - 2, gameChar_y - 22, 5, 20);
    // body
    rect(gameChar_x - 5, gameChar_y - 42, 10, 20);
    // hands
    rect(gameChar_x - 2, gameChar_y - 39, 4, 20);

    // nose
    fill(0);
    ellipse(gameChar_x + 10, gameChar_y - 55, 6, 6);

    strokeWeight(1);
  } else if (isFalling || isPlummeting) {
    // jumping facing forwards
    stroke(0);
    strokeWeight(2);
    fill(255);

    // head
    ellipse(gameChar_x, gameChar_y - 55, 25, 25);
    // legs
    noFill();
    strokeWeight(4);
    beginShape();
    vertex(gameChar_x - 4, gameChar_y - 22);
    vertex(gameChar_x - 7, gameChar_y - 17);
    vertex(gameChar_x - 4, gameChar_y - 10);
    endShape();
    beginShape();
    vertex(gameChar_x + 4, gameChar_y - 22);
    vertex(gameChar_x + 7, gameChar_y - 17);
    vertex(gameChar_x + 4, gameChar_y - 10);
    endShape();
    strokeWeight(2);

    fill(255);
    // hands
    rect(gameChar_x - 13, gameChar_y - 39, 4, 20);
    rect(gameChar_x + 9, gameChar_y - 39, 4, 20);
    // body
    rect(gameChar_x - 10, gameChar_y - 42, 20, 20);
    // nose
    fill(0);
    ellipse(gameChar_x, gameChar_y - 53, 6, 6);

    strokeWeight(1);
  } else {
    // standing front facing
    stroke(0);
    strokeWeight(2);
    fill(255);

    // head
    ellipse(gameChar_x, gameChar_y - 55, 25, 25);
    // hands
    rect(gameChar_x - 13, gameChar_y - 39, 4, 20);
    rect(gameChar_x + 9, gameChar_y - 39, 4, 20);
    // body
    rect(gameChar_x - 10, gameChar_y - 42, 20, 20);
    // legs
    rect(gameChar_x - 7, gameChar_y - 22, 5, 20);
    rect(gameChar_x + 2, gameChar_y - 22, 5, 20);

    // nose
    fill(0);
    ellipse(gameChar_x, gameChar_y - 55, 6, 6);
  }

  // COLLECTABLE
  drawCollectable(collectable);

  // warning at flagpole side
  if (displayFlagpoleWarning) {
    noStroke();
    fill(0);
    textSize(16);
    textFont("Monospace");
    displayText = "3 points needed";
    text(
      displayText,
      gameChar_x - textWidth(displayText) / 2,
      floorPos_y - 120
    );
    displayText = "to complete level";
    text(
      displayText,
      gameChar_x - textWidth(displayText) / 2,
      floorPos_y - 100
    );
  }

  // Side Scrolling [end]
  pop();

  // render lives & game score
  push();
  fill(0);
  textSize(16);
  textFont("Monospace");
  text(`score - ${game_score}`, width - 130, 60);
  text(`lives - ${lives < 0 ? 0 : lives}`, width - 130, 40);
  pop();

  // game state
  if (lives < 1) {
    // backdrop
    fill(0, 0, 0, 50);
    noStroke();
    rect(0, 0, width, height);

    textSize(40);
    textFont("Monospace");
    fill(255, 70, 70);
    displayText = "Game over.";
    text(displayText, width / 2 - textWidth(displayText) / 2, height / 2);
    displayText = "Prese space to continue.";
    text(displayText, width / 2 - textWidth(displayText) / 2, height / 2 + 50);
    return;
  } else if (flagpole.isReached) {
    // backdrop
    fill(0, 0, 0, 50);
    noStroke();
    rect(0, 0, width, height);

    textSize(40);
    textFont("Monospace");
    fill(0);
    displayText = "Level complete.";
    text(displayText, width / 2 - textWidth(displayText) / 2, height / 2);
    displayText = "Press space to continue.";
    text(displayText, width / 2 - textWidth(displayText) / 2, height / 2 + 50);
    return;
  }

  // INTERACTION CODE
  // move character left and right
  if (isLeft) {
    gameChar_x = constrain(gameChar_x - 3, 0 + 15, groundWidth - 15);

    // shift the camera only when Game Character is at the center
    if (gameChar_x >= width / 2 && gameChar_x < groundWidth - width / 2) {
      cameraPosX = constrain(cameraPosX - 3, 0, groundWidth - width);

      // cloud parallax
      for (let i = 0; i < clouds.length; i++) {
        if (clouds[i].speed == "slow") {
          clouds[i].x_pos += 1;
        } else if (clouds[i].speed == "mid") {
          clouds[i].x_pos += 2;
        } else if (clouds[i].speed == "fast") {
          clouds[i].x_pos += 3;
        }
      }

      // mountains parallax
      for (let i = 0; i < mountains.length; i++) {
        mountains[i].x_pos += 0.2;
      }
    }
  }

  if (isRight) {
    gameChar_x = constrain(gameChar_x + 3, 0 + 15, groundWidth - 15);

    // shift the camera only when Game Character is at the center
    if (gameChar_x >= width / 2 && gameChar_x < groundWidth - width / 2) {
      cameraPosX = constrain(cameraPosX + 3, 0, groundWidth - width);

      // cloud parallax
      for (let i = 0; i < clouds.length; i++) {
        if (clouds[i].speed == "slow") {
          clouds[i].x_pos -= 1;
        } else if (clouds[i].speed == "mid") {
          clouds[i].x_pos -= 2;
        } else if (clouds[i].speed == "fast") {
          clouds[i].x_pos -= 3.5;
        }
      }

      // mountains parallax
      for (let i = 0; i < mountains.length; i++) {
        mountains[i].x_pos -= 0.2;
      }
    }
  }

  // gravity effect
  if (gameChar_y < floorPos_y) {
    gameChar_y += 1;
    isFalling = true;
  } else {
    isFalling = false;
  }
  if (isPlummeting) {
    gameChar_y += 5;
  }

  // interaction with collectable item
  interactWithCollectable(collectable, canyons);

  // falling into canyons
  interactWithCanyons(canyons);
  checkPlayerDie();

  // reaching flagpole
  if (!flagpole.isReached) {
    checkFlagpole(flagpole);
  }
}

// p5.js functions
function keyPressed() {
  // when 'a' of left-arrow is pressed
  if ((keyCode == 65 || keyCode == 37) && !isPlummeting) {
    isLeft = true;
  }

  // when 'd' or right-arrow is pressed
  if ((keyCode == 68 || keyCode == 39) && !isPlummeting) {
    isRight = true;
  }

  // when 'w' or top-arrow is pressed
  if (
    (keyCode == 87 || keyCode == 38) &&
    !isFalling &&
    !isPlummeting &&
    !flagpole.isReached
  ) {
    gameChar_y -= 100;
  }
}

function keyReleased() {
  // when 'a' or left-arrow is released
  if (keyCode == 65 || keyCode == 37) {
    isLeft = false;
  }

  // when 'd' or right-arrow is released
  if (keyCode == 68 || keyCode == 39) {
    isRight = false;
  }
}

// custom functions
function drawClouds(cloudsData) {
  fill(255);
  for (let i = 0; i < cloudsData.length; i++) {
    rect(
      cloudsData[i].x_pos + 43 * cloudsData[i].scale,
      cloudsData[i].y_pos + 32 * cloudsData[i].scale,
      180 * cloudsData[i].scale,
      50 * cloudsData[i].scale,
      25 * cloudsData[i].scale
    );
    // ellipse(193, 85, 60, 60);
    ellipse(
      cloudsData[i].x_pos + 93 * cloudsData[i].scale,
      cloudsData[i].y_pos + 35 * cloudsData[i].scale,
      60 * cloudsData[i].scale,
      60 * cloudsData[i].scale
    );
    ellipse(
      cloudsData[i].x_pos + 140 * cloudsData[i].scale,
      cloudsData[i].y_pos + 15 * cloudsData[i].scale,
      70 * cloudsData[i].scale,
      70 * cloudsData[i].scale
    );
    ellipse(
      cloudsData[i].x_pos + 180 * cloudsData[i].scale,
      cloudsData[i].y_pos + 35 * cloudsData[i].scale,
      60 * cloudsData[i].scale,
      60 * cloudsData[i].scale
    );
  }
}

function drawMountains(mountainsData) {
  for (let i = 0; i < mountainsData.length; i++) {
    fill(133, 136, 148);
    triangle(
      mountainsData[i].x_pos,
      mountainsData[i].y_pos + 232,
      mountainsData[i].x_pos + 103,
      mountainsData[i].y_pos + 52,
      mountainsData[i].x_pos + 225,
      mountainsData[i].y_pos + 232
    );
    fill(74, 83, 98);
    triangle(
      mountainsData[i].x_pos + 175,
      mountainsData[i].y_pos + 232,
      mountainsData[i].x_pos + 250,
      mountainsData[i].y_pos + 140,
      mountainsData[i].x_pos + 302,
      mountainsData[i].y_pos + 232
    );
    fill(183, 191, 203);
    triangle(
      mountainsData[i].x_pos + 25,
      mountainsData[i].y_pos + 232,
      mountainsData[i].x_pos + 150,
      mountainsData[i].y_pos + 12,
      mountainsData[i].x_pos + 275,
      mountainsData[i].y_pos + 232
    );
  }
}

function drawTrees(treesData) {
  for (let i = 0; i < treesData.length; i++) {
    fill(116, 75, 41);
    rect(treesData[i].x_pos, treesData[i].y_pos + 84, 30, 60); // stem
    fill(62, 120, 79); // green shade 1
    triangle(
      treesData[i].x_pos - 20,
      372,
      treesData[i].x_pos + 15,
      266,
      treesData[i].x_pos + 50,
      372
    );
    fill(101, 156, 129); // green shade 2
    triangle(
      treesData[i].x_pos - 20,
      372,
      treesData[i].x_pos + 10,
      281,
      treesData[i].x_pos + 40,
      372
    );
  }
}

function drawCanyons(canyonsData) {
  noStroke();
  for (let i = 0; i < canyonsData.length; i++) {
    fill(116, 75, 41);
    rect(
      canyonsData[i].x_pos - 5,
      canyonsData[i].y_pos,
      canyonsData[i].width + 10,
      height - floorPos_y
    );
    fill(100, 155, 255);
    rect(
      canyonsData[i].x_pos,
      canyonsData[i].y_pos,
      canyonsData[i].width,
      height - floorPos_y
    );
  }
}

function drawCollectable(collectableData) {
  strokeWeight(2);
  stroke(0);
  fill(255, 215, 0);
  ellipse(
    collectableData.x_pos - collectableData.size / 2,
    collectableData.y_pos - collectableData.size / 2,
    collectableData.size,
    collectableData.size
  );
}

function renderFlagpole(flagpoleData) {
  fill(0, 0, 0, game_score < 3 ? 70 : 255);
  rect(flagpoleData.x_pos, height / 2, 5, floorPos_y - height / 2);
  fill(246, 124, 49, game_score < 3 ? 80 : 255);
  noStroke();
  if (flagpoleData.isReached) {
    triangle(
      flagpoleData.x_pos,
      height / 2,
      flagpole.x_pos + 50,
      height / 2 + 15,
      flagpoleData.x_pos,
      height / 2 + 30
    );
  } else {
    triangle(
      flagpoleData.x_pos,
      floorPos_y - 30,
      flagpole.x_pos + 50,
      floorPos_y - 15,
      flagpoleData.x_pos,
      floorPos_y
    );
  }
}

function interactWithCollectable(collectableData, canyonsData) {
  const collectableAndCharacterDst = dist(
    collectableData.x_pos - collectableData.size / 2,
    collectableData.y_pos - collectableData.size / 2,
    gameChar_x,
    gameChar_y
  );
  if (collectableAndCharacterDst <= collectableData.size - 5) {
    game_score += 1;
    // make a new collectible item when the current one is found
    // TRY 3 TIMES TO GET THE RULES RIGHT -> `canyonsData.length * 3`
    for (let i = 0; i < canyonsData.length * 3; i++) {
      // RULE 1 - collectible must be in the viewable portion of the screen
      collectableData.x_pos = random(
        cameraPosX + collectableData.size / 2,
        cameraPosX + width - collectableData.size / 2
      );
      // RULE 2 - collectible must not be above a canyon
      if (
        collectableData.x_pos > canyonsData[i % canyonsData.length].x_pos &&
        collectableData.x_pos <
          canyonsData[i % canyonsData.length].x_pos +
            canyonsData[i % canyonsData.length].width
      ) {
        continue;
      } else {
        break;
      }
    }
  }
}

function interactWithCanyons(canyonsData) {
  for (let i = 0; i < canyonsData.length; i++) {
    if (
      gameChar_x > canyonsData[i].x_pos &&
      gameChar_x < canyonsData[i].x_pos + canyonsData[i].width
    ) {
      if (gameChar_y >= floorPos_y) {
        isPlummeting = true;
        break;
      }
    }
  }
}

function checkFlagpole(flagpoleData) {
  // distance between flagpoleData.x_pos and gameChar_X
  if (abs(flagpoleData.x_pos - gameChar_x) < 25) {
    if (game_score >= 3) {
      flagpole.isReached = true;
    } else {
      displayFlagpoleWarning = true;
    }
  } else {
    if (displayFlagpoleWarning) {
      displayFlagpoleWarning = false;
    }
  }
}

function checkPlayerDie() {
  // check if character is at bottom of canvas
  if (gameChar_y >= height + 80) {
    lives -= 1;
    if (lives > 0) {
      startGame();
    }
  }
}

function startGame() {
  // INIT
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;
  cameraPosX = 0;
  groundWidth = 3000;
  game_score = 0;
  displayFlagpoleWarning = false;

  trees = [
    { x_pos: 300, y_pos: height / 2 },
    { x_pos: 550, y_pos: height / 2 },
    { x_pos: 920, y_pos: height / 2 },
    { x_pos: 1055, y_pos: height / 2 },
    { x_pos: 1512, y_pos: height / 2 },
    { x_pos: 1927, y_pos: height / 2 },
    { x_pos: 2289, y_pos: height / 2 },
  ];

  canyons = [
    {
      x_pos: 100,
      y_pos: floorPos_y,
      width: 100,
    },
    {
      x_pos: 1200,
      y_pos: floorPos_y,
      width: 150,
    },
    {
      x_pos: 2420,
      y_pos: floorPos_y,
      width: 200,
    },
  ];

  collectable = {
    y_pos: floorPos_y,
    x_pos: 60,
    size: 40,
  };

  mountains = [
    {
      x_pos: 700,
      y_pos: 200,
    },
    {
      x_pos: 1500,
      y_pos: 200,
    },
    {
      x_pos: 2950,
      y_pos: 200,
    },
  ];

  clouds = [
    {
      x_pos: 40,
      y_pos: 50,
      scale: 0.8,
      speed: "slow",
    },
    {
      x_pos: 550,
      y_pos: 150,
      scale: 1.8,
      speed: "mid",
    },
    {
      x_pos: 1300,
      y_pos: 120,
      scale: 0.8,
      speed: "slow",
    },
    {
      x_pos: 1700,
      y_pos: 150,
      scale: 1.5,
      speed: "fast",
    },
    {
      x_pos: 2200,
      y_pos: 0,
      scale: 2.7,
      speed: "mid",
    },
    {
      x_pos: 4000,
      y_pos: 150,
      scale: 1.5,
      speed: "fast",
    },
    {
      x_pos: 3200,
      y_pos: 60,
      scale: 0.8,
      speed: "slow",
    },
  ];

  flagpole = {
    x_pos: groundWidth - 250,
    isReached: false,
  };

  // Game Character Positions
  isLeft = false;
  isRight = false;
  isFalling = false;
  isPlummeting = false;
}
