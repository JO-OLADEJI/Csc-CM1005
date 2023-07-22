var flowers;
var flower;

function setup() {
  createCanvas(1000, 500);
  base_x = width / 2;
  base_y = height - 50;

  flowers = [];

  flower = {
    base_x: 0,
    base_y: height - 50,
    stem_h: 100,
    col: color(255, 50, 50),
  };

  for (var i = 0; i < 10; i++) {
    let newFlower = {};
    newFlower.base_x = i * 100;
    newFlower.base_y = flower.base_y;
    newFlower.stem_h = random(50, 400);
    newFlower.col = color(random(0, 255), random(0, 255), random(0, 255));
    flowers.push(newFlower);
  }
  console.log(flowers);
}

function draw() {
  background(150, 150, 250);
  for (var i = 0; i < flowers.length; i++) {
    drawFlower(flowers[i]);
  }
}

function drawFlower(_flower) {
  noFill();
  strokeWeight(10);
  stroke(0, 200, 50);
  curve(
    _flower.base_x + 200,
    _flower.base_y + 100,
    _flower.base_x,
    _flower.base_y,
    _flower.base_x,
    _flower.base_y - _flower.stem_h,
    _flower.base_x - 200,
    _flower.base_y - (_flower.stem_h + 100)
  );

  noStroke();
  fill(_flower.col);
  ellipse(_flower.base_x + 45, _flower.base_y - _flower.stem_h, 70, 50);
  ellipse(_flower.base_x - 45, _flower.base_y - _flower.stem_h, 70, 50);
  ellipse(_flower.base_x, _flower.base_y + 45 - _flower.stem_h, 50, 70);
  ellipse(_flower.base_x, _flower.base_y - 45 - _flower.stem_h, 50, 70);

  //draw the center
  fill(color(blue(_flower.col), red(_flower.col), green(_flower.col)));
  ellipse(_flower.base_x, _flower.base_y - _flower.stem_h, 50, 50);
}
