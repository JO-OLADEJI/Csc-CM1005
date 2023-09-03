let GAME_STATE;

function setup() {
  createCanvas(constants.WIDTH, constants.HEIGHT);
  startGame();
}

function draw() {
  background(100, 155, 255);
  noStroke();
  fill(0, 155, 0);
  rect(0, constants.FLOOR_POS_Y, width, height - constants.FLOOR_POS_Y);

  // scroll - start
  push();
  translate(-GAME_STATE.cameraPosX, 0);

  clouds.draw();
  mountains.draw();
  canyons.draw();
  trees.draw();
  flagpole.draw();
  collectable.draw();
  for (let i = 0; i < platforms.data.length; i++) {
    platforms.create(
      platforms.data[i].x,
      platforms.data[i].width,
      platforms.data[i].elevation
    );
  }

  if (
    GAME_STATE.characterMovement.isLeft &&
    GAME_STATE.characterMovement.isFalling
  ) {
    gameCharacter.jumpLeft();
  } else if (
    GAME_STATE.characterMovement.isRight &&
    GAME_STATE.characterMovement.isFalling
  ) {
    gameCharacter.jumpRight();
  } else if (GAME_STATE.characterMovement.isLeft) {
    gameCharacter.walkLeft();
  } else if (GAME_STATE.characterMovement.isRight) {
    gameCharacter.walkRight();
  } else if (
    GAME_STATE.characterMovement.isFalling ||
    GAME_STATE.characterMovement.isPlummeting
  ) {
    gameCharacter.jumpForward();
  } else {
    gameCharacter.stand();
  }

  if (flagpole.displayWarning) {
    screenText.displayFlagpoleWarning();
  }

  // scroll - end
  pop();

  screenText.displayGameStats();
  if (gameCharacter.lives < 1) {
    screenText.displayGameOver();
    return;
  } else if (flagpole.isReached) {
    screenText.displayLevelComplete();
    return;
  }

  // gravity
  if (gameCharacter.y < constants.FLOOR_POS_Y) {
    // detect platform
    for (let i = 0; i < platforms.data.length; i++) {
      if (
        gameCharacter.x > platforms.data[i].x &&
        gameCharacter.x < platforms.data[i].x + platforms.data[i].width &&
        gameCharacter.y == constants.FLOOR_POS_Y - platforms.data[i].elevation
      ) {
        GAME_STATE.characterMovement.isOnPlatform = true;
        break;
      } else if (i == platforms.data.length - 1) {
        GAME_STATE.characterMovement.isOnPlatform = false;
      }
    }
  }

  if (
    gameCharacter.y < constants.FLOOR_POS_Y &&
    GAME_STATE.characterMovement.isOnPlatform == false
  ) {
    gameCharacter.y += 1;
    GAME_STATE.characterMovement.isFalling = true;
  } else {
    GAME_STATE.characterMovement.isFalling = false;
  }

  if (GAME_STATE.characterMovement.isPlummeting) {
    gameCharacter.y += 5;
  }

  parallaxScrolling();
  interactWithCollectable();
  interactWithCanyons();
  gameCharacter.checkFall(startGame);

  if (!flagpole.isReached) {
    flagpole.attemptCompleteGame();
  }
}

