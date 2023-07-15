/*

The Game Project 4

Side Scrolling

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
var trees_x;
var treePos_y;
var collectableAndCharacterDst;

var cameraPosX;
var groundWidth;

function setup() {
  // canvas size
  createCanvas(1024, 576);

  // INIT
  floorPos_y = (height * 3) / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;
  treePos_y = height / 2;
  trees_x = [300, 550, 920, 1055, 1512, 1927, 2289, 2700, 2850];
  cameraPosX = 0;
  groundWidth = 3000;

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
      x_pos: 2800,
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

  // Game Character Positions
  isLeft = false;
  isRight = false;
  isFalling = false;
  isPlummeting = false;
}

function draw() {
  // blue sky
  background(100, 155, 255);

  // green ground
  noStroke();
  fill(0, 155, 0);
  rect(0, floorPos_y, width, height - floorPos_y);

  // Side Scrolling
  push();
  translate(-cameraPosX, 0);

  // CLOUDS
  fill(255);
  for (let i = 0; i < clouds.length; i++) {
    rect(
      clouds[i].x_pos + 43 * clouds[i].scale,
      clouds[i].y_pos + 32 * clouds[i].scale,
      180 * clouds[i].scale,
      50 * clouds[i].scale,
      25 * clouds[i].scale
    );
    // ellipse(193, 85, 60, 60);
    ellipse(
      clouds[i].x_pos + 93 * clouds[i].scale,
      clouds[i].y_pos + 35 * clouds[i].scale,
      60 * clouds[i].scale,
      60 * clouds[i].scale
    );
    ellipse(
      clouds[i].x_pos + 140 * clouds[i].scale,
      clouds[i].y_pos + 15 * clouds[i].scale,
      70 * clouds[i].scale,
      70 * clouds[i].scale
    );
    ellipse(
      clouds[i].x_pos + 180 * clouds[i].scale,
      clouds[i].y_pos + 35 * clouds[i].scale,
      60 * clouds[i].scale,
      60 * clouds[i].scale
    );
  }

  // MOUNTAIN
  for (let i = 0; i < mountains.length; i++) {
    fill(133, 136, 148);
    triangle(
      mountains[i].x_pos,
      mountains[i].y_pos + 232,
      mountains[i].x_pos + 103,
      mountains[i].y_pos + 52,
      mountains[i].x_pos + 225,
      mountains[i].y_pos + 232
    );
    fill(74, 83, 98);
    triangle(
      mountains[i].x_pos + 175,
      mountains[i].y_pos + 232,
      mountains[i].x_pos + 250,
      mountains[i].y_pos + 140,
      mountains[i].x_pos + 302,
      mountains[i].y_pos + 232
    );
    fill(183, 191, 203);
    triangle(
      mountains[i].x_pos + 25,
      mountains[i].y_pos + 232,
      mountains[i].x_pos + 150,
      mountains[i].y_pos + 12,
      mountains[i].x_pos + 275,
      mountains[i].y_pos + 232
    );
  }

  // CANYON
  noStroke();
  for (let i = 0; i < canyons.length; i++) {
    fill(116, 75, 41);
    rect(
      canyons[i].x_pos - 5,
      canyons[i].y_pos,
      canyons[i].width + 10,
      height - floorPos_y
    );
    fill(100, 155, 255);
    rect(
      canyons[i].x_pos,
      canyons[i].y_pos,
      canyons[i].width,
      height - floorPos_y
    );
  }

  // TREES 1 (positioned behind the game character)
  for (let i = 0; i < trees_x.length; i++) {
    if (i % 2 == 0) {
      fill(116, 75, 41);
      rect(trees_x[i], treePos_y + 84, 30, 60); // stem
      fill(62, 120, 79); // green shade 1
      triangle(
        trees_x[i] - 20,
        372,
        trees_x[i] + 15,
        266,
        trees_x[i] + 50,
        372
      );
      fill(101, 156, 129); // green shade 2
      triangle(
        trees_x[i] - 20,
        372,
        trees_x[i] + 10,
        281,
        trees_x[i] + 40,
        372
      );
    }
  }

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

  // TREES 2 (positioned in front of the game character)
  noStroke();
  for (let i = 0; i < trees_x.length; i++) {
    if (i % 2 != 0) {
      fill(116, 75, 41);
      rect(trees_x[i], treePos_y + 84, 30, 60); // stem
      fill(62, 120, 79); // green shade 1
      triangle(
        trees_x[i] - 20,
        372,
        trees_x[i] + 15,
        266,
        trees_x[i] + 50,
        372
      );
      fill(101, 156, 129); // green shade 2
      triangle(
        trees_x[i] - 20,
        372,
        trees_x[i] + 10,
        281,
        trees_x[i] + 40,
        372
      );
    }
  }

  // COLLECTABLE
  fill(255, 215, 0);
  ellipse(
    collectable.x_pos - collectable.size / 2,
    collectable.y_pos - collectable.size / 2,
    collectable.size,
    collectable.size
  );

  // Side Scrolling
  pop();

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
  collectableAndCharacterDst = dist(
    collectable.x_pos - collectable.size / 2,
    collectable.y_pos - collectable.size / 2,
    gameChar_x,
    gameChar_y
  );
  if (collectableAndCharacterDst <= collectable.size) {
    // make a new collectible item when the current one is found
    // TRY 3 TIMES TO GET THE RULES RIGHT -> `canyons.length * 3`
    for (let i = 0; i < canyons.length * 3; i++) {
      // RULE 1 - collectible must be in the viewable portion of the screen
      collectable.x_pos = random(
        cameraPosX + collectable.size / 2,
        cameraPosX + width - collectable.size / 2
      );
      // RULE 2 - collectible must not be above a canyon
      if (
        collectable.x_pos > canyons[i % canyons.length].x_pos &&
        collectable.x_pos <
          canyons[i % canyons.length].x_pos + canyons[i % canyons.length].width
      ) {
        continue;
      } else {
        break;
      }
    }
  }

  // falling into the canyon
  for (let i = 0; i < canyons.length; i++) {
    if (
      gameChar_x > canyons[i].x_pos &&
      gameChar_x < canyons[i].x_pos + canyons[i].width
    ) {
      if (gameChar_y >= floorPos_y) {
        isPlummeting = true;
        break;
      }
    }
  }
}

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
  if ((keyCode == 87 || keyCode == 38) && !isFalling && !isPlummeting) {
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
