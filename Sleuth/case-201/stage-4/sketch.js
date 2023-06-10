/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 5148740
CaseNum: 201-3-59576875-5148740

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

HINT: You should only need around 20 vertices to draw round the judge. Make sure you close your shape!

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  beginShape()
  endShape()
  vertex()

*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
        vertex(343, 219);
        vertex(376, 260);
        vertex(507, 128);
        vertex(523, 144);
        vertex(587, 91);

        vertex(668, 177);
        vertex(606, 181);
        vertex(641, 200);
        vertex(435, 365);
        vertex(517, 458);
        
        vertex(527, 501);
        vertex(497, 512);
        vertex(480, 467);
        vertex(424, 424);
        vertex(357, 428);
        
        vertex(301, 359);
        vertex(332, 278);
        vertex(326, 257);
        vertex(266, 274);
        vertex(262, 241);

    endShape(CLOSE);


    //A helpful mouse pointer
	push();
        fill(0);
        noStroke();
        text(mouseX + "," + mouseY, mouseX,mouseY);
    pop();

}
