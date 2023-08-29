/*
Officer: 5148740
CaseNum: 601-0-15501473-5148740

Case 601 - Escaped - stage 1

We've got an emergency here. The notorious killer Casey Fry has escaped from the Federal Correctional Institution.
She is on the loose and we have been asked to track her movements.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Turquoise fill ellipses at each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- ellipse()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

//Sightings of Casey Fry.

var fry_logbook = [
  { location_x: 127, location_y: 175 },
  { location_x: 156, location_y: 158 },
  { location_x: 179, location_y: 192 },
  { location_x: 200, location_y: 154 },
  { location_x: 220, location_y: 133 },
  { location_x: 228, location_y: 168 },
  { location_x: 249, location_y: 149 },
  { location_x: 269, location_y: 139 },
  { location_x: 292, location_y: 168 },
  { location_x: 321, location_y: 133 },
  { location_x: 354, location_y: 159 },
  { location_x: 390, location_y: 144 },
  { location_x: 396, location_y: 225 },
  { location_x: 429, location_y: 228 },
  { location_x: 456, location_y: 230 },
  { location_x: 467, location_y: 277 },
  { location_x: 483, location_y: 267 },
  { location_x: 531, location_y: 291 },
  { location_x: 547, location_y: 278 },
  { location_x: 571, location_y: 274 },
  { location_x: 589, location_y: 318 },
  { location_x: 637, location_y: 280 },
];

function preload() {
  countyMap = loadImage("map.png");
}

function setup() {
  createCanvas(countyMap.width, countyMap.height);
  noFill();
  noStroke();

  image(countyMap, 0, 0);

  //add your code below here
  fill(64, 224, 208);
  for (let i = 0; i < fry_logbook.length; i++) {
    ellipse(fry_logbook[i].location_x, fry_logbook[i].location_y, 7);
  }
}

//We are not using the draw function this time
