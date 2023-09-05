function Enemy(x, y, speedX, speedY, size, range) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.speedX = speedX;
  this.speedY = speedY;
  this.range = range;
  this.currentX = x;
  this.currentY = y;

  this.draw = function () {
    fill(255, 0, 0);
    ellipse(this.currentX, this.currentY, this.size);
  };

  this.setInMotion = function () {
    this.currentX += this.speedX;
    this.currentY += this.speedY;

    if (this.currentX >= this.x + this.range || this.currentX <= this.x) {
      this.speedX = -1 * this.speedX;
    }
    if (this.currentY >= this.y + this.range || this.currentY <= this.y) {
      this.speedY = -1 * this.speedY;
    }
  };

  this.getCharacterProximity = function () {
    return dist(this.currentX, this.currentY, gameCharacter.x, gameCharacter.y);
  };
}

const enemiesData = [
  {
    x: 600,
    y: constants.FLOOR_POS_Y - 15,
    speedX: 1.5,
    speedY: 0,
    size: 30,
    range: 150,
  },
  {
    x: 1250,
    y: constants.FLOOR_POS_Y - 120,
    speedX: 0,
    speedY: 1.5,
    size: 20,
    range: 100,
  },
  {
    x: 1590,
    y: constants.FLOOR_POS_Y - 230,
    speedX: 2,
    speedY: 2,
    size: 35,
    range: 170,
  },
  {
    x: 1900,
    y: constants.FLOOR_POS_Y - 25,
    speedX: 1.5,
    speedY: 0,
    size: 50,
    range: 250,
  },
  {
    x: 2500,
    y: constants.FLOOR_POS_Y - 200,
    speedX: 0,
    speedY: 3.5,
    size: 20,
    range: 200,
  },
];

const enemies = [];
