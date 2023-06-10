/*

Officer: 5148740
CaseNum: 303-0-11929588-5148740

Case 303 - The Case of the Crooked Attorney
Stage 1 - Torvalds' Office

District Attorney Torvalds is well respected in Console City as an upstanding citizen and
enforcer of the law. Of course he’s as crooked as they come. I’ve had enough of having our
hard work at Sleuth and Co undermined by his bribes and back-payments. Let’s take take this
sucker down. I happen to know that Torvalds keeps his incriminating documents spread amongst
several safes in town. I’ll need you to bend the rules a little by breaking into them and
retrieving the incriminating evidence.

The first safe is in Torvald’s office. Crack it by doing the following:

	Whilst the mouse is being dragged:
	- Make restrictedStoreValue0 equal to 15

	Whilst the mouse is moving:
	- Make restrictedStoreValue0 equal to 17

	When the mouse button is pressed:
	- Make restrictedStoreValue0 equal to 22

	When the mouse button is released:
	- Make restrictedStoreValue0 equal to 2

	When any key is released:
	- Make restrictedStoreValue1 equal to 86

	When the mouse button is released:
	- Make restrictedStoreValue1 equal to 60

	When the mouse button is pressed:
	- Make restrictedStoreValue1 equal to 52

	Whilst the mouse is being dragged:
	- Make restrictedStoreValue1 equal to 65



There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !

*/

//declare the variables

var restrictedStoreValue0;
var restrictedStoreValue1;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	restrictedStoreValue0 = 0;
	restrictedStoreValue1 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Add your code to these events to open the safe ...

function mouseMoved()
{
	console.log("mouseMoved", mouseX, mouseY);
	restrictedStoreValue0 = 17;
}

function mouseDragged()
{
	console.log("mouseDragged", mouseX, mouseY);
	restrictedStoreValue0 = 15;
	restrictedStoreValue1 = 65;
}

function mousePressed()
{
	console.log("mousePressed");
	restrictedStoreValue0 = 22;
	restrictedStoreValue1 = 52;
}

function mouseReleased()
{
	console.log("mouseReleased");
	restrictedStoreValue0 = 2;
	restrictedStoreValue1 = 60;
}

function keyPressed()
{
	console.log("keyPressed", key);
}

function keyReleased()
{
	console.log("keyReleased", key);
	restrictedStoreValue1 = 86;
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{


	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dial
	push();
	translate(200,height/2);
	drawDial(200, restrictedStoreValue0, 28);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(restrictedStoreValue1);
	pop();

}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
