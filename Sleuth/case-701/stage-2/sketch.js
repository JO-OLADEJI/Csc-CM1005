/*

Officer: 5148740
CaseNum: 701-1-41258297-5148740

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - if()

Witness statement:

It was last Thursday, I heard noises outside so I looked out and saw a person in the steet. I remember they had a dark black tattoo. They were quite big, they probably weigh more than 71 Kg. By the look of them they were younger than 49. It's hard to say. They had thick black hair. They were carrying a black duffle bag. It's hard to say. Their expression seemed blank. I hope I never have to go through that again. 

*/

var lineupLog = [
  {
    name: "GAYLA MOHWAWK",
    expression: "blank",
    tattoo: "dark black",
    hair: "thick black",
    weight: 73,
    age: 42,
  },
  {
    name: "RANDEE NIEMELA",
    expression: "menacing",
    tattoo: "facial",
    hair: "shaved",
    weight: 71,
    age: 72,
  },
  {
    name: "DEEDEE PORTOS",
    expression: "confused",
    tattoo: "bull",
    hair: "no",
    weight: 80,
    age: 34,
  },
  {
    name: "TAMICA BROADVIEW",
    expression: "empty",
    tattoo: "big arrow",
    hair: "ginger",
    weight: 70,
    age: 21,
  },
  {
    name: "TU ADVERSANE",
    expression: "sad",
    tattoo: "sword",
    hair: "long white",
    weight: 92,
    age: 45,
  },
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont("SpecialElite.ttf");
  backgroundImg = loadImage("Background.png");
}

function setup() {
  createCanvas(640, 480);
  textFont(myFont);
}

// Declare your function here
function testProperties(suspectObj) {
  if (
    suspectObj.tattoo == "dark black" &&
    suspectObj.weight > 71 &&
    suspectObj.age < 49 &&
    suspectObj.hair == "thick black" &&
    suspectObj.expression == "blank"
  ) {
    return true;
  }
}

function draw() {
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for (let i = 0; i < lineupLog.length; i++) {
    if (testProperties(lineupLog[i]) == true) {
      fill(255, 0, 0);
      text(lineupLog[i].name + " is guilty!", 60, 60 + i * 20);
    } else {
      fill(0, 155, 0);
      text(lineupLog[i].name + " is not guilty", 60, 60 + i * 20);
    }
  }
}
