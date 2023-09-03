/*
802 - The case of Monte Carlo
Stage 3 - Counting Cards


Officer: 5148740
CaseNum: 802-2-65966383-5148740

These sharks don’t mess about. One hand, winner takes all. What kind of chief would I be if I let you go in alone! I’ve counted the cards and I know what you need to win. Make sure you deal yourself the hand in win_hand from the deck and store it in the hand array.

- Write a function called setWinningHand and call it from setup.
- The function should take each card in win_hand and seacrh for a match in cards.
- Matching cards should be added to the hand array
- You'll need to use a nested for loop and break statement in the inner loop to stop searching once you've found a match.

- You also need to write a shuffleSeed() function. 
- This needs to return an array of 52 random integers between 8 and 64.
- Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
- Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().


*/

var cards = [
  { card_suit: "Spades", number: "A" },
  { card_suit: "Spades", number: "2" },
  { card_suit: "Spades", number: "3" },
  { card_suit: "Spades", number: "4" },
  { card_suit: "Spades", number: "5" },
  { card_suit: "Spades", number: "6" },
  { card_suit: "Spades", number: "7" },
  { card_suit: "Spades", number: "8" },
  { card_suit: "Spades", number: "9" },
  { card_suit: "Spades", number: "10" },
  { card_suit: "Spades", number: "J" },
  { card_suit: "Spades", number: "Q" },
  { card_suit: "Spades", number: "K" },
  { card_suit: "Clubs", number: "A" },
  { card_suit: "Clubs", number: "2" },
  { card_suit: "Clubs", number: "3" },
  { card_suit: "Clubs", number: "4" },
  { card_suit: "Clubs", number: "5" },
  { card_suit: "Clubs", number: "6" },
  { card_suit: "Clubs", number: "7" },
  { card_suit: "Clubs", number: "8" },
  { card_suit: "Clubs", number: "9" },
  { card_suit: "Clubs", number: "10" },
  { card_suit: "Clubs", number: "J" },
  { card_suit: "Clubs", number: "Q" },
  { card_suit: "Clubs", number: "K" },
  { card_suit: "Hearts", number: "A" },
  { card_suit: "Hearts", number: "2" },
  { card_suit: "Hearts", number: "3" },
  { card_suit: "Hearts", number: "4" },
  { card_suit: "Hearts", number: "5" },
  { card_suit: "Hearts", number: "6" },
  { card_suit: "Hearts", number: "7" },
  { card_suit: "Hearts", number: "8" },
  { card_suit: "Hearts", number: "9" },
  { card_suit: "Hearts", number: "10" },
  { card_suit: "Hearts", number: "J" },
  { card_suit: "Hearts", number: "Q" },
  { card_suit: "Hearts", number: "K" },
  { card_suit: "Diamonds", number: "A" },
  { card_suit: "Diamonds", number: "2" },
  { card_suit: "Diamonds", number: "3" },
  { card_suit: "Diamonds", number: "4" },
  { card_suit: "Diamonds", number: "5" },
  { card_suit: "Diamonds", number: "6" },
  { card_suit: "Diamonds", number: "7" },
  { card_suit: "Diamonds", number: "8" },
  { card_suit: "Diamonds", number: "9" },
  { card_suit: "Diamonds", number: "10" },
  { card_suit: "Diamonds", number: "J" },
  { card_suit: "Diamonds", number: "Q" },
  { card_suit: "Diamonds", number: "K" },
];
var deck_img;
var table_img;
var drawCounter = 0;

var win_hand = [
  { type: "Spades", n: "Q" },
  { type: "Hearts", n: "10" },
  { type: "Spades", n: "J" },
  { type: "Diamonds", n: "K" },
  { type: "Clubs", n: "K" },
];
var hand = [];

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

  //call your setWinningHand function here
  setWinningHand();
}

//write your setWinningHand function here
function setWinningHand() {
  for (let i = 0; i < win_hand.length; i++) {
    for (let j = 0; j < cards.length; j++) {
      if (
        win_hand[i].type == cards[j].card_suit &&
        win_hand[i].n == cards[j].number
      ) {
				hand.push(cards[j]);
				break;
      }
    }
  }
}

//write your shuffleSeed() function here.
function shuffleSeed() {
	const randomIntegers = [];
	for (let i = 0; i < 52; i++) {
		randomIntegers.push(round(random(8, 64)));
	}

	return randomIntegers;
}

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed) {
  //shuffle the deck by rotating the cards location with the values in
  //shuffleSeed. Repeat this a random number of times between 20 and 50
  var shuffleIterations = parseInt(random(20, 50));
  for (var i = 0; i < shuffleIterations; i++) {
    for (var j = 0; j < cards.length; j++) {
      var tempCard = cards.splice(j, 1);
      var newLoc = (j + shuffleSeed[j]) % 52;
      cards.splice(newLoc, 0, tempCard[0]);
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
    if (i < hand.length) {
      drawCard(hand[i], 880 + i * 18, 750);
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
      if (card.number == values[j] && card.card_suit == suits[i]) {
        //img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
        image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
        break;
      }
    }
  }
}
