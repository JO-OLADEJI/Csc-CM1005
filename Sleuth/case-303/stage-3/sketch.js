/*

Officer: 5148740
CaseNum: 303-2-71299484-5148740

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is moving:
	- Make ClassifiedBoxValue_A equal to the value of mouseX
	- Use the 'max' function to prevent ClassifiedBoxValue_A from falling below 4

	Whilst the mouse is moving:
	- Decrement ClassifiedBoxValue_B by 2
	- Use the 'max' function to prevent ClassifiedBoxValue_B from falling below 3

	Whilst the mouse is being dragged:
	- Make ClassifiedBoxValue_C equal to the value of mouseX
	- Use the 'min' function to prevent ClassifiedBoxValue_C from going above 12

	When any key is pressed:
	- Decrement ClassifiedBoxValue_D by 2
	- Use the 'constrain' function to prevent ClassifiedBoxValue_D from falling below 2 and going above 10

	Whilst the mouse is being dragged:
	- Make ClassifiedBoxValue_E equal to the value of mouseY
	- Use the 'min' function to prevent ClassifiedBoxValue_E from going above 72



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var ClassifiedBoxValue_A;
var ClassifiedBoxValue_B;
var ClassifiedBoxValue_C;
var ClassifiedBoxValue_D;
var ClassifiedBoxValue_E;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	ClassifiedBoxValue_A = 0;
	ClassifiedBoxValue_B = 0;
	ClassifiedBoxValue_C = 0;
	ClassifiedBoxValue_D = 0;
	ClassifiedBoxValue_E = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
function mouseMoved() {
	ClassifiedBoxValue_A = max(4, mouseX);
	ClassifiedBoxValue_B = max(3, ClassifiedBoxValue_B - 2);
}

function mouseDragged() {
	ClassifiedBoxValue_C = min(mouseX, 12);
	ClassifiedBoxValue_E = min(mouseY, 72);
}

function keyPressed() {
	ClassifiedBoxValue_D = constrain(ClassifiedBoxValue_D - 2, 2, 10);
}


///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,ClassifiedBoxValue_A, 24);
	pop();

	push();
	translate(120,380);
	drawDial(140,ClassifiedBoxValue_B, 21);
	pop();

	push();
	translate(280,170);
	drawDial(140,ClassifiedBoxValue_C, 18);
	pop();

	push();
	translate(280,380);
	drawDial(140,ClassifiedBoxValue_D, 14);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(ClassifiedBoxValue_E);
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
