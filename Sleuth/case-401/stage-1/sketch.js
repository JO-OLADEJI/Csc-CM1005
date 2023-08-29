/*

Officer: 5148740
CaseNum: 401-0-47173935-5148740

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the population down with a potent poison. Word has it that he is smuggling his venomous filth via a streetside weiner stand. Hundreds of people have been affected, and the municipal water company tells me that their sewers are at full capacity. This is no laughing matter. I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:

	- If novichok dips below 0.28, decrement antivenom by 0.01
	- When cyanide dips below 0.39, increment antivenom by 0.05
	- If cyanide dips below 0.38, reduce methylene by 0.05
	- When methanol dips below 0.29, increment methylene by 0.05
	- If cyanide dips below 0.32, try decreasing insulin by 0.03
	- If methanol dips below 0.37, try increasing insulin by 0.03


Your conditional statements should consider the following poisons:

	- novichok
	- methanol
	- cyanide


Your conditional statements should modify the following antidotes:

	- antivenom
	- methylene
	- insulin


- There are many ways to complete this task but you should only use the following commands and operators:

	if(){}
	>
	<
	+=
	-=

*/

//Declare the poison variables
var novichok;
var methanol;
var cyanide;


//Declare the antidote variables
var antivenom;
var methylene;
var insulin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	novichok = 0.5;
	methanol = 0.5;
	cyanide = 0.5;
	antivenom = 0.5;
	methylene = 0.5;
	insulin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
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
	// If novichok dips below 0.28, decrement antivenom by 0.01
	if (novichok < 0.28) {
		antivenom -= 0.01;
	}
	
	// - If cyanide dips below 0.32, try decreasing insulin by 0.03
	if (cyanide < 0.32) {
		insulin -= 0.03;
	}
	
	// - If cyanide dips below 0.38, reduce methylene by 0.05
	if (cyanide < 0.38) {
		methylene -= 0.05;
	}
	
	// - When cyanide dips below 0.39, increment antivenom by 0.05
	if (cyanide < 0.39) {
		antivenom += 0.05;
	}

	// - When methanol dips below 0.29, increment methylene by 0.05
	if (methanol < 0.29) {
		methylene += 0.05;
	}

	// - If methanol dips below 0.37, try increasing insulin by 0.03
	if (methanol < 0.37) {
		insulin += 0.03;
	}



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	novichok = nextValue(graphs[0],novichok);
	methanol = nextValue(graphs[1],methanol);
	cyanide = nextValue(graphs[2],cyanide);


	antivenom = constrain(antivenom, 0, 1);
	methylene = constrain(methylene, 0, 1);
	insulin = constrain(insulin, 0, 1);


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
	text('novichok: ' + nf(novichok,1,2), 20,20);
	fill(colors[1]);
	text('methanol: ' + nf(methanol,1,2), 20,40);
	fill(colors[2]);
	text('cyanide: ' + nf(cyanide,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(antivenom,50,'antivenom');
	drawBar(methylene,200,'methylene');
	drawBar(insulin,350,'insulin');


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
