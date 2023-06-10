/*
The case of the Python Syndicate
Stage 3


Officer: 5148740
CaseNum: 301-2-10409575-5148740

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Bones Karpinski has been declared and initialised
- Position each mugshot relative to Bones Karpinski
- Do this by modifying the x and y parameters of each image command to use the x and y properties from the Bones Karpinski object.
- You will need to combine add and subtract operators with the relevant property for each parameter.
- If you've got it right, then all six images should appear in exactly the same positions as they do now.

REMEMBER:
- Do not create any new variables
- Do not change the values of the properties for Bones Karpinski 
- Do not add any additional commands

*/

var photoBoard;
var adaLovelaceImg;
var cecilKarpinskiImg;
var bonesKarpinskiImg;
var robbieKrayImg;
var countessHamiltonImg;
var annaKarpinskiImg;

var bonesKarpinskiObj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	adaLovelaceImg = loadImage("ada.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	countessHamiltonImg = loadImage("countessHamilton.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	bonesKarpinskiObj = {
		x: 701,
		y: 40,
		image: bonesKarpinskiImg
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bonesKarpinskiObj.image, bonesKarpinskiObj.x, bonesKarpinskiObj.y);
	image(adaLovelaceImg, bonesKarpinskiObj.x - 586, bonesKarpinskiObj.y);
	image(cecilKarpinskiImg, bonesKarpinskiObj.x - 293, bonesKarpinskiObj.y);
	image(robbieKrayImg, bonesKarpinskiObj.x - 586, bonesKarpinskiObj.y + 269);
	image(countessHamiltonImg, bonesKarpinskiObj.x - 293, bonesKarpinskiObj.y + 269);
	image(annaKarpinskiImg, bonesKarpinskiObj.x, bonesKarpinskiObj.y + 269);

}