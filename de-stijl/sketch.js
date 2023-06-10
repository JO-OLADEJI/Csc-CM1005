function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{

	//set the fill colour to red
	fill(255, 0, 0);

	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//draw the red rectangle 
	rect(100, 50, 600, 600);

	// left rectangles
	fill("cyan");
	rect(100, 50, 150, 200);
	fill("green");
	rect(100, 250, 150, 200);
	fill("blue");
	rect(100, 450, 150, 200);
	
	// right rectangles
	fill("white");
	rect(250, 350, 450, 300);
	fill("tomato");
	rect(500, 50, 100, 300);
	fill("yellow");
	rect(250, 50, 250, 50);

}