/*
The case of the Python Syndicate
Stage 2


Officer: 5148740
CaseNum: 301-1-67948933-5148740

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Bones Karpinski

- The variables for Bones Karpinski have been declared and initialised.
- This time you are NOT allowed to create any new variables.
- Instead you must position each mug shot relative to Bones Karpinski
- To do this you will need to control the positions of the mugshots by adding/subtracting hard-coded values to the appropriate Bones Karpinski variable for each parameter.
- If you've got it right all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the variables for Bones Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var pawelKarpinskiImage;
var bonesKarpinskiImage;
var cecilKarpinskiImage;
var robbieKrayImage;
var rockyKrayImage;
var countessHamiltonImage;


var bonesKarpinskiCoordinateX = 408;
var bonesKarpinskiCoordinateY = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	countessHamiltonImage = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bonesKarpinskiImage, bonesKarpinskiCoordinateX, bonesKarpinskiCoordinateY);

	// var bonesKarpinskiCoordinateX = 408;
	// var bonesKarpinskiCoordinateY = 40;

	image(pawelKarpinskiImage, bonesKarpinskiCoordinateX - 293, bonesKarpinskiCoordinateY);
	image(cecilKarpinskiImage, bonesKarpinskiCoordinateX + 293, bonesKarpinskiCoordinateY);
	image(robbieKrayImage, bonesKarpinskiCoordinateX - 293, bonesKarpinskiCoordinateY + 269);
	image(rockyKrayImage, bonesKarpinskiCoordinateX, bonesKarpinskiCoordinateY + 269);
	image(countessHamiltonImage, bonesKarpinskiCoordinateX + 293, bonesKarpinskiCoordinateY + 269);

}