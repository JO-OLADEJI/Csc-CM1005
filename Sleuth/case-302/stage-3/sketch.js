/*
The case of the slippery Minsky brothers
Stage 3: Gate’s Department Store

Officer: 5148740
CaseNum: 302-2-65707542-5148740

There’s been a break in at Gate’s Department Store. I suspect that it’s Marvin, the eldest Minsky. Catch this Minsky in the act and you’ll have the whole gang behind bars.

- Edit the spotlight object by adding x and y properties initialised to your location (NB. you're the detective). 
- Also add endX and endY properties initialised to Marvin's location (NB. he's the burglar).
- Make the spotlight move perfectly from you towards Marvin by incrementing/decrementing the x and y properties of the object using:

	"+=" or "+"
	"-=" or "-"

- If you get everything correct then the spotlight will stop over the target.

*/


//the variable for the spotlight object
var spotlight;

// other variables, you don't need to change these
var img, spotlight_image;




function preload()
{
	img = loadImage('scene.png');


	spotlight_image = loadImage('spotlight.png')

}

function setup()
{
	createCanvas(img.width, img.height);
	console.log({ width: img.width, height: img.height });

	//Initialise the spotlight object
	//with properties x, y, endX and endY

  	spotlight = {
			image: spotlight_image,
			x: 575,
			y: 350,
			endX: 370,
			endY: 590
		}
}

function draw()
{
	image(img, 0, 0);

	// alter the object properties x and y below to animate the spotlight
	spotlight.x -= 1;
	spotlight.y += 1.17;


	////////// DO NOT CHANGE ANYTHING BELOW /////////////

    //stop the spotlight if it goes off of the screen
	if(spotlight.x !== undefined){
    	spotlight.x = min(spotlight.x, 960);
		spotlight.x = max(spotlight.x, 0);
	}

	if(spotlight.y !== undefined){
    	spotlight.y = min(spotlight.y, 945);    
    	spotlight.y = max(spotlight.y, 0);
	}

	if(spotlight.x !== undefined && spotlight.y !== undefined && spotlight.endX !== undefined && spotlight.endY !== undefined){
		if (abs(spotlight.endX - spotlight.x) < 50
			&& abs(spotlight.endY - spotlight.y) < 50)
		{
			spotlight.x = spotlight.endX;
			spotlight.y = spotlight.endY;
		}
	}


	var spotlightSize = 180;

	blendMode(BLEND);
	background(10);
	var _x = spotlight.x || 0;
	var _y = spotlight.y || 0;
	image(spotlight.image, _x-spotlightSize/2,
			_y-spotlightSize/2, spotlightSize, spotlightSize);
	blendMode(DARKEST);
	image(img, 0, 0);

	////////// DO NOT CHANGE ANYTHING ABOVE /////////////
}
