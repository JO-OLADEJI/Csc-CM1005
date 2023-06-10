var map;
var loc;
var pirateFont;


function setup()
{
	createCanvas(800, 600);
	map = loadImage("map.jpg");
	pirateFont = loadFont("bsg.ttf");
	textFont(pirateFont);

	console.log({ height, width });
}



function draw()
{
	background(255);
	image(map, 0, 0, width, height);

	fill(0, 0, 0, 50);

	// top half of map
	if (mouseY <= height / 2) {
		loc = "N";
		if (mouseX <= width / 2) {
			rect(0, 0, width / 2, height / 2);
			loc += "W";
		} else {
			rect(width / 2, 0, width / 2, height / 2);
			loc += "E";
		}
	} else { // bottom half of map
		loc = "S";
		if (mouseX <= width / 2) {
			rect(0, height / 2, width / 2, height / 2);
			loc += "W";
		} else {
			rect(width / 2, height / 2, width / 2, height / 2);
			loc += "E";
		}
	}

	noStroke();
	textSize(50);
	fill(0);
	text(loc, 80, 550);

}