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

function interactWithCollectables() {
  for (let i = 0; i < collectables.data.length; i++) {
    if (
      dist(
        gameCharacter.x,
        gameCharacter.y,
        collectables.data[i].x,
        collectables.data[i].y
      ) <=
        collectables.data[i].size - 5 &&
      collectables.data[i].isFound == false
    ) {
      collectables.data[i].isFound = true;
      gameCharacter.score += 1;
      collectableSound.play();
    }
  }
}

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
