var tamagotchi;

let example;

function setup() {
  createCanvas(500, 500);
  noStroke();

  example = createVector(10, 10);

  tamagotchi = {
    points: [],

    size: 200,

    setup: function () {
      let incr = (PI * 2) / 36;
      for (let i = 0; i < 36; i++) {
        let v = createVector(0, random(0.75, 1));
        v.rotate(incr * i);
        this.points.push(v);
      }
    },

    draw: function (eyeDirection) {
      fill(128, 0, 128);

      beginShape();
      for (let i = 0; i < this.points.length; i++) {
        let v = p5.Vector.mult(this.points[i], this.size);
        curveVertex(v.x, v.y);
      }
      endShape(CLOSE);

      // eye balls
      fill(255);
      ellipse(this.size * 0.1, 0, this.size * 0.1);
      ellipse(-this.size * 0.1, 0, this.size * 0.1);

      // eye pupils
      fill(0);
      let v = eyeDirection.mult(this.size * 0.02);
      ellipse(this.size * 0.1 + v.x, v.y, this.size * 0.05);
      ellipse(-this.size * 0.1 + v.x, v.y, this.size * 0.05);
    },

    grow: function () {
      this.size *= random(1, 1.005);
      this.size = min(220, this.size);

      let rot = random(-0.01, 0.01);
      for (let i = 0; i < this.points.length; i++) {
        this.points[i].rotate(rot);
      }
    },

    shrink: function () {
      this.size *= random(1, 0.9995);
      this.size = max(30, this.size);
    },
  };

  tamagotchi.setup();
}

function draw() {
  background(0, 0, 0);
  translate(width / 2, height / 2);

  let v = createVector(mouseX - width / 2, mouseY - height / 2);
  v.normalize();

  tamagotchi.draw(v);
  tamagotchi.shrink();
}

function mouseDragged() {
  tamagotchi.grow();
}
