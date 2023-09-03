const trees = {
  data: [
    { x: 550, y: constants.HEIGHT / 2 },
    { x: 920, y: constants.HEIGHT / 2 },
    { x: 1055, y: constants.HEIGHT / 2 },
    { x: 1512, y: constants.HEIGHT / 2 },
    { x: 1927, y: constants.HEIGHT / 2 },
    { x: 2189, y: constants.HEIGHT / 2 },
  ],

  draw: function () {
    for (let i = 0; i < this.data.length; i++) {
      // stem
      fill(116, 75, 41);
      rect(this.data[i].x, this.data[i].y + 84, 30, 60);

      // shade 1
      fill(62, 120, 79);
      triangle(
        this.data[i].x - 20,
        372,
        this.data[i].x + 15,
        266,
        this.data[i].x + 50,
        372
      );

      // shade 2
      fill(101, 156, 129);
      triangle(
        this.data[i].x - 20,
        372,
        this.data[i].x + 10,
        281,
        this.data[i].x + 40,
        372
      );
    }
  },
};
