let ball;

function setup() {
	ball = {
		xPos: 100,
		yPos: 100
	};

	createCanvas(500, 500);
	noStroke();
	fill(0, 0, 0);
}

function draw() {
	background(255);
	ellipse(ball.xPos, ball.yPos, 10, 10);

	// ball.xPos++;
	ball.yPos++;
}


// function setup()
// {
// 	//create a canvas for the robot
// 	createCanvas(500, 500);
// 	fill(255, 255, 255);
// }

// function draw()
// {
// 	background(0, 0, 0);
// 	fill(255, 255, 255);
// 	// ellipse(mouseX, mouseY, height/5, width/5);
// 	rect(0, 0, mouseX, mouseY);
// }

// function mouseReleased()
// {
// 	fill(0, 0, 255);
// }

// let x = 0;
// function mousePressed()
// {
// 	if (x % 3 === 0) {
// 		fill(255, 0, 0);
// 	} else if (x % 3 === 1) {
// 		fill(0, 255, 0);
// 	} else if (x % 3 === 2) {
// 		fill(0, 0, 255);
// 	}

// 	x += 1;
// }

// function keyPressed()
// {
// 	fill(255, 255, 255);
// }