// WORKING ✅
function parallaxScrolling() {
  if (GAME_STATE.characterMovement.isLeft) {
    gameCharacter.x = constrain(
      gameCharacter.x - 3,
      0 + 15,
      constants.GROUND_WIDTH - 15
    );

    // shift the camera only when Game Character is at the center
    if (
      gameCharacter.x >= constants.WIDTH / 2 &&
      gameCharacter.x < constants.GROUND_WIDTH - width / 2
    ) {
      GAME_STATE.cameraPosX = constrain(
        GAME_STATE.cameraPosX - 3,
        0,
        constants.GROUND_WIDTH - width
      );
      // cloud parallax
      for (let i = 0; i < clouds.data.length; i++) {
        if (clouds.data[i].speed == "slow") {
          clouds.data[i].x += 1;
        } else if (clouds.data[i].speed == "mid") {
          clouds.data[i].x += 2;
        } else if (clouds.data[i].speed == "fast") {
          clouds.data[i].x += 3;
        }
      }
      // mountains parallax
      for (let i = 0; i < mountains.data.length; i++) {
        mountains.data[i].x += 0.2;
      }
    }
  } else if (GAME_STATE.characterMovement.isRight) {
    gameCharacter.x = constrain(
      gameCharacter.x + 3,
      0 + 15,
      constants.GROUND_WIDTH - 15
    );

    // shift the camera only when Game Character is at the center
    if (
      gameCharacter.x >= width / 2 &&
      gameCharacter.x < constants.GROUND_WIDTH - width / 2
    ) {
      GAME_STATE.cameraPosX = constrain(
        GAME_STATE.cameraPosX + 3,
        0,
        constants.GROUND_WIDTH - width
      );
      // cloud parallax
      for (let i = 0; i < clouds.data.length; i++) {
        if (clouds.data[i].speed == "slow") {
          clouds.data[i].x -= 1;
        } else if (clouds.data[i].speed == "mid") {
          clouds.data[i].x -= 2;
        } else if (clouds.data[i].speed == "fast") {
          clouds.data[i].x -= 3.5;
        }
      }
      // mountains parallax
      for (let i = 0; i < mountains.data.length; i++) {
        mountains.data[i].x -= 0.2;
      }
    }
  }
}

// WORKING ✅
function interactWithCollectable() {
  const proximity = collectable.getGameCharacterDistance();

  if (proximity <= collectable.size - 5) {
    gameCharacter.score += 1;

    // make a new collectible item when the current one is found
    for (let i = 0; i < canyons.data.length * 3; i++) {
      // RULE 1 - collectible must be in the viewable portion of the screen
      collectable.x = random(
        GAME_STATE.cameraPosX + collectable.size / 2,
        GAME_STATE.cameraPosX + width - collectable.size / 2
      );
      // RULE 2 - collectible must not be above a canyon
      if (
        collectable.x > canyons.data[i % canyons.data.length].x_pos &&
        collectable.x <
          canyons.data[i % canyons.data.length].x_pos +
            canyons.data[i % canyons.data.length].width
      ) {
        continue;
      } else {
        break;
      }
    }
  }
}

// WORKING ✅
function interactWithCanyons() {
  for (let i = 0; i < canyons.data.length; i++) {
    if (
      gameCharacter.x > canyons.data[i].x &&
      gameCharacter.x < canyons.data[i].x + canyons.data[i].width
    ) {
      if (gameCharacter.y >= constants.FLOOR_POS_Y) {
        GAME_STATE.characterMovement.isPlummeting = true;
        break;
      }
    }
  }
}

// WORKING ✅
function keyPressed() {
  // when `A` of left-arrow is pressed
  if (
    (keyCode == 65 || keyCode == 37) &&
    !GAME_STATE.characterMovement.isPlummeting
  ) {
    GAME_STATE.characterMovement.isLeft = true;
  }

  // when `D` or right-arrow is pressed
  if (
    (keyCode == 68 || keyCode == 39) &&
    !GAME_STATE.characterMovement.isPlummeting
  ) {
    GAME_STATE.characterMovement.isRight = true;
  }

  // when `W` or top-arrow is pressed
  if (
    (keyCode == 87 || keyCode == 38) &&
    !GAME_STATE.characterMovement.isFalling &&
    !GAME_STATE.characterMovement.isPlummeting &&
    !flagpole.isReached
  ) {
    gameCharacter.y -= 120;
  }
}

// WORKING ✅
function keyReleased() {
  // when `A` or left-arrow is released
  if (keyCode == 65 || keyCode == 37) {
    GAME_STATE.characterMovement.isLeft = false;
  }

  // when `D` or right-arrow is released
  if (keyCode == 68 || keyCode == 39) {
    GAME_STATE.characterMovement.isRight = false;
  }
}

// WORKING ✅
function startGame() {
  GAME_STATE = {
    cameraPosX: 0,
    characterMovement: {
      isLeft: false,
      isRight: false,
      isFalling: false,
      isPlummeting: false,
      isOnPlatform: false,
    },
  };
  gameCharacter.init();
}
