/*

Officer: 5148740
CaseNum: 701-2-23527066-5148740

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from summer mohwawk. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. They were carrying a brown paper bag. They were fairly tall, I think between a height of 162 and 188 cm. They were wearing a black overcoat. I remember they had a dragon tattoo. I'm not quite sure. They brobably weigh between 71 and 90 kg. Their expression seemed nerveous. They seemed to be between the age of 19 and 42 years old. The person I saw was male. It was very dark and I could barely see, That's all I know officer. 

*/

var allSuspects = [
  {
    name: "NICOLE WILLMAR",
    gender: "male",
    expression: "nerveous",
    tattoo: "jellyfish",
    accessory: "glass bottle",
    weight: 99,
    height: 184,
    age: 26,
  },
  {
    name: "LOUISE MAUBERT",
    gender: "female",
    expression: "angry",
    tattoo: "sword",
    accessory: "orange plastic bag",
    weight: 84,
    height: 170,
    age: 50,
  },
  {
    name: "NELSON MYRLE",
    gender: "male",
    expression: "nerveous",
    tattoo: "dragon",
    accessory: "brown paper bag",
    weight: 89,
    height: 166,
    age: 20,
  },
  {
    name: "JULIANA CROME",
    gender: "male",
    expression: "blank",
    tattoo: "big arrow",
    accessory: "plastic box",
    weight: 77,
    height: 178,
    age: 29,
  },
  {
    name: "BRAD NIEMELA",
    gender: "female",
    expression: "empty",
    tattoo: "neck",
    accessory: "orange tote bag",
    weight: 70,
    height: 186,
    age: 45,
  },
  {
    name: "TU OORIN",
    gender: "male",
    expression: "depressed",
    tattoo: "dark black",
    accessory: "big black envelope",
    weight: 59,
    height: 186,
    age: 37,
  },
  {
    name: "ERMELINDA COURTWOOD",
    gender: "male",
    expression: "confused",
    tattoo: "chinese lettering",
    accessory: "black duffle bag",
    weight: 72,
    height: 161,
    age: 48,
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
  let matchingProperties = 0;

  //  They were wearing a black overcoat. It was very dark and I could barely see, That's all I know officer.

  // They were carrying a brown paper bag.
  if (suspectObj.accessory == "brown paper bag") {
    matchingProperties++;
  }

  // They were fairly tall, I think between a height of 162 and 188 cm.
  if (suspectObj.height >= 162 && suspectObj.height <= 188) {
    matchingProperties++;
  }

  // I remember they had a dragon tattoo.
  if (suspectObj.tattoo == "dragon") {
    matchingProperties++;
  }

  // They brobably weigh between 71 and 90 kg.
  if (suspectObj.weight >= 71 && suspectObj.weight <= 90) {
    matchingProperties++;
  }

  // Their expression seemed nerveous.
  if (suspectObj.expression == "nerveous") {
    matchingProperties++;
  }

  // They seemed to be between the age of 19 and 42 years old.
  if (suspectObj.age >= 19 && suspectObj.age <= 42) {
    matchingProperties++;
  }

  // The person I saw was male.
  if (suspectObj.gender == "male") {
    matchingProperties++;
  }

  return matchingProperties;
}

function draw() {
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for (let i = 0; i < allSuspects.length; i++) {
    let matchingProperties = testProperties(allSuspects[i]);
    fill(50 * matchingProperties, 250 - 50 * matchingProperties, 0);
    text(
      "found " +
        matchingProperties +
        " matching properties for " +
        allSuspects[i].name,
      60,
      60 + i * 20
    );
  }
}
