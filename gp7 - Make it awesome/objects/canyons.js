const canyons = {
  data: [
    {
      x: 100,
      y: constants.FLOOR_POS_Y,
      width: 300,
    },
    {
      x: 1200,
      y: constants.FLOOR_POS_Y,
      width: 150,
    },
    {
      x: 2250,
      y: constants.FLOOR_POS_Y,
      width: 450,
    },
  ],

  draw: function () {
    noStroke();
    for (let i = 0; i < this.data.length; i++) {
      fill(116, 75, 41);
      rect(
        this.data[i].x - 5,
        this.data[i].y,
        this.data[i].width + 10,
        constants.HEIGHT - constants.FLOOR_POS_Y
      );
      fill(100, 155, 255);
      rect(
        this.data[i].x,
        this.data[i].y,
        this.data[i].width,
        constants.HEIGHT - constants.FLOOR_POS_Y
      );
    }
  },
};
