/*
The case of the slippery Minsky brothers
Stage 2: Gates’ Mansion

Officer: 5148740
CaseNum: 302-1-77546451-5148740

One Minsky behind bars, but two more to go. Larry Minsky has just been spotted breaking and entering the Gates’ Mansion. Get there as fast as you can and intercept.


- Initialise startX & startY to set the starting position of the spotlight. Shine it on you - the detective.
- Initialise endX & endY to set the ending position of the spotlight as the target. This should be on Larry - the burglar.
- Make the spotlight move perfectly from you towards Larry by incrementing/decrementing the variables x and y using:

	"+=" or "+"
 	"-=" or "-"

- If you get everything correct then the spotlight will stop over the target.

*/

// these variables control where the spotlight starts and finishes
var startX;
var endX;

var startY;
var endY;

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
	
	//add your code here
	startX = 700;
	startY = 310;

	endX = 730;
	endY = 750;


	//Initialize x and y with the start values
	x = startX;
	y = startY;
}

function draw()
{
	image(img, 0, 0);

	// alter the variables x and y below to animate the spotlight
	x += 0.068;
	y += 1;



	////////// DO NOT CHANGE ANYTHING BELOW /////////////

	if(x === undefined){
		x = 0;
	}

	if(y === undefined){
		y = 0;
	}


	if(x !== undefined && y !== undefined 
	&& startX !== undefined && startY !== undefined 
	 && endX !== undefined && endY !== undefined){
		//stop the spotlight if it's near enough to endx and endy
		if (abs(endX - x) < 100 && abs(endY - y) < 100)
		{
			x = endX;
			y = endY;
		}
	}

	//stop the spotlight if it goes off of the screen
	x = min(x, 960);
	y = min(y, 945);
	x = max(x, 0);
	y = max(y, 0);

	var spotlightSize = 180;

	blendMode(BLEND);
	background(10);
	image(spotlight_image, x-spotlightSize/2, y-spotlightSize/2, spotlightSize, spotlightSize);
	blendMode(DARKEST);
	image(img, 0, 0);

	////////// DO NOT CHANGE ANYTHING ABOVE /////////////
}
