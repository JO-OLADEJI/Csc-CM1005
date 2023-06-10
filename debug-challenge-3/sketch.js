var redButton;
var alertFlash = true;
var alertShow = false;

function setup()
{
	createCanvas(600, 700);

	redButton = {
		x: width / 2,
		y: height / 2,
		dia: 200,
		activated: false
	}

}

function draw()
{
	background(255);

	if (redButton.activated)
	{
		background(250, 250, 0);

		if (alertFlash)
		{
			alertShow = frameCount % 15 == 0 ? !alertShow : alertShow;

			if (alertShow) {
				textSize(35);
				text("Meltdown Sequence Initiated!!!", width / 2, height / 2 - redButton.dia);
			}
		}

	}


	fill(255, 0, 0);
	stroke(200, 30, 30);
	strokeWeight(20);
	ellipse(redButton.x, redButton.y, redButton.dia);
	noFill();
	stroke(255, 100, 100);
	arc(redButton.x, redButton.y, redButton.dia, redButton.dia, PI, PI * 2);


	textAlign(CENTER);
	textSize(40);
	strokeWeight(1);
	stroke(0);
	fill(0);
	text("DO NOT PRESS", width / 2, height / 2 + redButton.dia);

}

function mousePressed()
{
	if (dist(mouseX, mouseY, redButton.x, redButton.y) < redButton.dia)
	{
		redButton.activated = !redButton.activated;
	}
}