var map;
var pirateFont;
var treasureX;
var treasureY;
var message = "Pieces-o-nothing!";


function setup()
{
	createCanvas(800, 600);
	map = loadImage("map.jpg");

	treasureX = random(230, 500);
	treasureY = random(100, 330);

	pirateFont = loadFont("bsg.ttf");
	textFont(pirateFont);
}



function draw()
{
	image(map, 0, 0, width, height);

	fill(0, 0, 0, 150);
	// rect(treasureX - 20, treasureY - 20, 40, 40);

	fill(0);

	textSize(40);
	textAlign(CENTER, CENTER);
	text("X", treasureX, treasureY);

	textAlign(LEFT);
	textSize(40);
	text("You've found " + message, 30, 550);

}

function mousePressed() {
	let clickIsInXRegion;
	let clickIsInYRegion;
	const treasureRegion = {
		x: treasureX - 20,
		y: treasureY - 20,
		width: 40,
		height: 40
	}

	clickIsInXRegion = mouseX >= treasureRegion.x && mouseX <= treasureRegion.x + treasureRegion.width;
	clickIsInYRegion = mouseY >= treasureRegion.y && mouseY <= treasureRegion.y + treasureRegion.height;

	if (clickIsInXRegion && clickIsInYRegion) {
		message = "The Treasure";
	} else {
		message = "Pieces-o-nothing!";
	}
}