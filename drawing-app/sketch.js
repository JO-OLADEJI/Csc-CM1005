function setup()
{
	createCanvas(800, 600);
	noFill();
	rect(0, 0, width - 1, height - 1);
}


let eraser = false;
function draw()
{
	if (!eraser) {
		noStroke();
		fill(0, 0, 0);
	} else {
		fill(255, 255, 255);
	}
}

function mouseDragged()
{
	if (!eraser) {
		ellipse(mouseX, mouseY, 10, 10);
	} else {
		ellipse(mouseX, mouseY, 20, 20);
	}

}

function keyPressed()
{
	eraser = !eraser;
}
