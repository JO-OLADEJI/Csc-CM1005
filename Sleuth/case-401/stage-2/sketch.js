/*

Officer: 5148740
CaseNum: 401-1-54006711-5148740

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos with his foul toxin. The chaos is spreading. People are dropping like flies and burrito sales have fallen through the floor. To make matters worse it seems Norbert has cottoned on to our methods and has upped the complexity of his poison. You’ll find the antidote harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to do the following:

	- If Nerve_Gas goes above 0.4 and snake_venom dips below 0.28, decrement methylene by 0.04
	- If arsenic goes above 0.59, try increasing methylene by 0.05
	- If warfarin dips below 0.45, reduce aspirin by 0.04
	- If Nerve_Gas goes above 0.71, increment aspirin by 0.03
	- When snake_venom goes above 0.43, reduce glucagon by 0.04
	- When arsenic dips below 0.56 or warfarin goes above 0.67, raise glucagon by 0.05
	- If arsenic goes above 0.7, try decreasing sulphates by 0.05
	- When Nerve_Gas goes above 0.45 and snake_venom dips below 0.32, increase sulphates by 0.04


Your conditional statements should consider the following poisons:

	- arsenic
	- warfarin
	- snake_venom
	- Nerve_Gas


Your conditional statements should modify the following antidotes:

	- methylene
	- aspirin
	- glucagon
	- sulphates


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var arsenic;
var warfarin;
var snake_venom;
var Nerve_Gas;


//Declare the antidote variables
var methylene;
var aspirin;
var glucagon;
var sulphates;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	arsenic = 0.5;
	warfarin = 0.5;
	snake_venom = 0.5;
	Nerve_Gas = 0.5;
	methylene = 0.5;
	aspirin = 0.5;
	glucagon = 0.5;
	sulphates = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below

	// If Nerve_Gas goes above 0.4 and snake_venom dips below 0.28, decrement methylene by 0.04
	if (Nerve_Gas > 0.4 && snake_venom < 0.28) {
		methylene -= 0.04;
	}

	// - If arsenic goes above 0.59, try increasing methylene by 0.05
	if (arsenic > 0.59) {
		methylene += 0.05;
	}

	// - If warfarin dips below 0.45, reduce aspirin by 0.04
	if (warfarin < 0.45) {
		aspirin -= 0.04;
	}

	// - If Nerve_Gas goes above 0.71, increment aspirin by 0.03
	if (Nerve_Gas > 0.71) {
		aspirin += 0.03;
	}

	// - When snake_venom goes above 0.43, reduce glucagon by 0.04
	if (snake_venom > 0.43) {
		glucagon -= 0.04;
	}

	// - When arsenic dips below 0.56 or warfarin goes above 0.67, raise glucagon by 0.05
	if (arsenic < 0.56 || warfarin > 0.67) {
		glucagon += 0.05;
	}

	// - If arsenic goes above 0.7, try decreasing sulphates by 0.05
	if (arsenic > 0.7) {
		sulphates -= 0.05;
	}

	// - When Nerve_Gas goes above 0.45 and snake_venom dips below 0.32, increase sulphates by 0.04
	if (Nerve_Gas > 0.45 && snake_venom < 0.32) {
		sulphates += 0.04;
	}



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	arsenic = nextValue(graphs[0],arsenic);
	warfarin = nextValue(graphs[1],warfarin);
	snake_venom = nextValue(graphs[2],snake_venom);
	Nerve_Gas = nextValue(graphs[3],Nerve_Gas);


	methylene = constrain(methylene, 0, 1);
	aspirin = constrain(aspirin, 0, 1);
	glucagon = constrain(glucagon, 0, 1);
	sulphates = constrain(sulphates, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('arsenic: ' + nf(arsenic,1,2), 20,20);
	fill(colors[1]);
	text('warfarin: ' + nf(warfarin,1,2), 20,40);
	fill(colors[2]);
	text('snake_venom: ' + nf(snake_venom,1,2), 20,60);
	fill(colors[3]);
	text('Nerve_Gas: ' + nf(Nerve_Gas,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(methylene,50,'methylene');
	drawBar(aspirin,200,'aspirin');
	drawBar(glucagon,350,'glucagon');
	drawBar(sulphates,500,'sulphates');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
