let floorPosY;
let colors;
let windows;

function setup() {
  createCanvas(1080, 600);

  floorPosY = (height * 5) / 6;
  colors = {
    lightsOn: "white",
    lightsOff: "black",
  };
  windows = [
    {
      xCoord: 275,
      yCoord: 325,
      width: 150,
      height: 85,
      color: colors.lightsOff,
    },
    {
      xCoord: 655,
      yCoord: 325,
      width: 150,
      height: 85,
      color: colors.lightsOff,
    },
  ];
}

function draw() {
  noStroke();
  // blue sky
  background(100, 155, 255);
  // ground
  fill(82, 58, 82);
  rect(0, floorPosY, width, height);

  // building
  fill(251, 239, 212);
  rect(200, 250, 680, 245); // structure
  fill(178, 49, 32);
  triangle(180, 245, 540, 145, 900, 245); // roof
  fill(0);
  rect(180, 245, 720, 5); // facing board
  fill(178, 49, 32);
  rectMode(CENTER);
  rect(540, floorPosY - 90, 90, 170); // door
  rectMode(CORNER);

  // windows
  for (let i = 0; i < windows.length; i++) {
    fill(windows[i].color);
    rect(
      windows[i].xCoord,
      windows[i].yCoord,
      windows[i].width,
      windows[i].height
    );
  }
}

function mousePressed() {
  let x, y, width, height;
  for (let i = 0; i < windows.length; i++) {
    ({ xCoord: x, yCoord: y, width, height } = windows[i]);
    if (
      mouseX >= x &&
      mouseX < x + width &&
      mouseY >= y &&
      mouseY < y + height
    ) {
      lightSwitch(i);
    }
  }
}

function lightSwitch(windowIndex) {
  if (windowIndex >= windows.length) {
    return;
  }

  if (windows[windowIndex].color == colors.lightsOff) {
    windows[windowIndex].color = colors.lightsOn;
  } else if (windows[windowIndex].color == colors.lightsOn) {
    windows[windowIndex].color = colors.lightsOff;
  }
}
