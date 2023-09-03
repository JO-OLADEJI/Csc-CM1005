const mountains = {
  data: [
    {
      x: 700,
      y: 200,
    },
    {
      x: 1500,
      y: 200,
    },
    {
      x: 2950,
      y: 200,
    },
  ],

  draw: function () {
    for (let i = 0; i < this.data.length; i++) {
      fill(133, 136, 148);
      triangle(
        this.data[i].x,
        this.data[i].y + 232,
        this.data[i].x + 103,
        this.data[i].y + 52,
        this.data[i].x + 225,
        this.data[i].y + 232
      );
      fill(74, 83, 98);
      triangle(
        this.data[i].x + 175,
        this.data[i].y + 232,
        this.data[i].x + 250,
        this.data[i].y + 140,
        this.data[i].x + 302,
        this.data[i].y + 232
      );
      fill(183, 191, 203);
      triangle(
        this.data[i].x + 25,
        this.data[i].y + 232,
        this.data[i].x + 150,
        this.data[i].y + 12,
        this.data[i].x + 275,
        this.data[i].y + 232
      );
    }
  },
};
