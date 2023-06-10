/*

Officer: 5148740
CaseNum: 101-2-63409384-5148740

Case 101 - The Case of Anna Lovelace
Stage 3 - The Docks

You’ve followed Anna down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Anna by drawing a Medium Purple filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Yellow Green filled
rectangle around him.

Identify the man in the striped top by drawing a Brown filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noStroke();
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
	fill(147, 112, 219, 100); // medium purple (anna)
	rect(95, 245, 215, 430);
	
	fill(154, 205, 50, 100); // yellow-green (heavy-set man)
	rect(652, 322, 363, 387);
	
	fill(165, 42, 42, 100); // brown (stripped top)
	rect(961, 175, 60, 152);


	//A helpful mouse pointer
	push();
		fill(0);
		// noStroke();
		stroke(255, 0, 0);
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();

}
