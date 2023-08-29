/*

Officer: 5148740
CaseNum: 502-1-89435303-5148740

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way. This message is a little more tricky to decipher, but I know you can do it.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var CensoredA = [
  { Detail0: "Edsger", Detail1: "tug", Detail2: "hurry" },
  { Detail0: "rejoice", Detail1: "consider", Detail2: "protect" },
  { Detail0: "stuff", Detail1: "capital", Detail2: "rejoice" },
  { Detail0: "meddle", Detail1: "syndicate", Detail2: "meddle" },
  { Detail0: "sneeze", Detail1: "consider", Detail2: "fence" },
  { Detail0: "stuff", Detail1: "plug", Detail2: "tug" },
  { Detail0: "fence", Detail1: "sail", Detail2: "play" },
  { Detail0: "rejoice", Detail1: "she has", Detail2: "stuff" },
  { Detail0: "play", Detail1: "stuff", Detail2: "Hopper’s" },
  { Detail0: "mend", Detail1: "stuff", Detail2: "Governor Zuckerberg" },
];

var CensoredB = [
  { Detail0: "play", Detail1: "protect", Detail2: "play" },
  { Detail0: "rejoice", Detail1: "plug", Detail2: "clip" },
  { Detail0: "radiate", Detail1: "protect", Detail2: "bake" },
  { Detail0: "sneeze", Detail1: "meddle", Detail2: "mend" },
  { Detail0: "plug", Detail1: "radiate", Detail2: "rejoice" },
  { Detail0: "romantic", Detail1: "delicate", Detail2: "plug" },
  { Detail0: "sneeze", Detail1: "succeed", Detail2: "COBOL" },
  { Detail0: "sneeze", Detail1: "smile", Detail2: "rejoice" },
  { Detail0: "sail", Detail1: "a donation", Detail2: "tug" },
  { Detail0: "hurry", Detail1: "hurry", Detail2: "stuff" },
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
    CensoredA[0].Detail0 +
    ", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about " +
    CensoredA[8].Detail2 +
    " intervention. I suspect that " +
    CensoredA[7].Detail1 +
    " a " +
    CensoredB[5].Detail0 +
    " interest at the " +
    CensoredB[6].Detail2 +
    ". I and the " +
    CensoredA[3].Detail1 +
    " appreciate your many contributions over the years. However, this is a most " +
    CensoredB[5].Detail1 +
    " matter which would require significant " +
    CensoredA[2].Detail1 +
    " for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps " +
    CensoredB[8].Detail1 +
    " to my forthcoming campaign would help. Yours sincerely, " +
    CensoredA[9].Detail2;
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
    "Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg",
    670,
    100,
    580,
    600
  );
}
