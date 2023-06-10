/*

Officer: 5148740
CaseNum: 101-1-94478499-5148740

Case 101 - The Case of Anna Lovelace
Stage 2 - The Smalltalk Speakeasy

Well well, things have gotten interesting already ! No sooner does Anna step foot
in Console City than she heads straight for Smalltalk’s. Now be careful kid, that
place is a den of iniquity. Find out who she’s meeting and then get out as soon as
you can.

First identify Anna by drawing a rectangle with a Lime Green outline around her.
She’s the woman in the red dress of course.

That woman with the cigarette and the feathered hat looks very familiar. Let’s identify her too by drawing
a rectangle with a Dark Salmon outline around her. 

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

The rectangles should cover the targets as accurately as possible without
including anything else.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  stroke() - Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noFill();
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	stroke(50, 205, 50); // lime green
	rect(840, 115, 238, 490);

	stroke(233, 150, 122); // dark salmon
	rect(167, 195, 233, 412);


	//A helpful mouse pointer
	push();
		fill(0);
		// noStroke();
		stroke(255, 0, 0);
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();

}
