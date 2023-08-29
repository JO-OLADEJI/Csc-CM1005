/*

Officer: 5148740
CaseNum: 403-2-78403817-5148740

Case 403 - Cornered - stage 3

We have Shiffman cornered at Central Station and more help is on the way.
Until our backup arrives the orders are to make sure he stays inside Central Station

Your job is to indicate that Shiffman (signified by the mouse) is indeed within the North - East - South - West bounds of Central Station.
Draw a Chocolate rectangle covering Central Station for as long as Shiffman is in it.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you should use ONLY the following commands, operators and variables:

  if(){}
  >
  <
  &&
  fill()  - Use r,g,b values between 0 and 255.
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
  // 454 546
  // 572 633
  if (mouseX > 454 && mouseX < 572 && mouseY > 546 && mouseY < 633) {
    fill(210,105,30);
    rect(454, 546, 572 - 454, 633 - 546);
  }

  // finally, draw Shiffman's position
  strokeWeight(2);
  stroke(255);
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 10, 10);

  // a helpful mouse coordinate pointer
  // fill(255);
  fill(255, 0, 0);
  noStroke();
  text(`${mouseX},${mouseY}`, mouseX, mouseY);
}
