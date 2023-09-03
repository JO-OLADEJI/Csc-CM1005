const flagpole = {
  x: constants.GROUND_WIDTH - 250,
  isReached: false,
  displayWarning: false,

  draw: function () {
    fill(0, 0, 0, gameCharacter.score < collectables.data.length ? 70 : 255);
    rect(
      this.x,
      constants.HEIGHT / 2,
      5,
      constants.FLOOR_POS_Y - constants.HEIGHT / 2
    );
    fill(
      246,
      124,
      49,
      gameCharacter.score < collectables.data.length ? 80 : 255
    );
    noStroke();

    if (this.isReached) {
      triangle(
        this.x,
        constants.HEIGHT / 2,
        this.x + 50,
        constants.HEIGHT / 2 + 15,
        this.x,
        constants.HEIGHT / 2 + 30
      );
    } else {
      triangle(
        this.x,
        constants.FLOOR_POS_Y - 30,
        this.x + 50,
        constants.FLOOR_POS_Y - 15,
        this.x,
        constants.FLOOR_POS_Y
      );
    }
  },

  attemptCompleteGame: function () {
    if (Math.abs(this.x - gameCharacter.x) < 25) {
      if (gameCharacter.score == collectables.data.length) {
        this.isReached = true;
      } else {
        this.displayWarning = true;
      }
    } else {
      if (this.displayWarning) {
        this.displayWarning = false;
      }
    }
  },
};
