const collectable = {
  x: 60,
  y: constants.FLOOR_POS_Y,
  size: 40,

  draw: function () {
    strokeWeight(2);
    stroke(0);
    fill(255, 215, 0);
    ellipse(
      this.x - this.size / 2,
      this.y - this.size / 2,
      this.size,
      this.size
    );
  },

  getGameCharacterDistance: function () {
    return Math.sqrt(
      (this.x - this.size / 2 - gameCharacter.x) ** 2 +
        (this.y - this.size / 2 - gameCharacter.y) ** 2
    );
  },
};
