function Particle(x, y, speedX, speedY, radius, color, lifetime) {
  this.position = createVector(x, y);
  this.speeed = createVector(speedX, speedY);
  this.radius = radius;
  this.age = 0;
  this.lifetime = lifetime;

  this.update = function () {
    this.position.add(this.speeed);
    this.age++;
  };

  this.draw = function () {
    noStroke();
    fill(color);
    ellipse(this.position.x, this.position.y, radius);
  };
}

function Emitter(x, y, startParticles, averageParticleLifetime) {
  this.x = x;
  this.y = y;
  this.startParticles = startParticles;
  this.averageParticleLifetime = averageParticleLifetime;
  this.particles = [];

  this.createParticle = function () {
    let randomParticle = p5.Vector.random2D();
    let randomSpeed = p5.Vector.random2D().mult(2);

    return new Particle(
      randomParticle.x,
      randomParticle.y,
      randomSpeed.x * random(),
      randomSpeed.y * random(),
      random(3, 10),
      color([random(0, 255), random(0, 255), random(0, 255)]),
      random(0, this.averageParticleLifetime * 2)
    );
  };

  this.createParticles = function () {
    for (let i = 0; i < this.startParticles; i++) {
      this.particles.push(this.createParticle());
    }
  };

  this.emit = function () {
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
      this.particles[i].draw();
    }
  };

  this.refresh = function () {
    // remove particles with elapsed lifetime
    let agedParticles = 0;
    for (let i = this.particles.length - 1; i >= 0; i--) {
      if (this.particles[i].age >= this.particles[i].lifetime) {
        this.particles.splice(i, 1);
        agedParticles++;
      }
    }

    // replace the dead particles with new ones
    for (let i = 0; i < agedParticles; i++) {
      let randomParticle = p5.Vector.random2D();
      let randomSpeed = p5.Vector.random2D();
      this.particles.push(this.createParticle());
    }
  };
}

let emitter;
function setup() {
  createCanvas(800, 800);

  emitter = new Emitter(0, 0, 500, 300);
  emitter.createParticles();
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  emitter.emit();
  emitter.refresh();
}
