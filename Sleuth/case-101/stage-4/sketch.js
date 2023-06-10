/*

Officer: 5148740
CaseNum: 101-3-32020081-5148740

Case 101 - The Case of Anna Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Anna’s style. Now’s our chance to find out the root of all
of this. Lets see who is Anna meeting.

Identify Anna by drawing a Dodger Blue filled rectangle with a Navy outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Dark Violet filled
rectangle with a Olive Drab outline around him.

Identify the man reading the newspaper by drawing a Dark Red filled rectangle
with a Tomato outline around him.

Identify the woman with the dog by drawing a Lawn Green filled rectangle with a
Cyan outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
  stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
	image(img,0,0);
	strokeWeight(2);

	// Write your code below here ...
	fill(30, 144, 255, 100); // dodger blue (anna)
	stroke(0, 0, 128); // navy
	rect(80 , 177, 212, 433);
	
	fill(148, 0, 211, 100); // dark violet (monocle & cigar)
	stroke(107, 142, 35); // olive drab
	rect(478, 265, 93, 124);
	
	fill(139, 0, 0, 100); // dark red (reading newspaper)
	stroke(255, 99, 71); // tomato
	rect(1022, 251, 229, 447);
	
	fill(124, 252, 0, 100); // lawn green (woman with dog)
	stroke(0, 255, 255); // cyan
	rect(693, 188, 146, 315);
	
	
	// A helpful mouse pointer
	push();
		fill(0);
		noStroke();
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();
}





