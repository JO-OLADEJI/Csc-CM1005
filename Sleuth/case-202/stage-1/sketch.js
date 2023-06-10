/*

Officer: 5148740
CaseNum: 202-0-77696317-5148740

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Lime Green text (see https://www.w3.org/TR/css3-iccprof#numerical). 
Only comment out text commands - leave fill & stroke commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(567,715);
	textFont(letterFont);
	textSize(33);
}

function draw()
{
	background(255);

	fill(205,133,63);
	// text("am", 138,236);
	fill(139,0,139);
	// text("knew", 141,169);
	fill(233,150,122);
	// text("face,", 22,169);
	fill(135,206,250);
	// text("Bob", 18,590);
	fill(0,128,0);
	// text("I", 98,236);
	fill(205,133,63);
	// text("the", 342,311);
	fill(0,0,255);
	// text("your", 141,418);
	fill(218,165,32);
	// text("those", 285,169);
	// text("true", 317,203);
	fill(139,0,0);
	// text("eyes.", 388,418);
	fill(107,142,35);
	// text("your", 345,135);
	fill(160,82,45);
	// text("your", 90,270);
	// text("nce", 111,383);
	// text("alive", 106,344);
	fill(0,0,128);
	// text("alone", 184,236);
	// text("of", 96,418);
	fill(32,178,170);
	// text("music", 453,270);
	// text("the", 294,236);
	fill(100,149,237);
	// text("rp.", 147,311);
	fill(144,238,144);
	// text("sunny", 126,458);
	fill(30,144,255);
	// text("last", 214,383);
	fill(128,0,128);
	// text("moment", 94,135);
	// text("be", 291,311);
	// text("in", 260,458);
	fill(255,127,80);
	// text("the", 450,99);
	fill(199,21,133);
	// text("ovely", 73,33);
	fill(0,100,0);
	// text("quiet", 351,236);
	// text("x", 82,590);
	fill(220,20,60);
	// text("person", 21,344);
	fill(238,232,170);
	// text("t", 24,418);
	fill(148,0,211);
	// text("kisses,", 147,524);
	fill(173,255,47);
	// text("my", 78,458);
	// text("your", 324,344);
	fill(220,20,60);
	// text("Daisy,", 149,33);
	fill(154,205,50);
	// text("April.", 297,458);
	// text("hear", 20,270);
	// text("?", 342,99);
	fill(210,105,30);
	// text("secon", 429,169);
	// text("I", 338,383);
	// text("ds", 487,169);
	fill(255,215,0);
	// text("luckiest", 399,311);
	// text("one", 261,203);
	// text("I", 238,344);
	fill(0,0,139);
	// text("that", 25,203);
	// text("blessed", 344,270);
	fill(34,139,34);
	// text("hink", 32,418);
	// text("my", 213,203);
	// text("must", 229,311);
	fill(176,224,230);
	// text("saw", 290,135);
	fill(50,205,50);
	text("May", 18,99);
	text("first", 24,135);
	text("chosen", 385,344);
	fill(0,255,255);
	// text("Oh", 18,33);
	fill(0,100,0);
	// text("love.", 379,203);
	fill(147,112,219);
	// text("green", 301,418);
	// text("It", 446,203);
	fill(218,112,214);
	// text("From", 379,99);
	// text("like", 226,270);
	fill(0,0,128);
	// text("makea", 122,99);
	fill(0,206,209);
	// text("and", 90,524);
	fill(107,142,35);
	// text("lovely", 406,135);
	fill(0,0,255);
	// text("that", 178,344);
	fill(139,69,19);
	// text("only", 429,383);
	// text("I", 101,169);
	fill(0,0,139);
	// text("of", 19,311);
	fill(25,25,112);
	// text("that", 190,135);
	// text("you", 85,203);
	fill(72,209,204);
	// text("I", 189,311);
	fill(124,252,0);
	// text("You", 469,418);
	// text("ha", 121,311);
	fill(0,0,128);
	// text("when", 23,236);
	fill(255,0,255);
	// text("voice", 151,270);
	// text("can", 378,383);
	fill(240,128,128);
	// text("were", 137,203);
	// text("I", 250,135);
	fill(128,128,0);
	// text("si", 93,383);
	// text("the", 64,311);
	fill(0,139,139);
	// text("our", 167,383);
	fill(244,164,96);
	// text("in", 257,236);
	// text("l", 68,33);
	fill(144,238,144);
	// text("am", 278,344);
	fill(244,164,96);
	// text("few", 362,169);
	fill(0,0,255);
	// text("day", 200,458);
	fill(0,0,139);
	// text("confession", 210,99);
	fill(0,191,255);
	// text("Ever", 18,383);
	fill(153,50,204);
	// text("darling,", 202,418);
	// text("I", 82,99);
	fill(50,205,50);
	text("date", 267,383);
	fill(255,105,180);
	// text("that", 428,236);
	fill(50,205,50);
	text("is", 494,203);
	fill(0,0,128);
	// text("from", 215,169);
	fill(244,164,96);
	// text("I", 488,236);
	fill(255,105,180);
	// text("the", 287,270);
	fill(128,128,0);
	// text("are", 22,458);
	// text("Love", 18,524);



}
