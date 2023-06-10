function setup()
{
	//create your canvas here
	createCanvas(500, 500);
	// background(0, 0, 0, 25);
}

function draw()
{
	//do your drawing here
	noStroke();
	fill(254,3,0);
	rect(100, 150, 300, 200, 70);

	fill(255, 255, 255);
	triangle(220, 220, 220, 280, 290, 250);

	strokeWeight(3);
	stroke(0, 0, 0);
	line(150, 370, 350, 370);
	line(180, 390, 320, 390);
	line(210, 410, 290, 410);
}