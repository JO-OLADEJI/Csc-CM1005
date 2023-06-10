var groundHeight;
var mountain1;
var mountain2;

var tree;

var moon;
var sun;
var darkness;
var darkness2;
var darkness3;

let dynamicNumerator;
let staticDenominator;
let increasingAlpha;
let decreasingAlpha;

function setup()
{
	createCanvas(800, 600);
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;

	//initalise the mountain objects with properties to help draw them to the canvas
	mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
	};
	mountain2 = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 130
	};

	//initalise the tree object
	tree = {
		x: 150,
		y: groundHeight + 20,
		trunkWidth: 40,
		trunkHeight: 150,
		canopyWidth: 120,
		canopyHeight: 100
	};

    //initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 80,
	};
    
    //TASK: intialise a moon object with an extra property for brightness
	moon = {
		x: 700,
		y: 70,
		diameter: 80,
	}


	//set the initial darkness
	darkness = 0;

}



function draw()
{
	//TASK: update the values for the moons brightness, the sun's position and the darkness.
	//You can either map this to the mouse's location (i.e. the futher left the mouse is the more daylight) or you can just change the values gradually over time.

	dynamicNumerator = mouseX - sun.x;
	staticDenominator = width - sun.x;
	increasingAlpha = constrain(
		255 * (dynamicNumerator / staticDenominator),
		0,
		255
	);
	darkness = constrain(1 - (increasingAlpha / 255) * 1.1, 0.15, 1);
	darkness2 = constrain(1 - (increasingAlpha / 255) * 0.9, 0.25, 1);


	//draw the sky
	background(150 * darkness, 200 * darkness, 255 * darkness);
	noStroke();

	//draw the sun
	fill(255, 255, 0);
	ellipse(
		sun.x,
		constrain(mouseX, sun.y, height),
		sun.diameter
	);
    
    //TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour
	fill(
		255,
		255,
		255,
		increasingAlpha
	);
	ellipse(
		moon.x,
		moon.y,
		moon.diameter
	);
	fill(150 * darkness, 200 * darkness, 255 * darkness);
	ellipse(
		moon.x + 20,
		moon.y - 20,
		moon.diameter * 1.2
	);

	//draw the ground and make it green
	fill(70 * darkness, 200 * darkness, 0 * darkness);
	rect(0, groundHeight, width, height - groundHeight);

	//draw the mountains
	fill(120 * darkness2);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);
    
    //TASK: You can draw the tree yourself
    fill(150 * darkness2, 75 * darkness2, 0 * darkness2);
		rect(200, 300, 40, 120);
		fill(70 * darkness, 200 * darkness, 0 * darkness);
		triangle(170, 360, 220, 260, 270, 360);
		triangle(170, 330, 220, 230, 270, 330);

	//TASK: make the scene dark by drawing a rectangle that covers the whole canvas.
	//Use the alpha value of fill to determine how dark to make it



}