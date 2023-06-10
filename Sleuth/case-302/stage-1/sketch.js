/*
The case of the slippery Minsky brothers
Stage 1: Gates Bank

Officer: 5148740
CaseNum: 302-0-14706433-5148740

The Slippery Minsky brothers are notorious cat burglars. I’ve been trying to catch them for years but they are masters of escape, hence their nickname. I’ve had a tip off that Sergey Minsky is breaking into the Gates Bank tonight. Head down there and catch him in the act.


- Initialise startX to set the starting position of the spotlight. Shine it on you - the detective.
- Initialise endX to set the ending position of the spotlight as the target. This should be on Sergey - the burglar.
- Make the spotlight move perfectly from you towards Sergy by incrementing/decrementing the variable x using:

  "+=" or "+"
  "-=" or "-"
  
- If you get everything correct then the spotlight will stop over the target.


*/

// these variables control where the spotlight starts and finishes
var startX;
var endX;

// these variables are used to animate the spotlight
var x;
var y;

// other variables, you don't need to change these
var img, spotlight_image;


function preload()
{
	img = loadImage('scene.png');
	spotlight_image = loadImage('spotlight.png');
}

function setup()
{
	createCanvas(img.width, img.height);

	// Initialise variables here to control where the spotlight starts and ends
	startX = 840;
	endX = 70;


	//Initialize x with the start value
	x = startX;
}

function draw()
{
	image(img, 0, 0);

	// increment/decrement the variable x below to animate the spotlight
	x -= 1;


	////////// DO NOT CHANGE ANYTHING BELOW /////////////

	if(x === undefined){
		x = 0;
	}

	//stop the spotlight if it's near enough to endx and endy

	if(endX !== undefined){
		if (abs(endX - x) < 30)
		{
			x = endX;
		}
	}


	y = 114;

	//stop the spotlight if it goes off of the screen
	x = min(x, 960);
	x = max(x, 0);

	var spotlightSize = 180;

	blendMode(BLEND);
	background(10);
	image(spotlight_image, x-spotlightSize/2, y-spotlightSize/2, spotlightSize, spotlightSize);
	blendMode(DARKEST);
	image(img, 0, 0);

	////////// DO NOT CHANGE ANYTHING ABOVE /////////////
}
