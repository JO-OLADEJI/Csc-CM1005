/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. Around 10-20 lines of code should work for each state of your game character.

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...
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

	strokeWeight(1);


	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...
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


	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...
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


	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...
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


	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...
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


	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...
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
