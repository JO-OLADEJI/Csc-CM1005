function setup()
{
	//create a canvas for the robot
	createCanvas(1000, 700);
}

function draw()
{
	strokeWeight(2);

	//robot body 1 - delete this code and make your own robot body
	// fill(200);
	fill(255, 107, 53);
	stroke(0, 78, 137);
	rect(90, 200, 120, 130);
	rect(70, 200, 30, 100);
	rect(200, 200, 30, 100);
	rect(120, 330, 30, 110);
	rect(150, 330, 30, 110);


	//robot body 2 - delete this code and make your own robot body
	stroke('black');
	fill(0, 129, 72);
	rect(415, 200, 70, 100, 10);
	rect(395, 200, 15, 110, 7);
	rect(490, 200, 15, 110, 7);
	rect(420, 305, 15, 135, 7);
	rect(465, 305, 15, 135, 7);


	//robot body 3 - delete this code and make your own robot body
	// fill('white');
	noFill();
	// rect(690, 200, 120, 130);
	rect(670, 200, 30, 100, 10);
	rect(800, 200, 30, 100, 10);
	rect(715, 290, 30, 150, 10);
	rect(755, 290, 30, 150, 10);


	// !!! Draw the robot heads - You shouldn't need to change this code !!!

	//robot head 1
	fill(255, 107, 53);
	stroke(0, 78, 137);
	rect(100, 100, 100, 100, 10);
    //robot head 2
	stroke('black');
	fill(0, 129, 72);
	// rect(400, 100, 100, 100, 10);
	ellipse(450, 150, 80, 100);
    //robot head 3
	// fill('white');
	noFill();
	rect(700, 100, 100, 100, 10);

	//ears
	fill(255, 0, 0);

	//robot ears 1]
	// fill(68, 65, 64);
	fill(0, 78, 137);
	stroke(0, 78, 137);
	rect(93, 130, 10, 33);
	rect(197, 130, 10, 33);

	//robot ears 2
	// rect(393, 130, 10, 33);
	// rect(497, 130, 10, 33);

	//robot ears 3
	stroke('black');
	fill('white');
	rect(683, 140, 10, 13);
	rect(688, 135, 10, 23);
	rect(693, 130, 10, 33);


	rect(807, 140, 10, 13);
	rect(802, 135, 10, 23);
	rect(797, 130, 10, 33);



	//robots' antennas
	// robot antenna 1
	stroke(0, 78, 137);
	fill(26, 101, 158);
	ellipse(150, 93, 10, 10);
    // robot antenna 1
	// ellipse(450, 93, 10, 10);
    // robot antenna 1
	stroke('black');
	noFill();
	ellipse(750, 93, 10, 10);

    //robots' antennas
	// robot antenna 1
	stroke(0, 78, 137);
	fill(0, 78, 137);
	rect(140, 97, 20, 10);
    // robot antenna 2
	// rect(440, 97, 20, 10);
    // robot antenna 3
	stroke('black');
	fill('white');
	rect(740, 97, 20, 10);


	//robot 1's eyes
	fill(239, 239, 208);
	stroke(0, 78, 137);
	// stroke(30, 30, 36);
	ellipse(125, 130, 26, 26);
	point(125, 130);
	ellipse(175, 130, 26, 26);
	point(175, 130);

	//robot 2's eyes
	stroke('black');
	strokeWeight(3);
	fill(68, 65, 64);
	ellipse(425, 135, 32, 45);
	ellipse(475, 135, 32, 45);
	// fill(68, 65, 64);
	// strokeWeight(5);
	// stroke('black');
	// point(425, 135);
	// point(475, 135);
	
	strokeWeight(2);
	//robot 3's eyes
	// stroke('white');
	noFill();
	ellipse(725, 130, 26, 26);
	point(725, 130);
	ellipse(775, 130, 26, 26);
	point(775, 130);


	//robots' noses
	//robot 1 nose
	fill(0, 78, 137);
	stroke(0, 78, 137);
	triangle(150, 135, 135, 160, 165, 160);
    //robot 2 nose
	// triangle(450, 135, 435, 160, 465, 160);
    //robot 3 nose
	stroke('black');
	noFill();
	triangle(750, 135, 735, 160, 765, 160);

	//robot 1 mouth
	noFill();
	stroke(0, 78, 137);
	beginShape();
	vertex(128, 175);
	vertex(136, 185);
	vertex(142, 175);
	vertex(150, 185);
	vertex(158, 175);
	vertex(166, 185);
	vertex(174, 175);
	endShape();

	//robot 2 mouth
	stroke('black');
	strokeWeight(7);
	line(440, 175, 460, 175);
	// beginShape();
	// vertex(428, 175);
	// vertex(436, 185);
	// vertex(442, 175);
	// vertex(450, 185);
	// vertex(458, 175);
	// vertex(466, 185);
	// vertex(474, 175);
	// endShape();

	//robot 3 mouth
	strokeWeight(2);
	beginShape();
	vertex(728, 175);
	vertex(736, 185);
	vertex(742, 175);
	vertex(750, 185);
	vertex(758, 175);
	vertex(766, 185);
	vertex(774, 175);
	endShape();
}