const platforms = {
  data: [
    { x: 200, width: 100, elevation: 70 },
    { x: 800, width: 100, elevation: 85 },
    { x: 680, width: 40, elevation: 160 },
    { x: 1300, width: 150, elevation: 50 },
    { x: 1550, width: 50, elevation: 125 },
    { x: 1700, width: 70, elevation: 200 },
    { x: 1900, width: 30, elevation: 175 },
    { x: 2370, width: 25, elevation: 30 },
    { x: 2580, width: 50, elevation: 80 },
  ],

  create: function (xPos, platformWidth, platformElevation) {
    noStroke();
    fill(74, 83, 98);
    rect(
      xPos + 4,
      constants.FLOOR_POS_Y - platformElevation + 4,
      platformWidth,
      10
    );
    fill(235);
    rect(xPos, constants.FLOOR_POS_Y - platformElevation, platformWidth, 10);
  },
};
