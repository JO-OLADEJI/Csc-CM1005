/*

Officer: 5148740
CaseNum: 502-3-84028650-5148740

Case 502 - A donation - stage 4

This final document will seal the deal. C’mon kid, let’s send these crooks down.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.


*/

var redactedText;

// data structures to be referenced in redactedText
var AExcerpt = [
  {
    Token0: {
      RedactedWord0: "rejoice",
      RedactedWord1: "succeed",
      RedactedWord2: "start",
      RedactedWord3: "protect",
    },
    Token1: {
      RedactedWord0: "sneeze",
      RedactedWord1: "succeed",
      RedactedWord2: "bake",
      RedactedWord3: "consider",
    },
    Token2: {
      RedactedWord0: "donation",
      RedactedWord1: "fence",
      RedactedWord2: "play",
      RedactedWord3: "succeed",
    },
  },
  {
    Token0: {
      RedactedWord0: "meddle",
      RedactedWord1: "play",
      RedactedWord2: "stuff",
      RedactedWord3: "meddle",
    },
    Token1: {
      RedactedWord0: "sail",
      RedactedWord1: "sneeze",
      RedactedWord2: "mend",
      RedactedWord3: "$200,000",
    },
    Token2: {
      RedactedWord0: "smile",
      RedactedWord1: "charge",
      RedactedWord2: "fence",
      RedactedWord3: "mend",
    },
  },
  {
    Token0: {
      RedactedWord0: "syndicate",
      RedactedWord1: "fence",
      RedactedWord2: "ALGOL fish wholesalers",
      RedactedWord3: "sail",
    },
    Token1: {
      RedactedWord0: "stuff",
      RedactedWord1: "smile",
      RedactedWord2: "sail",
      RedactedWord3: "sneeze",
    },
    Token2: {
      RedactedWord0: "protect",
      RedactedWord1: "smile",
      RedactedWord2: "rejoice",
      RedactedWord3: "ALGOL",
    },
  },
  {
    Token0: {
      RedactedWord0: "consider",
      RedactedWord1: "consider",
      RedactedWord2: "stuff",
      RedactedWord3: "smile",
    },
    Token1: {
      RedactedWord0: "charge",
      RedactedWord1: "bake",
      RedactedWord2: "hurry",
      RedactedWord3: "rejoice",
    },
    Token2: {
      RedactedWord0: "sail",
      RedactedWord1: "tug",
      RedactedWord2: "stuff",
      RedactedWord3: "radiate",
    },
  },
  {
    Token0: {
      RedactedWord0: "meddle",
      RedactedWord1: "stuff",
      RedactedWord2: "charge",
      RedactedWord3: "clip",
    },
    Token1: {
      RedactedWord0: "consider",
      RedactedWord1: "smile",
      RedactedWord2: "stuff",
      RedactedWord3: "plug",
    },
    Token2: {
      RedactedWord0: "hurry",
      RedactedWord1: "sneeze",
      RedactedWord2: "consider",
      RedactedWord3: "stuff",
    },
  },
];

var BExcerpt = [
  {
    Token0: {
      RedactedWord0: "charge",
      RedactedWord1: "rejoice",
      RedactedWord2: "hurry",
      RedactedWord3: "clip",
    },
    Token1: {
      RedactedWord0: "development",
      RedactedWord1: "start",
      RedactedWord2: "clip",
      RedactedWord3: "smile",
    },
    Token2: {
      RedactedWord0: "plug",
      RedactedWord1: "you",
      RedactedWord2: "protect",
      RedactedWord3: "protect",
    },
  },
  {
    Token0: {
      RedactedWord0: "hurry",
      RedactedWord1: "sail",
      RedactedWord2: "mend",
      RedactedWord3: "Edsger",
    },
    Token1: {
      RedactedWord0: "sail",
      RedactedWord1: "play",
      RedactedWord2: "tug",
      RedactedWord3: "charge",
    },
    Token2: {
      RedactedWord0: "bake",
      RedactedWord1: "sneeze",
      RedactedWord2: "mend",
      RedactedWord3: "play",
    },
  },
  {
    Token0: {
      RedactedWord0: "plug",
      RedactedWord1: "start",
      RedactedWord2: "protect",
      RedactedWord3: "stuff",
    },
    Token1: {
      RedactedWord0: "play",
      RedactedWord1: "consider",
      RedactedWord2: "COBOL",
      RedactedWord3: "sneeze",
    },
    Token2: {
      RedactedWord0: "radiate",
      RedactedWord1: "meddle",
      RedactedWord2: "meddle",
      RedactedWord3: "clip",
    },
  },
  {
    Token0: {
      RedactedWord0: "start",
      RedactedWord1: "rejoice",
      RedactedWord2: "sneeze",
      RedactedWord3: "radiate",
    },
    Token1: {
      RedactedWord0: "bake",
      RedactedWord1: "consider",
      RedactedWord2: "Governor Zuckerberg",
      RedactedWord3: "charge",
    },
    Token2: {
      RedactedWord0: "sail",
      RedactedWord1: "radiate",
      RedactedWord2: "clip",
      RedactedWord3: "sail",
    },
  },
  {
    Token0: {
      RedactedWord0: "meddle",
      RedactedWord1: "succeed",
      RedactedWord2: "play",
      RedactedWord3: "start",
    },
    Token1: {
      RedactedWord0: "clip",
      RedactedWord1: "consider",
      RedactedWord2: "consider",
      RedactedWord3: "bake",
    },
    Token2: {
      RedactedWord0: "radiate",
      RedactedWord1: "smile",
      RedactedWord2: "plug",
      RedactedWord3: "mend",
    },
  },
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont("SpecialElite.ttf");
  backgroundImg = loadImage("Background.png");
}

function setup() {
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above
  redactedText =
    "My dearest " +
    BExcerpt[1].Token0.RedactedWord3 +
    ", I have just received your very generous " +
    AExcerpt[0].Token2.RedactedWord0 +
    " of " +
    AExcerpt[1].Token1.RedactedWord3 +
    ". Thank you. This will be invaluable to our campaign. " +
    AExcerpt[2].Token2.RedactedWord3 +
    " is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of " +
    BExcerpt[0].Token2.RedactedWord1 +
    " or " +
    AExcerpt[2].Token0.RedactedWord2 +
    " to the " +
    AExcerpt[2].Token0.RedactedWord0 +
    ". Your new " +
    BExcerpt[0].Token1.RedactedWord0 +
    " at the " +
    BExcerpt[2].Token1.RedactedWord2 +
    " can now proceed without impediment. Yours sincerely, " +
    BExcerpt[3].Token1.RedactedWord2;
}

function draw() {
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width / 2, 10, width / 2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text(
    "Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg",
    670,
    100,
    580,
    600
  );
}
