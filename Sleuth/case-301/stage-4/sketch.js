/*
The case of the Python Syndicate
Stage 4

Officer: 5148740
CaseNum: 301-3-54424546-5148740

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

- Organise each syndicate member into a new object. 
    - I’ve done one for you as an example.
    - Be sure to replicate the naming conventions for your own objects.
- Modify the image commands to make them use the new objects you created.
- Once you have done this you can delete the old variables.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

*/

var photoBoard;
var countessHamiltonImage;
var annaKarpinskiImage;
var rockyKrayImage;
var robbieKrayImage;
var bonesKarpinskiImage;
var pawelKarpinskiImage;

var robbieKrayObj;


//declare your new objects below
var countessHamiltonObj;
var annaKarpinskiObj;
var rockyKrayObj;
var bonesKarpinskiObj;
var pawelKarpinskiObj;


var countessHamiltonPosX = 115;
var countessHamiltonPosY = 40;
var annaKarpinskiPosX = 408;
var annaKarpinskiPosY = 40;
var rockyKrayPosX = 701;
var rockyKrayPosY = 40;
var bonesKarpinskiPosX = 408;
var bonesKarpinskiPosY = 309;
var pawelKarpinskiPosX = 701;
var pawelKarpinskiPosY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countessHamiltonImage = loadImage("countessHamilton.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	robbieKrayObj = {
		x: 115,
		y: 309,
		image: robbieKrayImage
	};


	//define your new objects below
	countessHamiltonObj = {
		x: 115,
		y: 40,
		image: countessHamiltonImage
	};

	annaKarpinskiObj = {
		x: 408,
		y: 40,
		image: annaKarpinskiImage
	};

	rockyKrayObj = {
		x: 701,
		y: 40,
		image: rockyKrayImage
	};

	bonesKarpinskiObj = {
		x: 408,
		y: 309,
		image: bonesKarpinskiImage
	};

	pawelKarpinskiObj = {
		x: 701,
		y: 309,
		image: pawelKarpinskiImage
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(countessHamiltonObj.image, countessHamiltonObj.x, countessHamiltonObj.y);
	image(annaKarpinskiObj.image, annaKarpinskiObj.x, annaKarpinskiObj.y);
	image(rockyKrayObj.image, rockyKrayObj.x, rockyKrayObj.y);
	image(robbieKrayObj.image, robbieKrayObj.x, robbieKrayObj.y);
	image(bonesKarpinskiObj.image, bonesKarpinskiObj.x, bonesKarpinskiObj.y);
	image(pawelKarpinskiObj.image, pawelKarpinskiObj.x, pawelKarpinskiObj.y);


}