/*
802 - The case of Monte Carlo
Stage 4 - Club criminal


Officer: 5148740
CaseNum: 802-3-60620905-5148740

The card sharks from Rossling Polling are not pleased with your stellar performance and suspect foul play. They are challenging you to find a single card in the deck in just one cut.

- First write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers between 10 and 75.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().

Now, the card you are looking for is stored in the cutPoint object. You need to cut the deck at this exact location and the card sharks will be forced to give up their secrets.

- Write a function called deck_cut and call it from setup.
- This should search for card matching cutPoint inside deck.
- Once you've found a match use the JavaScript splice() function to store the cut card and all the elements after from the deck array in the topOfDeck array. 
- You'll need to break the loop once you've done as you don't want to keep searching.
- Finally reverse the elements in topOfDeck so that the card we cut the deck at is the last element and not the first. 
	- Unfortunately, if we use JavaScript's inbuilt reverse() function we’ll be spotted. You’ll have to write this yourself kid. 


*/

var deck = [
  { suit: "Spades", no: "A" },
  { suit: "Spades", no: "2" },
  { suit: "Spades", no: "3" },
  { suit: "Spades", no: "4" },
  { suit: "Spades", no: "5" },
  { suit: "Spades", no: "6" },
  { suit: "Spades", no: "7" },
  { suit: "Spades", no: "8" },
  { suit: "Spades", no: "9" },
  { suit: "Spades", no: "10" },
  { suit: "Spades", no: "J" },
  { suit: "Spades", no: "Q" },
  { suit: "Spades", no: "K" },
  { suit: "Clubs", no: "A" },
  { suit: "Clubs", no: "2" },
  { suit: "Clubs", no: "3" },
  { suit: "Clubs", no: "4" },
  { suit: "Clubs", no: "5" },
  { suit: "Clubs", no: "6" },
  { suit: "Clubs", no: "7" },
  { suit: "Clubs", no: "8" },
  { suit: "Clubs", no: "9" },
  { suit: "Clubs", no: "10" },
  { suit: "Clubs", no: "J" },
  { suit: "Clubs", no: "Q" },
  { suit: "Clubs", no: "K" },
  { suit: "Hearts", no: "A" },
  { suit: "Hearts", no: "2" },
  { suit: "Hearts", no: "3" },
  { suit: "Hearts", no: "4" },
  { suit: "Hearts", no: "5" },
  { suit: "Hearts", no: "6" },
  { suit: "Hearts", no: "7" },
  { suit: "Hearts", no: "8" },
  { suit: "Hearts", no: "9" },
  { suit: "Hearts", no: "10" },
  { suit: "Hearts", no: "J" },
  { suit: "Hearts", no: "Q" },
  { suit: "Hearts", no: "K" },
  { suit: "Diamonds", no: "A" },
  { suit: "Diamonds", no: "2" },
  { suit: "Diamonds", no: "3" },
  { suit: "Diamonds", no: "4" },
  { suit: "Diamonds", no: "5" },
  { suit: "Diamonds", no: "6" },
  { suit: "Diamonds", no: "7" },
  { suit: "Diamonds", no: "8" },
  { suit: "Diamonds", no: "9" },
  { suit: "Diamonds", no: "10" },
  { suit: "Diamonds", no: "J" },
  { suit: "Diamonds", no: "Q" },
  { suit: "Diamonds", no: "K" },
];
var deck_img;
var table_img;
var drawCounter = 0;

var cutPoint = { cardSuit: "Spades", n: "4" };
var topOfDeck = [];

function preload() {
  deck_img = loadImage("deck.png");
  table_img = loadImage("table.png");
}
function setup() {
  createCanvas(table_img.width, table_img.height);
  frameRate(30);

  //call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
  const seed = shuffleSeed();
  shuffleDeck(seed);

  //call your deck_cut function here
  deck_cut();
}

//write your deck_cut function here
function deck_cut() {
  for (let i = 0; i < deck.length; i++) {
    if (cutPoint.cardSuit == deck[i].suit && cutPoint.n == deck[i].no) {
      // Once you've found a match use the JavaScript splice() function to store the cut card and all the elements after from the deck array in the topOfDeck array.
      topOfDeck = deck.splice(i);
      break;
    }
  }

	// Finally reverse the elements in topOfDeck so that the card we cut the deck at is the last element and not the first. 
	const reversedSliceDeck = [];
	for (let i = topOfDeck.length - 1; i >= 0; i--) {
		reversedSliceDeck.push(topOfDeck[i]);
	}
	topOfDeck = reversedSliceDeck;
}

//write your shuffleSeed() function here.
function shuffleSeed() {
  const randomNumbers = [];
  for (let i = 0; i < 52; i++) {
    randomNumbers.push(round(random(10, 75)));
  }

  return randomNumbers;
}

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed) {
  //shuffle the deck by rotating the cards location with the values in
  //shuffleSeed. Repeat this a random number of times between 20 and 50
  var shuffleIterations = parseInt(random(20, 50));
  for (var i = 0; i < shuffleIterations; i++) {
    for (var j = 0; j < deck.length; j++) {
      var tempCard = deck.splice(j, 1);
      var newLoc = (j + shuffleSeed[j]) % 52;
      deck.splice(newLoc, 0, tempCard[0]);
    }
  }
}

function draw() {
  image(table_img, 0, 0);

  if (frameCount % 7 == 0) {
    drawCounter++;
    if (drawCounter == 5) {
      noLoop();
    }
  }
  for (var i = 0; i < drawCounter; i++) {
    if (i < topOfDeck.length) {
      drawCard(topOfDeck[i], 880 + i * 18, 750);
    }
  }
}

function drawCard(card, x, y) {
  var values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

  for (var i = 0; i < suits.length; i++) {
    for (var j = 0; j < values.length; j++) {
      if (card.no == values[j] && card.suit == suits[i]) {
        //img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
        image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
        break;
      }
    }
  }
}
