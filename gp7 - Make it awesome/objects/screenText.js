const screenText = {
  placeholder: "",

  displayFlagpoleWarning: function () {
    noStroke();
    fill(0);
    textSize(16);
    textFont("Monospace");
    this.placeholder = `${collectables.data.length} points needed`;
    text(
      this.placeholder,
      gameCharacter.x - textWidth(this.placeholder) / 2,
      constants.FLOOR_POS_Y - 120
    );
    this.placeholder = "to complete level";
    text(
      this.placeholder,
      gameCharacter.x - textWidth(this.placeholder) / 2,
      constants.FLOOR_POS_Y - 100
    );
  },

  displayGameStats: function () {
    push();
    fill(0);
    textSize(16);
    textFont("Monospace");
    text(`score - ${gameCharacter.score}`, constants.WIDTH - 130, 60);
    text(
      `lives - ${gameCharacter.lives < 0 ? 0 : gameCharacter.lives}`,
      constants.WIDTH - 130,
      40
    );
    pop();
  },

  displayGameOver: function () {
    fill(0, 0, 0, 50);
    noStroke();
    rect(0, 0, constants.WIDTH, constants.HEIGHT);
    textSize(40);
    textFont("Monospace");
    fill(255, 70, 70);
    this.placeholder = "Game over.";
    text(
      this.placeholder,
      constants.WIDTH / 2 - textWidth(this.placeholder) / 2,
      constants.HEIGHT / 2
    );
    this.placeholder = "Prese space to continue.";
    text(
      this.placeholder,
      constants.WIDTH / 2 - textWidth(this.placeholder) / 2,
      constants.HEIGHT / 2 + 50
    );
  },

  displayLevelComplete: function () {
    fill(0, 0, 0, 50);
    noStroke();
    rect(0, 0, constants.WIDTH, constants.HEIGHT);
    textSize(40);
    textFont("Monospace");
    fill(0);
    this.placeholder = "Level complete.";
    text(
      this.placeholder,
      constants.WIDTH / 2 - textWidth(this.placeholder) / 2,
      constants.HEIGHT / 2
    );
    this.placeholder = "Press space to continue.";
    text(
      this.placeholder,
      constants.WIDTH / 2 - textWidth(this.placeholder) / 2,
      constants.HEIGHT / 2 + 50
    );
  },
};
