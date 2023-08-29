/*

Officer: 5148740
CaseNum: 501-3-54286306-5148740

Case 501 - John Von Neuman - stage 4

This is our last chance to catch that killer kid.
Let's hope that John Von Neuman can identify the killer.
To speak to him follow Madame McCarthy’s advice below.

John was ever the keen chess player. Many an hour was spent considering his next move.
To speak to John beyond the grave you must place a chess piece in each of the dashed circles.
Use the image() and the chessPiece variable command to place the pieces in their positions.
Do this by using two for loops in a nested pattern.
You will need to use some conditional statements in order to position each row to match the pattern.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

 * for()
 * image()
 * if()

*/

var backgroundImg, chessPiece;

function preload() {
    backgroundImg = loadImage("background.jpg");
    chessPiece = loadImage("Piece.png");
}

function setup() {
    createCanvas(backgroundImg.width, backgroundImg.height);
    image(backgroundImg, 0, 0);
    imageMode(CENTER);
}

function draw() {
    // add your for loop below
    imageMode(CENTER);
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            image(chessPiece, (720 + i * 62) - j * 62, 395 + j * 69);
        }
    }

    // text(`(${mouseX}, ${mouseY})`, mouseX, mouseY);
}
