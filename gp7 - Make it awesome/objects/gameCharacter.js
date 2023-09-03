const gameCharacter = {
  x: 0,
  y: 0,
  score: 0,
  lives: 3,

  init: function () {
    this.x = constants.WIDTH / 2;
    this.y = constants.FLOOR_POS_Y;
  },

  checkFall: function (restart) {
    if (this.y >= constants.HEIGHT + 80) {
      this.lives -= 1;
      if (this.lives > 0) {
        restart();
      }
    }
  },

  stand: function () {
    stroke(0);
    strokeWeight(2);
    fill(255);
    ellipse(this.x, this.y - 55, 25, 25);
    rect(this.x - 13, this.y - 39, 4, 20);
    rect(this.x + 9, this.y - 39, 4, 20);
    rect(this.x - 10, this.y - 42, 20, 20);
    rect(this.x - 7, this.y - 22, 5, 20);
    rect(this.x + 2, this.y - 22, 5, 20);
    fill(0);
    ellipse(this.x, this.y - 55, 6, 6);
  },

  walkRight: function () {
    fill(255);
    stroke(0);
    strokeWeight(2);
    ellipse(this.x, this.y - 55, 25, 25);
    rect(this.x - 4, this.y - 25, 5, 20);
    rect(this.x - 2, this.y - 22, 5, 20);
    rect(this.x - 5, this.y - 42, 10, 20);
    rect(this.x - 2, this.y - 39, 4, 20);
    fill(0);
    ellipse(this.x + 10, this.y - 55, 6, 6);
    strokeWeight(1);
  },

  walkLeft: function () {
    fill(255);
    stroke(0);
    strokeWeight(2);
    ellipse(this.x, this.y - 55, 25, 25);
    rect(this.x - 2, this.y - 25, 5, 20);
    rect(this.x - 4, this.y - 22, 5, 20);
    rect(this.x - 5, this.y - 42, 10, 20);
    rect(this.x - 2, this.y - 39, 4, 20);
    fill(0);
    ellipse(this.x - 10, this.y - 55, 6, 6);
    strokeWeight(1);
  },

  jumpForward: function () {
    stroke(0);
    strokeWeight(2);
    fill(255);
    ellipse(this.x, this.y - 55, 25, 25);
    noFill();
    strokeWeight(4);
    beginShape();
    vertex(this.x - 4, this.y - 22);
    vertex(this.x - 7, this.y - 17);
    vertex(this.x - 4, this.y - 10);
    endShape();
    beginShape();
    vertex(this.x + 4, this.y - 22);
    vertex(this.x + 7, this.y - 17);
    vertex(this.x + 4, this.y - 10);
    endShape();
    strokeWeight(2);
    fill(255);
    rect(this.x - 13, this.y - 39, 4, 20);
    rect(this.x + 9, this.y - 39, 4, 20);
    rect(this.x - 10, this.y - 42, 20, 20);
    fill(0);
    ellipse(this.x, this.y - 53, 6, 6);
    strokeWeight(1);
  },

  jumpRight: function () {
    fill(255);
    stroke(0);
    strokeWeight(2);
    ellipse(this.x, this.y - 55, 25, 25);
    noFill();
    strokeWeight(4);
    beginShape();
    vertex(this.x - 1, this.y - 22);
    vertex(this.x + 2, this.y - 17);
    vertex(this.x - 3, this.y - 10);
    endShape();
    fill(255);
    strokeWeight(2);
    rect(this.x - 5, this.y - 42, 10, 20);
    rect(this.x - 2, this.y - 39, 4, 20);
    fill(0);
    ellipse(this.x + 10, this.y - 55, 6, 6);
    strokeWeight(1);
  },

  jumpLeft: function () {
    fill(255);
    stroke(0);
    strokeWeight(2);
    ellipse(this.x, this.y - 55, 25, 25);
    noFill();
    strokeWeight(4);
    beginShape();
    vertex(this.x - 1, this.y - 22);
    vertex(this.x - 3, this.y - 17);
    vertex(this.x, this.y - 10);
    endShape();
    fill(255);
    strokeWeight(2);
    rect(this.x - 5, this.y - 42, 10, 20);
    rect(this.x - 2, this.y - 39, 4, 20);
    fill(0);
    ellipse(this.x - 10, this.y - 55, 6, 6);
    strokeWeight(1);
  },
};
