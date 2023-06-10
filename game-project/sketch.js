/*
The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:
0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create
the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.

WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.
*/


function setup () {
	createCanvas (1024, 576);
}

function draw() {

	background (100, 155, 255); //fill the sky blue

	noStroke();
	fill (0,155,0);
	rect (0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	// add your code here
	fill(255);
	rect(143, 82, 180, 50, 25);
	ellipse(193, 85, 60, 60);
	ellipse(240, 65, 70, 70);
	ellipse(280, 85, 60, 60);

	// noStroke();
	// fill (255);
	// text ("cloud", 200, 100);

	//2. a mountain in the distance
	// add your code here
	fill(133,136,148);
	triangle(375, 432, 478, 252, 600, 432);
	fill(74,83,98);
	triangle(550, 432, 625, 340, 677, 432);
	fill(183,191,203);
	triangle(400, 432, 525, 212, 650, 432);

	ellipse(709, 418, 30, 30);

	// noStroke ();
	// fill (255);
	// text ("mountain", 500, 256);

	//3. a tree
	//... add your code here
	fill(116,75,41);
	rect(832, 372, 30, 60); // stem
	fill(62,120,79); // green shade 1
	triangle(812, 372, 847, 266, 882, 372);
	fill(101,156,129); // green shade 2
	triangle(812, 372, 842, 281, 872, 372);

	// noStroke ();
	// fill (255);
	// text ("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen
	// ...add your code here
	strokeWeight(3);
	stroke(139,38,13);
	fill(214,151,85);
	beginShape();
		vertex(260, 432);
		vertex(344, 496);
		vertex(316, 532);
		vertex(373, 579);
		vertex(245, 579);
		vertex(201, 532);
		vertex(226, 496);
		vertex(144, 432);
	endShape(CLOSE);

	stroke(214,151,85);
	line(260, 432, 144, 432);

	// stroke(220,131,70);
	stroke(139,38,13);
	line(316, 532, 316, 576);
	line(226, 496, 226, 556);
	line(260, 432, 260, 530);
	line(260, 530, 316, 576);
	line(227, 496, 261, 525);

	noStroke();
	fill(187,233,240);
	beginShape();
		vertex(227, 498);
		vertex(261, 525);
		vertex(260, 530);
		vertex(316, 576);
		vertex(262, 596);
		vertex(226, 556);
		// vertex();
	endShape(CLOSE);


	//A helpful mouse pointer
	push();
		fill(255, 0, 0);
		// noStroke();
		// stroke(255, 0, 0);
		text(mouseX + "," + mouseY, mouseX,mouseY);
	pop();
}
