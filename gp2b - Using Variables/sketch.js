/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;

	collectable = {
		y_pos: 432,
		x_pos: 100,
		size: 50
	};

	canyon = {
		x_pos: 100,
		width: 100
	};

	mountain = {
		x_pos: 225,
		y_pos: 200
	};

	cloud = {
		x_pos: 50,
		y_pos: 50,
		scale: 0.8
	}
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground


	// 6. CLOUDS
	fill(255);
	rect(
		cloud.x_pos + (43 * cloud.scale), cloud.y_pos + (32 * cloud.scale),
		180 * cloud.scale, 50 * cloud.scale, 25 * cloud.scale
	);
	// ellipse(193, 85, 60, 60);
	ellipse(
		cloud.x_pos + (93 * cloud.scale), cloud.y_pos + (35 * cloud.scale),
		60 * cloud.scale, 60 * cloud.scale
	);
	ellipse(
		cloud.x_pos + (140 * cloud.scale), cloud.y_pos + (15 * cloud.scale),
		70 * cloud.scale, 70 * cloud.scale
	);
	ellipse(
		cloud.x_pos + (180 * cloud.scale), cloud.y_pos + (35 * cloud.scale),
		60 * cloud.scale, 60 * cloud.scale
	);



	// 5. MOUNTAIN
	fill(133,136,148);
	triangle(
		mountain.x_pos, mountain.y_pos + 232,
		mountain.x_pos + 103, mountain.y_pos + 52,
		mountain.x_pos + 225, mountain.y_pos + 232
	);
	fill(74,83,98);
	triangle(
		mountain.x_pos + 175, mountain.y_pos + 232,
		mountain.x_pos + 250, mountain.y_pos + 140,
		mountain.x_pos + 302, mountain.y_pos + 232
	);
	fill(183,191,203);
	triangle(
		mountain.x_pos + 25, mountain.y_pos + 232,
		mountain.x_pos + 150, mountain.y_pos + 12,
		mountain.x_pos + 275, mountain.y_pos + 232
	);



	// 2. TREE
	fill(116,75,41);
	rect(treePos_x, treePos_y + 84, 30, 60); // stem
	fill(62,120,79); // green shade 1
	triangle(
		treePos_x - 20, 372,
		treePos_x + 15, 266,
		treePos_x + 50, 372
	);
	fill(101,156,129); // green shade 2
	triangle(
		treePos_x - 20, 372,
		treePos_x + 10, 281,
		treePos_x + 40, 372
	);



	// 4. COLLECTABLE
	fill(183,191,203);
	ellipse(
		collectable.x_pos - (collectable.size / 2),
		collectable.y_pos - (collectable.size / 2),
		collectable.size,
		collectable.size
	);



	// 3. CANYON
	fill(100, 155, 255);
	rect(
		canyon.x_pos,
		collectable.y_pos,
		canyon.width,
		width - floorPos_y
	);



	// 1. GAME CHARACTER
	stroke(0);
	strokeWeight(2);
	fill(255);

	// head
	ellipse(gameChar_x, gameChar_y - 55, 25, 25);
	// hands
	rect(gameChar_x - 13, gameChar_y - 39, 4, 20);
	rect(gameChar_x + 9, gameChar_y - 39, 4, 20);
	// body
	rect(gameChar_x - 10, gameChar_y - 42, 20, 20);
	// legs
	rect(gameChar_x - 7, gameChar_y - 22, 5, 20);
	rect(gameChar_x + 2, gameChar_y - 22, 5, 20);
	// nose
	fill(0);
	ellipse(gameChar_x, gameChar_y - 55, 6, 6);
	noStroke();

}

function mousePressed()
{
	gameChar_x = mouseX;
	gameChar_y = mouseY;
}
