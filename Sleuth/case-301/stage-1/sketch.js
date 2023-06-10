/*
The case of the Python Syndicate
Stage 1

Officer: 5148740
CaseNum: 301-0-90411868-5148740

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Initialise the variables with the correct values. HINT: you should be able to derive these from the image commands below.
- Finally modify the each image command replacing the hard-coded values with your variables. 
- If you've got it right all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var cecilKarpinskiImage;
var countessHamiltonImage;
var bonesKarpinskiImage;
var adaLovelaceImage;
var pawelKarpinskiImage;
var annaKarpinskiImage;



//declare your new variables below
var adaLovelaceCoordinateX = 115;
var adaLovelaceCoordinateY = 309;

var cecilKarpinskiCoordinateX = 115;
var cecilKarpinskiCoordinateY = 40;

var countessHamiltonCoordinateX = 408;
var countessHamiltonCoordinateY = 40;

var bonesKarpinskiCoordinateX = 701;
var bonesKarpinskiCoordinateY = 40;

var pawelKarpinskiCoordinateX = 408;
var pawelKarpinskiCoordinateY = 309;

var annaKarpinskiCoordinateX = 701;
var annaKarpinskiCoordinateY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	countessHamiltonImage = loadImage("countessHamilton.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	adaLovelaceImage = loadImage("ada.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(adaLovelaceImage, adaLovelaceCoordinateX, adaLovelaceCoordinateY);

	image(cecilKarpinskiImage, cecilKarpinskiCoordinateX, cecilKarpinskiCoordinateY);

	image(countessHamiltonImage, countessHamiltonCoordinateX, countessHamiltonCoordinateY);

	image(bonesKarpinskiImage, bonesKarpinskiCoordinateX, bonesKarpinskiCoordinateY);

	image(pawelKarpinskiImage, pawelKarpinskiCoordinateX, pawelKarpinskiCoordinateY);

	image(annaKarpinskiImage, annaKarpinskiCoordinateX, annaKarpinskiCoordinateY);

}