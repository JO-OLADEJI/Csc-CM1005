function setup() {
  createCanvas(constants.WIDTH, constants.HEIGHT);

  for (let i = 0; i < enemiesData.length; i++) {
    enemies.push(
      new Enemy(
        enemiesData[i].x,
        enemiesData[i].y,
        enemiesData[i].speedX,
        enemiesData[i].speedY,
        enemiesData[i].size,
        enemiesData[i].range
      )
    );
  }

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
  collectables.draw();
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
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].draw();
    enemies[i].setInMotion();
    if (enemies[i].getCharacterProximity() <= enemies[i].size) {
      gameCharacter.lives -= 1;
      if (gameCharacter.lives > 0) {
        startGame();
      }
    }
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
        abs(
          gameCharacter.y -
            (constants.FLOOR_POS_Y - platforms.data[i].elevation)
        ) <= 1
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
  interactWithCollectables();
  interactWithCanyons();
  gameCharacter.checkFall(startGame);

  if (!flagpole.isReached) {
    flagpole.attemptCompleteGame();
  }

  fill(0);
  text(`(${mouseX}, ${mouseY})`, mouseX, mouseY);
}
