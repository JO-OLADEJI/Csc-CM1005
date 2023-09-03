/*
801
Stage 1: Rigoletto

Officer: 5148740
CaseNum: 801-0-87209631-5148740

At the rotten core of Console City are a series of secretive orders who pull all the criminal strings. If we get to them we can clean up this town for good. 

Now we have a chance - the Order of The Knuth's will be at the command performance of Rigoletto at the console city Opera house tonight. Our person on the inside is working the box office. We’ve got intell and access to the lighting desk. 

- Set the spotlights to shine on the members of the order. 
- Do this by setting the identified  property of the element in patrons to true. 
- We know that one member of the order is seated in the 10th row, 2nd seat
- But you can identify the other 7 members of the order by their trademark tiara. 

There are many ways to complete the case but you should only use patrons[#][#] to update the property.


*/

var crowdImg;
var spotlight;

var patrons = [
  [
    { x: 50, y: 50, identified: false },
    { x: 150, y: 50, identified: false },
    { x: 250, y: 50, identified: false },
    { x: 350, y: 50, identified: false },
    { x: 450, y: 50, identified: false },
    { x: 550, y: 50, identified: false },
    { x: 650, y: 50, identified: false },
    { x: 750, y: 50, identified: false },
    { x: 850, y: 50, identified: false },
    { x: 950, y: 50, identified: false },
  ],
  [
    { x: 50, y: 140, identified: false },
    { x: 150, y: 140, identified: false },
    { x: 250, y: 140, identified: false },
    { x: 350, y: 140, identified: false },
    { x: 450, y: 140, identified: false },
    { x: 550, y: 140, identified: false },
    { x: 650, y: 140, identified: false },
    { x: 750, y: 140, identified: false },
    { x: 850, y: 140, identified: false },
    { x: 950, y: 140, identified: false },
  ],
  [
    { x: 50, y: 230, identified: false },
    { x: 150, y: 230, identified: false },
    { x: 250, y: 230, identified: false },
    { x: 350, y: 230, identified: false },
    { x: 450, y: 230, identified: false },
    { x: 550, y: 230, identified: false },
    { x: 650, y: 230, identified: false },
    { x: 750, y: 230, identified: false },
    { x: 850, y: 230, identified: false },
    { x: 950, y: 230, identified: false },
  ],
  [
    { x: 50, y: 320, identified: false },
    { x: 150, y: 320, identified: false },
    { x: 250, y: 320, identified: false },
    { x: 350, y: 320, identified: false },
    { x: 450, y: 320, identified: false },
    { x: 550, y: 320, identified: false },
    { x: 650, y: 320, identified: false },
    { x: 750, y: 320, identified: false },
    { x: 850, y: 320, identified: false },
    { x: 950, y: 320, identified: false },
  ],
  [
    { x: 50, y: 410, identified: false },
    { x: 150, y: 410, identified: false },
    { x: 250, y: 410, identified: false },
    { x: 350, y: 410, identified: false },
    { x: 450, y: 410, identified: false },
    { x: 550, y: 410, identified: false },
    { x: 650, y: 410, identified: false },
    { x: 750, y: 410, identified: false },
    { x: 850, y: 410, identified: false },
    { x: 950, y: 410, identified: false },
  ],
  [
    { x: 50, y: 500, identified: false },
    { x: 150, y: 500, identified: false },
    { x: 250, y: 500, identified: false },
    { x: 350, y: 500, identified: false },
    { x: 450, y: 500, identified: false },
    { x: 550, y: 500, identified: false },
    { x: 650, y: 500, identified: false },
    { x: 750, y: 500, identified: false },
    { x: 850, y: 500, identified: false },
    { x: 950, y: 500, identified: false },
  ],
  [
    { x: 50, y: 590, identified: false },
    { x: 150, y: 590, identified: false },
    { x: 250, y: 590, identified: false },
    { x: 350, y: 590, identified: false },
    { x: 450, y: 590, identified: false },
    { x: 550, y: 590, identified: false },
    { x: 650, y: 590, identified: false },
    { x: 750, y: 590, identified: false },
    { x: 850, y: 590, identified: false },
    { x: 950, y: 590, identified: false },
  ],
  [
    { x: 50, y: 680, identified: false },
    { x: 150, y: 680, identified: false },
    { x: 250, y: 680, identified: false },
    { x: 350, y: 680, identified: false },
    { x: 450, y: 680, identified: false },
    { x: 550, y: 680, identified: false },
    { x: 650, y: 680, identified: false },
    { x: 750, y: 680, identified: false },
    { x: 850, y: 680, identified: false },
    { x: 950, y: 680, identified: false },
  ],
  [
    { x: 50, y: 770, identified: false },
    { x: 150, y: 770, identified: false },
    { x: 250, y: 770, identified: false },
    { x: 350, y: 770, identified: false },
    { x: 450, y: 770, identified: false },
    { x: 550, y: 770, identified: false },
    { x: 650, y: 770, identified: false },
    { x: 750, y: 770, identified: false },
    { x: 850, y: 770, identified: false },
    { x: 950, y: 770, identified: false },
  ],
  [
    { x: 50, y: 860, identified: false },
    { x: 150, y: 860, identified: false },
    { x: 250, y: 860, identified: false },
    { x: 350, y: 860, identified: false },
    { x: 450, y: 860, identified: false },
    { x: 550, y: 860, identified: false },
    { x: 650, y: 860, identified: false },
    { x: 750, y: 860, identified: false },
    { x: 850, y: 860, identified: false },
    { x: 950, y: 860, identified: false },
  ],
];

function setup() {
  createCanvas(1100, 1100);

  crowdImg = loadImage("crowd.png");
  spotlight = loadImage("spotlight.png");
}

function draw() {
  image(crowdImg, 0, 0);
  ////////////YOUR CODE GOES HERE////////////////////////
	patrons[9][1].identified = true;
	patrons[8][1].identified = true;
	patrons[5][6].identified = true;
	patrons[0][5].identified = true;
	patrons[0][6].identified = true;
	patrons[2][2].identified = true;
	patrons[4][0].identified = true;
	patrons[4][5].identified = true;

  ///////////DON'T CHANGE ANY CODE BELOW HERE////////////
  blendMode(BLEND);
  background(80);
  highlight();
  blendMode(DARKEST);
  image(crowdImg, 0, 0);
}

function highlight() {
  fill(255, 0, 0, 100);

  for (var i = 0; i < patrons.length; i++) {
    for (var j = 0; j < patrons[i].length; j++) {
      if (patrons[i][j].identified) {
        image(spotlight, patrons[i][j].x, patrons[i][j].y, 100, 100);
      }
    }
  }
}
