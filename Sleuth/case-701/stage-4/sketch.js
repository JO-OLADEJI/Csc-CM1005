/*

Officer: 5148740
CaseNum: 701-3-44510610-5148740

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from nicole dorcey.
All they need is for you to do the detective work.

This time you must implement two functions:

- A testProperties function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A locateGuilty function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function testProperties(suspectObj){}
 - function locateGuilty(){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. It's so hard to remember right now. I remember they had a chinese lettering tattoo. They were fairly tall, I think between a height of 176 and 180 cm. It was very dark and I could barely see, It's so hard to remember right now. The person I saw was female. I'll never forget their blue eyes. They were carrying a plastic box. They brobably weigh between 52 and 100 kg. They wore black glasses. They seemed to be between the age of 19 and 48 years old. Their expression seemed sad. I hope I never have to go through that again. 

*/

var usualSuspects = [
  {
    name: "NELSON JOYER",
    expression: "nerveous",
    accessory: "orange tote bag",
    tattoo: "dragon",
    glasses: "white",
    weight: 80,
    age: 47,
    height: 167,
  },
  {
    name: "SUMMER DAVISWOOD",
    expression: "sad",
    accessory: "plastic box",
    tattoo: "chinese lettering",
    glasses: "black",
    weight: 63,
    age: 41,
    height: 177,
  },
  {
    name: "TAMICA NIEMELA",
    expression: "depressed",
    accessory: "laptop bag",
    tattoo: "ox",
    glasses: "cheap plastic",
    weight: 78,
    age: 42,
    height: 164,
  },
  {
    name: "ERMELINDA FORSLIN",
    expression: "empty",
    accessory: "glass bottle",
    tattoo: "neck",
    glasses: "blue",
    weight: 66,
    age: 37,
    height: 180,
  },
  {
    name: "LOUISE MAUBERT",
    expression: "blank",
    accessory: "brown paper bag",
    tattoo: "jellyfish",
    glasses: "dark brown",
    weight: 79,
    age: 55,
    height: 156,
  },
  {
    name: "DARBY TINTLE",
    expression: "nerveous",
    accessory: "orange plastic bag",
    tattoo: "sword",
    glasses: "thin metallic",
    weight: 65,
    age: 46,
    height: 177,
  },
  {
    name: "DEEDEE PEGORD",
    expression: "menacing",
    accessory: "metal briefcase",
    tattoo: "bull",
    glasses: "very thick",
    weight: 74,
    age: 40,
    height: 184,
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

// Declare both your functions here
function testProperties(suspectObj) {
  let matchingProperties = 0;

  // I remember they had a chinese lettering tattoo.
  if (suspectObj.tattoo == "chinese lettering") {
    matchingProperties++;
  }

  // I think between a height of 176 and 180 cm.
  if (suspectObj.height >= 176 && suspectObj.height <= 180) {
    matchingProperties++;
  }

  // They were carrying a plastic box.
  if (suspectObj.accessory == "plastic box") {
    matchingProperties++;
  }

  // They brobably weigh between 52 and 100 kg.
  if (suspectObj.weight >= 52 && suspectObj.weight <= 100) {
    matchingProperties++;
  }

  // They wore black glasses.
  if (suspectObj.glasses == "black") {
    matchingProperties++;
  }

  // They seemed to be between the age of 19 and 48 years old.
  if (suspectObj.age >= 19 && suspectObj.age <= 48) {
    matchingProperties++;
  }

  // Their expression seemed sad.
  if (suspectObj.expression == "sad") {
    matchingProperties++;
  }

  return matchingProperties;
}

function locateGuilty() {
  let mostMatches = 0;
  let guiltyPerson = {};
  let matchingProperties = 0;

  for (let i = 0; i < usualSuspects.length; i++) {
    matchingProperties = testProperties(usualSuspects[i]);
    if (matchingProperties > mostMatches) {
      mostMatches = matchingProperties;
      guiltyPerson = usualSuspects[i];
    }
  }

  return guiltyPerson;
}

function draw() {
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255, 0, 0);
  text(locateGuilty().name + " is guilty!", 60, 80);
}
