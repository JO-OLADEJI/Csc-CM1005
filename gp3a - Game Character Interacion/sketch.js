/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon


	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
		fill(255);
		stroke(0);
		strokeWeight(2);
		// head
		ellipse(gameChar_x, gameChar_y - 55, 25, 25);
		// legs
		noFill();
		strokeWeight(4);
		beginShape();
		vertex(gameChar_x - 1, gameChar_y - 22);
		vertex(gameChar_x - 3, gameChar_y - 17);
		vertex(gameChar_x, gameChar_y - 10);
		endShape();

		fill(255);
		strokeWeight(2);
		// body
		rect(gameChar_x - 5, gameChar_y - 42, 10, 20);
		// hands
		rect(gameChar_x - 2, gameChar_y - 39, 4, 20);
		// nose
		fill(0);
		ellipse(gameChar_x - 10, gameChar_y - 55, 6, 6);

		strokeWeight(1);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
		fill(255);
		stroke(0);
		strokeWeight(2);
		// head
		ellipse(gameChar_x, gameChar_y - 55, 25, 25);
		// legs
		noFill();
		strokeWeight(4);
		beginShape();
		vertex(gameChar_x - 1, gameChar_y - 22);
		vertex(gameChar_x + 2, gameChar_y - 17);
		vertex(gameChar_x - 3, gameChar_y - 10);
		endShape();

		fill(255);
		strokeWeight(2);
		// body
		rect(gameChar_x - 5, gameChar_y - 42, 10, 20);
		// hands
		rect(gameChar_x - 2, gameChar_y - 39, 4, 20);
		// nose
		fill(0);
		ellipse(gameChar_x + 10, gameChar_y - 55, 6, 6);

		strokeWeight(1);

	}
	else if(isLeft)
	{
		// add your walking left code
		fill(255);
		stroke(0);
		strokeWeight(2);
		// head
		ellipse(gameChar_x, gameChar_y - 55, 25, 25);
		// legs
		rect(gameChar_x - 2, gameChar_y - 25, 5, 20);
		rect(gameChar_x - 4, gameChar_y - 22, 5, 20);
		// body
		rect(gameChar_x - 5, gameChar_y - 42, 10, 20);
		// hands
		rect(gameChar_x - 2, gameChar_y - 39, 4, 20);

		// nose
		fill(0);
		ellipse(gameChar_x - 10, gameChar_y - 55, 6, 6);

		strokeWeight(1);

	}
	else if(isRight)
	{
		// add your walking right code
		fill(255);
		stroke(0);
		strokeWeight(2);
		// head
		ellipse(gameChar_x, gameChar_y - 55, 25, 25);
		// legs
		rect(gameChar_x - 4, gameChar_y - 25, 5, 20);
		rect(gameChar_x - 2, gameChar_y - 22, 5, 20);
		// body
		rect(gameChar_x - 5, gameChar_y - 42, 10, 20);
		// hands
		rect(gameChar_x - 2, gameChar_y - 39, 4, 20);

		// nose
		fill(0);
		ellipse(gameChar_x + 10, gameChar_y - 55, 6, 6);

		strokeWeight(1);

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
		stroke(0);
		strokeWeight(2);
		fill(255);

		// head
		ellipse(gameChar_x, gameChar_y - 55, 25, 25);
		// legs
		noFill();
		strokeWeight(4);
		beginShape();
		vertex(gameChar_x - 4, gameChar_y - 22);
		vertex(gameChar_x - 7, gameChar_y - 17);
		vertex(gameChar_x - 4, gameChar_y - 10);
		endShape();
		beginShape();
		vertex(gameChar_x + 4, gameChar_y - 22);
		vertex(gameChar_x + 7, gameChar_y - 17);
		vertex(gameChar_x + 4, gameChar_y - 10);
		endShape();
		strokeWeight(2);

		fill(255);
		// hands
		rect(gameChar_x - 13, gameChar_y - 39, 4, 20);
		rect(gameChar_x + 9, gameChar_y - 39, 4, 20);
		// body
		rect(gameChar_x - 10, gameChar_y - 42, 20, 20);
		// nose
		fill(0);
		ellipse(gameChar_x - 2, gameChar_y - 55, 6, 6);

		strokeWeight(1);

	}
	else
	{
		// add your standing front facing code
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

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here

	// 1. Move the character left and right
	if (isLeft) {
		gameChar_x = constrain(gameChar_x - 3, 0 + 15, width - 15);
	}
	if (isRight) {
		gameChar_x = constrain(gameChar_x + 3, 0 + 15, width - 15);
	}

	// 2. GRAVITY
	if (gameChar_y < floorPos_y) {
		gameChar_y += 1;
		isFalling = true;
	} else {
		isFalling = false;
	}

}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
	if (keyCode == 65) {
		isLeft = true;
	}
	if (keyCode == 68) {
		isRight = true;
	}

	if (keyCode == 87 && !isFalling) {
		gameChar_y -= 100;
	}

}
function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
	if (keyCode == 65) {
		isLeft = false;
	}
	if (keyCode == 68) {
		isRight = false;
	}

}
