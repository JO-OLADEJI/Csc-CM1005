/*

Officer: 5148740
CaseNum: 502-2-43445328-5148740

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// arrays to be referenced in redactedText
var DocumentA = {
  Detail0: ["Edsger", "succeed", "meddle"],
  Detail1: ["radiate", "stuff", "tug"],
  Detail2: ["charge", "smile", "bake"],
  Detail3: ["sail", "syndicate", "meddle"],
  Detail4: ["Governor Zuckerberg", "clip", "clip"],
  Detail5: ["plug", "$200,000", "mend"],
  Detail6: ["sneeze", "rejoice", "charge"],
  Detail7: ["fence", "tug", "Hopper"],
  Detail8: ["tug", "sail", "charge"],
  Detail9: ["protect", "protect", "clip"],
};

var DocumentB = {
  Detail0: ["mend", "tug", "bake"],
  Detail1: ["radiate", "start", "campaign"],
  Detail2: ["rejoice", "a donation", "start"],
  Detail3: ["sail", "clip", "charge"],
  Detail4: ["bake", "mend", "smile"],
  Detail5: ["clip", "play", "charge"],
  Detail6: ["sneeze", "succeed", "smile"],
  Detail7: ["tug", "sneeze", "mend"],
  Detail8: ["start", "ALGOL", "hit"],
  Detail9: ["meddle", "play", "charge"],
};

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
    "Dear " +
    DocumentA.Detail4[0] +
    ", I am sure that something could be worked out in terms of " +
    DocumentB.Detail2[1] +
    " for your " +
    DocumentB.Detail1[2] +
    ". How does " +
    DocumentA.Detail5[1] +
    " sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. " +
    DocumentA.Detail7[2] +
    " needs to be out of the picture. She’s caused enough trouble. Get the " +
    DocumentA.Detail3[1] +
    " to organise the " +
    DocumentB.Detail8[2] +
    " but I’d prefer it you don’t mention me or " +
    DocumentB.Detail8[1] +
    ". I owe them enough favours already. Your old friend, " +
    DocumentA.Detail0[0];
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
    "Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger",
    670,
    100,
    580,
    600
  );
}
