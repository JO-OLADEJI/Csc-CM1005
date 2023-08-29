/*

Officer: 5148740
CaseNum: 401-2-70851433-5148740

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and has laced the cream cheese with an ingenious but vicious toxin. This one is quite deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- If alcohol goes above 0.37, strychnine dips below 0.7, and also formaldehyde dips below 0.57, try decreasing chalk by 0.03
	- When arsenic goes above 0.43 and methanol goes above 0.58, increase chalk by 0.04
	- When alcohol dips below 0.52 and formaldehyde dips below 0.47, try decreasing sulphates by 0.05
	- When SnakeVenom dips below 0.39, or on the other hand, methanol dips below 0.27 and strychnine goes above 0.47, raise sulphates by 0.05
	- If formaldehyde dips below 0.41 or strychnine dips below 0.45, try decreasing CalciumGluconate by 0.05
	- When methanol goes above 0.26, arsenic goes above 0.49, and also SnakeVenom dips below 0.25, raise CalciumGluconate by 0.05
	- If formaldehyde goes above 0.68 and methanol goes above 0.62, try decreasing charcoal by 0.04
	- When strychnine goes above 0.61 and SnakeVenom dips below 0.75, increase charcoal by 0.04


Your conditional statements should consider the following poisons:

	- methanol
	- strychnine
	- formaldehyde
	- SnakeVenom
	- arsenic
	- alcohol


Your conditional statements should modify the following antidotes:

	- chalk
	- sulphates
	- CalciumGluconate
	- charcoal


- There are many ways to complete this task but you should only use the following commands:

	if(){}
	>
	<
	&&
	||
	+=
	-=

*/

//Declare the poison variables
var methanol;
var strychnine;
var formaldehyde;
var SnakeVenom;
var arsenic;
var alcohol;


//Declare the antidote variables
var chalk;
var sulphates;
var CalciumGluconate;
var charcoal;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	methanol = 0.5;
	strychnine = 0.5;
	formaldehyde = 0.5;
	SnakeVenom = 0.5;
	arsenic = 0.5;
	alcohol = 0.5;
	chalk = 0.5;
	sulphates = 0.5;
	CalciumGluconate = 0.5;
	charcoal = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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
	// - If alcohol goes above 0.37, strychnine dips below 0.7, and also formaldehyde dips below 0.57, try decreasing chalk by 0.03
	if (alcohol > 0.37 && strychnine < 0.7 && formaldehyde < 0.57) {
		chalk -= 0.03;
	}

	// - When arsenic goes above 0.43 and methanol goes above 0.58, increase chalk by 0.04
	if (arsenic > 0.43 && methanol > 0.58) {
		chalk += 0.04;
	}

	// - When alcohol dips below 0.52 and formaldehyde dips below 0.47, try decreasing sulphates by 0.05
	if (alcohol < 0.52 && formaldehyde < 0.47) {
		sulphates -= 0.05;
	}

	// - When SnakeVenom dips below 0.39, or on the other hand, methanol dips below 0.27 and strychnine goes above 0.47, raise sulphates by 0.05
	if (SnakeVenom < 0.39 || (methanol < 0.27 && strychnine > 0.47)) {
		sulphates += 0.05;
	}

	// - If formaldehyde dips below 0.41 or strychnine dips below 0.45, try decreasing CalciumGluconate by 0.05
	if (formaldehyde < 0.41 || strychnine < 0.45) {
		CalciumGluconate -= 0.05;
	}

	// - When methanol goes above 0.26, arsenic goes above 0.49, and also SnakeVenom dips below 0.25, raise CalciumGluconate by 0.05
	if (methanol > 0.26 && arsenic > 0.49 && SnakeVenom < 0.25) {
		CalciumGluconate += 0.05;
	}

	// - If formaldehyde goes above 0.68 and methanol goes above 0.62, try decreasing charcoal by 0.04
	if (formaldehyde > 0.68 && methanol > 0.62) {
		charcoal -= 0.04;
	}

	// - When strychnine goes above 0.61 and SnakeVenom dips below 0.75, increase charcoal by 0.04
	if (strychnine > 0.61 && SnakeVenom < 0.75) {
		charcoal += 0.04;
	}




	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	methanol = nextValue(graphs[0],methanol);
	strychnine = nextValue(graphs[1],strychnine);
	formaldehyde = nextValue(graphs[2],formaldehyde);
	SnakeVenom = nextValue(graphs[3],SnakeVenom);
	arsenic = nextValue(graphs[4],arsenic);
	alcohol = nextValue(graphs[5],alcohol);


	chalk = constrain(chalk, 0, 1);
	sulphates = constrain(sulphates, 0, 1);
	CalciumGluconate = constrain(CalciumGluconate, 0, 1);
	charcoal = constrain(charcoal, 0, 1);


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
	text('methanol: ' + nf(methanol,1,2), 20,20);
	fill(colors[1]);
	text('strychnine: ' + nf(strychnine,1,2), 20,40);
	fill(colors[2]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,60);
	fill(colors[3]);
	text('SnakeVenom: ' + nf(SnakeVenom,1,2), 20,80);
	fill(colors[4]);
	text('arsenic: ' + nf(arsenic,1,2), 20,100);
	fill(colors[5]);
	text('alcohol: ' + nf(alcohol,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(chalk,50,'chalk');
	drawBar(sulphates,200,'sulphates');
	drawBar(CalciumGluconate,350,'CalciumGluconate');
	drawBar(charcoal,500,'charcoal');


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
