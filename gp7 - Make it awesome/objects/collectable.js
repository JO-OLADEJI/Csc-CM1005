const collectables = {
  data: [
    { x: 60, y: constants.FLOOR_POS_Y, size: 40, isFound: false },
    { x: 592, y: 152, size: 40, isFound: false },
    { x: 1000, y: 230, size: 40, isFound: false },
    { x: 1400, y: 230, size: 40, isFound: false },
    { x: 1735, y: constants.FLOOR_POS_Y, size: 40, isFound: false },
    { x: 2050, y: 157, size: 40, isFound: false },
    { x: 2900, y: constants.FLOOR_POS_Y - 100, size: 40, isFound: false },
  ],

  draw: function () {
    for (let i = 0; i < this.data.length; i++) {
      if (!this.data[i].isFound) {
        strokeWeight(2);
        stroke(0);
        fill(255, 215, 0);
        ellipse(
          this.data[i].x - this.data[i].size / 2,
          this.data[i].y - this.data[i].size / 2,
          this.data[i].size,
          this.data[i].size
        );
      }
    }
  },
};
