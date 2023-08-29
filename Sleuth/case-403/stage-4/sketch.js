/*

Officer: 5148740
CaseNum: 403-3-25697201-5148740

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Leodorf Way.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 74 meters from Jerry's Wine Bar then alert local police by drawing a DarkBlue circle around it with a radius of 74 pixels.
- if Shiffman is in City Narrows then the neighbourhood watch must be notified by drawing a RoyalBlue rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a YellowGreen rectangle covering the area between Berners-Lee Street, Gates Avenue, Leodorf Way and Huffman Street.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  else
  fill()  - Use r,g,b values between 0 and 255.
  dist()
  ellipse()
  rect()
  mouseX
  mouseY

*/

var img;

function preload() {
  img = loadImage("map.jpg");
}

function setup() {
  createCanvas(img.width, img.height);
}

function draw() {
  // draw the image
  image(img, 0, 0);

  //Write your code below here ...
  // 2245 855
  if (dist(2245, 855, mouseX, mouseY) < 74) {
    fill(0,0,139);
    ellipse(2245, 855, 74 * 2);
  } else if (mouseX > 2236 && mouseX < 2370 && mouseY > 165 && mouseY < 292) {
    fill(65,105,225);
    rect(2236, 165, 2370 - 2236, 292 - 165);
  } else {
    fill(154,205,50);
    // 1264, 774
    rect(145, 130, 1261 - 145, 775 - 130);
  }

  // finally, draw Shiffman's position
  strokeWeight(2);
  stroke(255);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);

  // a helpful mouse coordinate pointer
  fill(255, 0, 0);
  noStroke();
  text(`${mouseX},${mouseY}`, mouseX, mouseY);
}
