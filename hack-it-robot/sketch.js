let antennaOn;

function setup()
{
	antennaOn = true;
	//create a canvas for the robot
	createCanvas(500, 500);
}

function draw()
{
	strokeWeight(6);

	// canvas outline
	// noFill();
	// rect(3, 3, 494, 494);

	//robots head
	fill(200);
	ellipse(250, 250, 300);
	// rect(100, 100, 300, 300, 20);


	//robots antenna
	// fill(250, 250, 0);
	if (frameCount % 20 == 0) {
		antennaOn = !antennaOn;
	}
	antennaOn ? stroke(150) : stroke(240);

	// ellipse(250, 70, 60, 60);
	line(250, 80, 220, 40);
	line(250, 80, 280, 40);

	// fill(200, 0, 200);
	stroke(0);
	fill(50);
	rect(210, 80, 80, 30);

	//robots eyes
	// fill(255);
	fill(235);
	ellipse(175, 200, 80, 80);
	point(175, 200);
	ellipse(325, 200, 80, 80);
	point(325, 200);


	//robots nose
	// fill(255, 0, 0);
	fill(130);
	ellipse(250, 275, 50);
	// triangle(250, 220, 200, 300, 300, 300);

	//robots ears
	rect(85, 220, 30, 70, 15);
	rect(385, 220, 30, 70, 15);

	//robots mouth
	noFill();
	// beginShape();
	line(200, 350, 300, 350);
	// vertex(175, 340);
	// vertex(200, 370);
	// vertex(225, 340);
	// vertex(250, 370);
	// vertex(275, 340);
	// vertex(300, 370);
	// vertex(325, 340);
	// endShape();
}

// function mousePressed() {
// 	antennaOn = !antennaOn;
// }