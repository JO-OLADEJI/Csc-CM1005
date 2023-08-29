/*

Officer: 5148740
CaseNum: 502-0-26936903-5148740

Case 502 - Old friends - stage 1

Corruption is everywhere in Console City, and the cops are no exception. I’ve managed to lay my hands on some government censored documents, and I think they lead to a trail of corruption that goes all the way to the top. However, the key parts have been redacted. Luckily a source of mine has sent me redacted words in the very order that they appear in the document. 

- Run the sketch and you'll see the redacted text on the left and the missing words on the right
- Your task is to replace the redacted sections in redactedText with the missing words. 
- You must do this by finding each word in the data structures  below and then concatenating redactedText with references to the word in the respective data structure.

*/

var redactedText;

// data structures to be referenced in redactedText
var A_Archive = [
  "supply of fish",
  "Lovelace",
  "Cobol Theatre",
  "Governor Zuckerberg",
  "affair",
];

var B_Archive = [
  "Edsger",
  "clean up",
  "Algol Fish Wholesalers",
  "Torvalds",
  "Judge Hopper",
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
    "Dear " +
    A_Archive[3] +
    ", I am writing to you with much confusion and distress. As you know my company " +
    B_Archive[2] +
    " has been a bastion of the community. Over the years we have provided many jobs for the people of Console City. We’ve kept the city in a good " +
    A_Archive[0] +
    ". We even paid some tax once. Now I find that our efforts to open a new plant opposite the " +
    A_Archive[2] +
    " is being blocked by your very own " +
    B_Archive[4] +
    ". Did I not help you " +
    B_Archive[1] +
    " the mess after " +
    B_Archive[3] +
    " ? Did I not keep quiet about your " +
    A_Archive[4] +
    " with " +
    A_Archive[1] +
    " Contact me discreetly and with haste. Some arrangement must be found. Your old friend, " +
    B_Archive[0];
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
    "Governor Zuckerberg, Algol Fish Wholesalers, supply of fish, Cobol Theatre, Judge Hopper, clean up, Torvalds, affair, Lovelace, Edsger",
    670,
    100,
    580,
    600
  );
}
