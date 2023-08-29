/*

Officer: 5148740
CaseNum: 401-3-53066294-5148740

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final stand he has set up his own cupcake shop. The laced cupcakes look delicious but they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to do the following.

	- When sarin dips below 0.69, whilst at the same time, SnakeVenom goes above 0.66 or chlorine dips below 0.59, decrease calcium_gluconate by 0.02
	- When warfarin dips below 0.32 and polonium dips below 0.74, or on the other hand, cyanide goes above 0.58, increase calcium_gluconate by 0.02
	- If polonium dips below 0.59, lead goes above 0.67, and also chlorine dips below 0.7, decrement aspirin by 0.04
	- If either sarin dips below 0.53, cyanide dips below 0.45, or perhaps SnakeVenom goes above 0.48, try increasing aspirin by 0.01
	- If sarin goes above 0.65 or chlorine goes above 0.5, whilst at the same time, mercury dips below 0.64, reduce ethanol by 0.02
	- When lead dips below 0.33 or polonium goes above 0.43, whilst at the same time, cyanide dips below 0.56 and SnakeVenom dips below 0.29, raise ethanol by 0.01
	- If sarin dips below 0.51 and mercury dips below 0.75, or on the other hand, SnakeVenom goes above 0.51 and lead dips below 0.73, try decreasing sodium_bicarbonate by 0.04
	- When polonium goes above 0.48, warfarin goes above 0.32, and also cyanide goes above 0.36, increase sodium_bicarbonate by 0.03
	- When polonium goes above 0.42 or SnakeVenom dips below 0.7, whilst at the same time, sarin dips below 0.66 and mercury dips below 0.7, decrease charcoal by 0.02
	- If cyanide dips below 0.65 and lead goes above 0.4, whilst at the same time, warfarin goes above 0.63 or chlorine goes above 0.7, increment charcoal by 0.04


Your conditional statements should consider the following poisons:

	- SnakeVenom
	- lead
	- polonium
	- warfarin
	- mercury
	- cyanide
	- sarin
	- chlorine


Your conditional statements should modify the following antidotes:

	- calcium_gluconate
	- aspirin
	- ethanol
	- sodium_bicarbonate
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
var SnakeVenom;
var lead;
var polonium;
var warfarin;
var mercury;
var cyanide;
var sarin;
var chlorine;


//Declare the antidote variables
var calcium_gluconate;
var aspirin;
var ethanol;
var sodium_bicarbonate;
var charcoal;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	SnakeVenom = 0.5;
	lead = 0.5;
	polonium = 0.5;
	warfarin = 0.5;
	mercury = 0.5;
	cyanide = 0.5;
	sarin = 0.5;
	chlorine = 0.5;
	calcium_gluconate = 0.5;
	aspirin = 0.5;
	ethanol = 0.5;
	sodium_bicarbonate = 0.5;
	charcoal = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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

	// - When sarin dips below 0.69, whilst at the same time, SnakeVenom goes above 0.66 or chlorine dips below 0.59, decrease calcium_gluconate by 0.02
	if (sarin < 0.69 && (SnakeVenom > 0.66 || chlorine < 0.59)) {
		calcium_gluconate -= 0.02;
	}

	// - When warfarin dips below 0.32 and polonium dips below 0.74, or on the other hand, cyanide goes above 0.58, increase calcium_gluconate by 0.02
	if ((warfarin < 0.32 && polonium < 0.74) || cyanide > 0.58) {
		calcium_gluconate += 0.02
	}

	// - If polonium dips below 0.59, lead goes above 0.67, and also chlorine dips below 0.7, decrement aspirin by 0.04
	if (polonium < 0.59 && lead > 0.67 && chlorine < 0.7) {
		aspirin -= 0.04;
	}

	// - If either sarin dips below 0.53, cyanide dips below 0.45, or perhaps SnakeVenom goes above 0.48, try increasing aspirin by 0.01
	if (sarin < 0.53 || cyanide < 0.45 || SnakeVenom > 0.48) {
		aspirin += 0.01;
	}

	// - If sarin goes above 0.65 or chlorine goes above 0.5, whilst at the same time, mercury dips below 0.64, reduce ethanol by 0.02
	if ((sarin > 0.65 || chlorine > 0.5) && mercury < 0.64) {
		ethanol -= 0.02;
	}

	// - When lead dips below 0.33 or polonium goes above 0.43, whilst at the same time, cyanide dips below 0.56 and SnakeVenom dips below 0.29, raise ethanol by 0.01
	if ((lead < 0.33 || polonium > 0.43) && (cyanide < 0.56 && SnakeVenom < 0.29)) {
		ethanol += 0.01;
	}

	// - If sarin dips below 0.51 and mercury dips below 0.75, or on the other hand, SnakeVenom goes above 0.51 and lead dips below 0.73, try decreasing sodium_bicarbonate by 0.04
	if ((sarin < 0.51 && mercury < 0.75) || (SnakeVenom > 0.51 && lead < 0.73)) {
		sodium_bicarbonate -= 0.04;
	}

	// - When polonium goes above 0.48, warfarin goes above 0.32, and also cyanide goes above 0.36, increase sodium_bicarbonate by 0.03
	if (polonium > 0.48 && warfarin > 0.32 && cyanide > 0.36) {
		sodium_bicarbonate += 0.03;
	}

	// - When polonium goes above 0.42 or SnakeVenom dips below 0.7, whilst at the same time, sarin dips below 0.66 and mercury dips below 0.7, decrease charcoal by 0.02
	if ((polonium > 0.42 || SnakeVenom < 0.7) && (sarin < 0.66 && mercury < 0.7)) {
		charcoal -= 0.02;
	}

	// - If cyanide dips below 0.65 and lead goes above 0.4, whilst at the same time, warfarin goes above 0.63 or chlorine goes above 0.7, increment charcoal by 0.04
	if ((cyanide < 0.65 && lead > 0.4) && (warfarin > 0.63 || chlorine > 0.7)) {
		charcoal += 0.04;
	}




	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	SnakeVenom = nextValue(graphs[0],SnakeVenom);
	lead = nextValue(graphs[1],lead);
	polonium = nextValue(graphs[2],polonium);
	warfarin = nextValue(graphs[3],warfarin);
	mercury = nextValue(graphs[4],mercury);
	cyanide = nextValue(graphs[5],cyanide);
	sarin = nextValue(graphs[6],sarin);
	chlorine = nextValue(graphs[7],chlorine);


	calcium_gluconate = constrain(calcium_gluconate, 0, 1);
	aspirin = constrain(aspirin, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	sodium_bicarbonate = constrain(sodium_bicarbonate, 0, 1);
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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('SnakeVenom: ' + nf(SnakeVenom,1,2), 20,20);
	fill(colors[1]);
	text('lead: ' + nf(lead,1,2), 20,40);
	fill(colors[2]);
	text('polonium: ' + nf(polonium,1,2), 20,60);
	fill(colors[3]);
	text('warfarin: ' + nf(warfarin,1,2), 20,80);
	fill(colors[4]);
	text('mercury: ' + nf(mercury,1,2), 20,100);
	fill(colors[5]);
	text('cyanide: ' + nf(cyanide,1,2), 20,120);
	fill(colors[6]);
	text('sarin: ' + nf(sarin,1,2), 20,140);
	fill(colors[7]);
	text('chlorine: ' + nf(chlorine,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(calcium_gluconate,50,'calcium_gluconate');
	drawBar(aspirin,200,'aspirin');
	drawBar(ethanol,350,'ethanol');
	drawBar(sodium_bicarbonate,500,'sodium_bicarbonate');
	drawBar(charcoal,650,'charcoal');


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
