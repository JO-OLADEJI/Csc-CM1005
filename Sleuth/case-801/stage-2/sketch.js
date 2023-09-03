/*
801
Stage 2: Don Giovanni

Officer: 5148740
CaseNum: 801-1-16956877-5148740

Our person in the box office at the Console City opera house has just informed us that the influential Order of Swartz will be attending Don Giovanni tonight. This vain lot should be easy to spot thanks to their distinguished retro glasses. They are all sitting in the 1st seat of each row. 

- Set the spotlights to shine on the members of the order. 
- Do this by setting the recognised  property of the element in viewers to true. 
- You must use a single for loop to pick out the members of the order

Solve the case using only:
For (not nested)
viewers[ ][ ]


*/

var crowdImg;
var spotlight;

var viewers = [
  [
    { x: 50, y: 50, recognised: false },
    { x: 150, y: 50, recognised: false },
    { x: 250, y: 50, recognised: false },
    { x: 350, y: 50, recognised: false },
    { x: 450, y: 50, recognised: false },
    { x: 550, y: 50, recognised: false },
    { x: 650, y: 50, recognised: false },
    { x: 750, y: 50, recognised: false },
    { x: 850, y: 50, recognised: false },
    { x: 950, y: 50, recognised: false },
  ],
  [
    { x: 50, y: 140, recognised: false },
    { x: 150, y: 140, recognised: false },
    { x: 250, y: 140, recognised: false },
    { x: 350, y: 140, recognised: false },
    { x: 450, y: 140, recognised: false },
    { x: 550, y: 140, recognised: false },
    { x: 650, y: 140, recognised: false },
    { x: 750, y: 140, recognised: false },
    { x: 850, y: 140, recognised: false },
    { x: 950, y: 140, recognised: false },
  ],
  [
    { x: 50, y: 230, recognised: false },
    { x: 150, y: 230, recognised: false },
    { x: 250, y: 230, recognised: false },
    { x: 350, y: 230, recognised: false },
    { x: 450, y: 230, recognised: false },
    { x: 550, y: 230, recognised: false },
    { x: 650, y: 230, recognised: false },
    { x: 750, y: 230, recognised: false },
    { x: 850, y: 230, recognised: false },
    { x: 950, y: 230, recognised: false },
  ],
  [
    { x: 50, y: 320, recognised: false },
    { x: 150, y: 320, recognised: false },
    { x: 250, y: 320, recognised: false },
    { x: 350, y: 320, recognised: false },
    { x: 450, y: 320, recognised: false },
    { x: 550, y: 320, recognised: false },
    { x: 650, y: 320, recognised: false },
    { x: 750, y: 320, recognised: false },
    { x: 850, y: 320, recognised: false },
    { x: 950, y: 320, recognised: false },
  ],
  [
    { x: 50, y: 410, recognised: false },
    { x: 150, y: 410, recognised: false },
    { x: 250, y: 410, recognised: false },
    { x: 350, y: 410, recognised: false },
    { x: 450, y: 410, recognised: false },
    { x: 550, y: 410, recognised: false },
    { x: 650, y: 410, recognised: false },
    { x: 750, y: 410, recognised: false },
    { x: 850, y: 410, recognised: false },
    { x: 950, y: 410, recognised: false },
  ],
  [
    { x: 50, y: 500, recognised: false },
    { x: 150, y: 500, recognised: false },
    { x: 250, y: 500, recognised: false },
    { x: 350, y: 500, recognised: false },
    { x: 450, y: 500, recognised: false },
    { x: 550, y: 500, recognised: false },
    { x: 650, y: 500, recognised: false },
    { x: 750, y: 500, recognised: false },
    { x: 850, y: 500, recognised: false },
    { x: 950, y: 500, recognised: false },
  ],
  [
    { x: 50, y: 590, recognised: false },
    { x: 150, y: 590, recognised: false },
    { x: 250, y: 590, recognised: false },
    { x: 350, y: 590, recognised: false },
    { x: 450, y: 590, recognised: false },
    { x: 550, y: 590, recognised: false },
    { x: 650, y: 590, recognised: false },
    { x: 750, y: 590, recognised: false },
    { x: 850, y: 590, recognised: false },
    { x: 950, y: 590, recognised: false },
  ],
  [
    { x: 50, y: 680, recognised: false },
    { x: 150, y: 680, recognised: false },
    { x: 250, y: 680, recognised: false },
    { x: 350, y: 680, recognised: false },
    { x: 450, y: 680, recognised: false },
    { x: 550, y: 680, recognised: false },
    { x: 650, y: 680, recognised: false },
    { x: 750, y: 680, recognised: false },
    { x: 850, y: 680, recognised: false },
    { x: 950, y: 680, recognised: false },
  ],
  [
    { x: 50, y: 770, recognised: false },
    { x: 150, y: 770, recognised: false },
    { x: 250, y: 770, recognised: false },
    { x: 350, y: 770, recognised: false },
    { x: 450, y: 770, recognised: false },
    { x: 550, y: 770, recognised: false },
    { x: 650, y: 770, recognised: false },
    { x: 750, y: 770, recognised: false },
    { x: 850, y: 770, recognised: false },
    { x: 950, y: 770, recognised: false },
  ],
  [
    { x: 50, y: 860, recognised: false },
    { x: 150, y: 860, recognised: false },
    { x: 250, y: 860, recognised: false },
    { x: 350, y: 860, recognised: false },
    { x: 450, y: 860, recognised: false },
    { x: 550, y: 860, recognised: false },
    { x: 650, y: 860, recognised: false },
    { x: 750, y: 860, recognised: false },
    { x: 850, y: 860, recognised: false },
    { x: 950, y: 860, recognised: false },
  ],
];

function setup() {
  createCanvas(1100, 1100);

  crowdImg = loadImage("crowd.png");
  spotlight = loadImage("spotliøght.png");
}

function draw() {
  image(crowdImg, 0, 0);
  ////////////YOUR CODE GOES HERE////////////////////////
  // console.log(viewers[0][0].recognised);
  for (let i = 0; i < viewers.length; i++) {
    viewers[i][0].recognised = true;
  }

  ///////////DON'T CHANGE ANY CODE BELOW HERE////////////
  blendMode(BLEND);
  background(80);
  highlight();
  blendMode(DARKEST);
  image(crowdImg, 0, 0);
}

function highlight() {
  fill(255, 0, 0, 100);

  for (var i = 0; i < viewers.length; i++) {
    for (var j = 0; j < viewers[i].length; j++) {
      if (viewers[i][j].recognised) {
        image(spotlight, viewers[i][j].x, viewers[i][j].y, 100, 100);
      }
    }
  }
}
