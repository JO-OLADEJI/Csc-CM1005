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
