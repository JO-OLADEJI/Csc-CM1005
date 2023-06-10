/*

Officer: 5148740
CaseNum: 202-3-39731277-5148740

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Khaki filled text with a Dark Turquoise outline in Melissa font (see https://www.w3.org/TR/css3-iccprof#numerical).
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(659,497);
	textSize(32);
}

function draw()
{
	background(255);

	fill(139,69,19);
	stroke(210,105,30);
	textFont(Diggity);
	// text("a", 234,165);
	fill(139,0,139);
	stroke(0,0,255);
	textFont(Melissa);
	// text("more", 12,263);
	push();
	fill(220,20,60);
	stroke(0,139,139);
	textFont(RonsFont);
	// text("send", 457,197);
	pop();
	stroke(0,100,0);
	textFont(Diggity);
	// text("money", 221,197);
	fill(222,184,135);
	// text("You", 578,197);
	fill(152,251,152);
	stroke(154,205,50);
	// text("avoi", 281,130);
	fill(0,255,127);
	stroke(153,50,204);
	textFont(Melissa);
	// text("Are", 191,130);
	fill(160,82,45);
	stroke(255,0,255);
	textFont(RonsFont);
	// text("Is", 464,96);
	fill(148,0,211);
	stroke(0,100,0);
	textFont(Ballpointprint);
	// text("can", 79,263);
	fill(123,104,238);
	stroke(127,255,0);
	// text("you", 230,130);
	push();
	stroke(0,206,209);
	textFont(RonsFont);
	// text("darling", 65,32);
	pop();
	stroke(184,134,11);
	textFont(Diggity);
	// text("sometimes.", 221,230);
	fill(255,127,80);
	stroke(50,205,50);
	textFont(Melissa);
	// text("no", 64,96);
	push();
	fill(0,128,128);
	stroke(255,165,0);
	textFont(RonsFont);
	// text("My", 18,32);
	pop();
	stroke(0,100,0);
	textFont(Diggity);
	// text("longer", 91,96);
	fill(25,25,112);
	stroke(220,20,60);
	textFont(Ballpointprint);
	// text("and", 342,165);
	fill(0,100,0);
	stroke(75,0,130);
	textFont(RonsFont);
	// text("break", 260,165);
	fill(50,205,50);
	stroke(128,0,0);
	textFont(Melissa);
	// text("not", 414,230);
	fill(0,250,154);
	stroke(0,139,139);
	textFont(RonsFont);
	// text("we", 541,130);
	fill(148,0,211);
	stroke(0,191,255);
	textFont(Diggity);
	// text("I", 394,197);
	fill(152,251,152);
	stroke(0,255,127);
	// text("me", 368,130);
	fill(30,144,255);
	stroke(255,69,0);
	// text("away", 129,165);
	push();
	fill(255,140,0);
	stroke(218,165,32);
	// text("you", 81,197);
	pop();
	fill(139,0,0);
	stroke(148,0,211);
	textFont(Ballpointprint);
	// text("Daisy", 13,391);
	fill(255,105,180);
	stroke(0,250,154);
	textFont(Melissa);
	// text("x", 99,391);
	fill(152,251,152);
	stroke(220,20,60);
	// text("can", 27,96);
	fill(205,133,63);
	stroke(46,139,87);
	textFont(Ballpointprint);
	// text("sho", 19,165);
	fill(138,43,226);
	stroke(0,255,127);
	textFont(RonsFont);
	// text("these", 218,96);
	push();
	fill(32,178,170);
	stroke(0,0,205);
	textFont(Ballpointprint);
	// text("sure", 451,230);
	pop();
	fill(178,34,34);
	textFont(Diggity);
	// text("I", 11,96);
	push();
	fill(0,255,127);
	stroke(0,255,255);
	textFont(RonsFont);
	// text("the", 374,263);
	pop();
	fill(255,99,71);
	textFont(RonsFont);
	// text("sort", 399,165);
	fill(50,205,50);
	stroke(50,205,50);
	// text("secrets,", 258,263);
	fill(233,150,122);
	stroke(0,0,205);
	textFont(Diggity);
	// text("all", 515,165);
	fill(222,184,135);
	stroke(139,69,19);
	// text("can", 410,197);
	fill(240,230,140);
	stroke(0,139,139);
	textFont(Melissa);
	// text("continual", 292,96);
	fill(127,255,212);
	stroke(255,255,0);
	textFont(Diggity);
	// text("?", 167,130);
	fill(255,165,0);
	stroke(0,191,255);
	// text("our", 505,96);
	fill(0,206,209);
	stroke(210,105,30);
	textFont(RonsFont);
	// text("e", 446,130);
	fill(107,142,35);
	stroke(218,165,32);
	textFont(Ballpointprint);
	// text("I'm", 341,230);
	push();
	fill(153,50,204);
	stroke(154,205,50);
	textFont(Melissa);
	// text("so,", 359,197);
	pop();
	fill(255,165,0);
	stroke(255,140,0);
	textFont(Diggity);
	// text("this", 466,165);
	fill(25,25,112);
	stroke(0,0,128);
	// text("Forever", 11,327);
	fill(127,255,0);
	stroke(0,128,0);
	// text("out.", 545,165);
	// text("ding", 320,130);
	fill(0,100,0);
	textFont(RonsFont);
	// text("?", 295,197);
	push();
	fill(240,230,140);
	stroke(0,206,209);
	textFont(Melissa);
	text("go", 101,165);
	text("safe", 118,130);
	pop();
	fill(218,112,214);
	// text("rhaps", 459,130);
	push();
	fill(0,128,0);
	stroke(128,128,0);
	// text("The", 210,263);
	pop();
	fill(255,140,0);
	stroke(255,0,255);
	// text("Bob,", 166,32);
	fill(128,0,0);
	stroke(0,0,205);
	textFont(Ballpointprint);
	// text("uld", 52,165);
	fill(173,255,47);
	stroke(255,0,255);
	textFont(RonsFont);
	// text("delays.", 374,96);
	push();
	fill(186,85,211);
	stroke(139,0,0);
	textFont(Diggity);
	// text("take", 130,263);
	pop();
	fill(176,224,230);
	stroke(0,100,0);
	// text("P", 428,130);
	fill(238,232,170);
	stroke(34,139,34);
	// text("guarded", 99,230);
	fill(233,150,122);
	stroke(0,191,255);
	textFont(Melissa);
	// text("short", 128,197);
	fill(34,139,34);
	stroke(178,34,34);
	// text("relationship", 9,130);
	fill(135,206,235);
	stroke(124,252,0);
	// text("?", 410,130);
	fill(34,139,34);
	stroke(139,0,139);
	// text("?", 192,263);
	stroke(139,0,0);
	textFont(Ballpointprint);
	// text("Are", 20,197);
	fill(0,139,139);
	stroke(75,0,130);
	textFont(Diggity);
	// text("of", 185,197);
	push();
	fill(135,206,250);
	stroke(160,82,45);
	// text("I", 63,263);
	pop();
	fill(0,0,128);
	stroke(32,178,170);
	textFont(Ballpointprint);
	// text("how", 514,230);
	fill(210,105,30);
	stroke(34,139,34);
	textFont(Melissa);
	// text("so", 70,230);
	push();
	fill(240,230,140);
	stroke(0,206,209);
	text("ignore", 159,96);
	text("for", 198,165);
	pop();
	fill(255,0,0);
	stroke(255,215,0);
	textFont(RonsFont);
	// text("If", 317,197);
	fill(255,69,0);
	stroke(46,139,87);
	textFont(Diggity);
	// text("yours,", 105,327);
	fill(255,99,71);
	stroke(199,21,133);
	textFont(Melissa);
	// text("much", 570,230);
	fill(240,230,140);
	stroke(0,206,209);
	text("cash", 529,197);
	fill(176,224,230);
	textFont(RonsFont);
	// text("are", 13,230);
	fill(34,139,34);
	stroke(0,255,127);
	// text("silence.", 425,263);



}
