const clouds = {
  data: [
    {
      x: 40,
      y: 50,
      scale: 0.8,
      speed: "slow",
    },
    {
      x: 550,
      y: 150,
      scale: 1.8,
      speed: "mid",
    },
    {
      x: 1300,
      y: 120,
      scale: 0.8,
      speed: "slow",
    },
    {
      x: 1700,
      y: 150,
      scale: 1.5,
      speed: "fast",
    },
    {
      x: 2200,
      y: 0,
      scale: 2.7,
      speed: "mid",
    },
    {
      x: 4000,
      y: 150,
      scale: 1.5,
      speed: "fast",
    },
    {
      x: 3200,
      y: 60,
      scale: 0.8,
      speed: "slow",
    },
  ],

  draw: function () {
    fill(255);
    for (let i = 0; i < this.data.length; i++) {
      rect(
        this.data[i].x + 43 * this.data[i].scale,
        this.data[i].y + 32 * this.data[i].scale,
        180 * this.data[i].scale,
        50 * this.data[i].scale,
        25 * this.data[i].scale
      );
      ellipse(
        this.data[i].x + 93 * this.data[i].scale,
        this.data[i].y + 35 * this.data[i].scale,
        60 * this.data[i].scale,
        60 * this.data[i].scale
      );
      ellipse(
        this.data[i].x + 140 * this.data[i].scale,
        this.data[i].y + 15 * this.data[i].scale,
        70 * this.data[i].scale,
        70 * this.data[i].scale
      );
      ellipse(
        this.data[i].x + 180 * this.data[i].scale,
        this.data[i].y + 35 * this.data[i].scale,
        60 * this.data[i].scale,
        60 * this.data[i].scale
      );
    }
  },
};
