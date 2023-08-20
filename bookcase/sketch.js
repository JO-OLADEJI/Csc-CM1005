const bookcase = [
  [
    "The 4-hour workweek",
    "Unfair Advantage",
    "Purpose Driven Life",
    "Rich Dad Poor Dad",
    "The Burden of Freedom",
    "Atomic Habits",
    "7 Habits of Hightly Effective People",
  ],
  [
    "Introduction to Programming",
    "Discrete Maths",
    "Computational Maths",
    "Computer Vision",
    "Augmented Reality",
  ],
  ["Monopoly", "Chess", "Checkers", "Ludo Basics", "Snake of Ladder"],
  ["Queens Gambit", "Searching for Bobby Fisher", "Queen of Katwe"],
  ["Quantum Physics", "Relativity", "Fluids and Mechanics", "Nuclear Physics"],
];

function setup() {
  createCanvas(800, 600);
  printFirstBookOnShelves();
  printTotalBookCount();
  printAllBooks();
  getBook(0, 0);
  getBookPos("queen of katwe");
}

function printFirstBookOnShelves() {
  for (let i = 0; i < bookcase.length; i++) {
    console.log(bookcase[i][0]);
  }
}

function printTotalBookCount() {
  let sum = 0;
  for (let i = 0; i < bookcase.length; i++) {
    for (let j = 0; j < bookcase[i].length; j++) {
      sum++;
    }
  }
  console.log(`Total Books No.: ${sum}`);
}

function printAllBooks() {
  for (let i = 0; i < bookcase.length; i++) {
    for (let j = 0; j < bookcase[i].length; j++) {
      console.log(`- ${bookcase[i][j]}`);
    }
  }
}

function getBook(shelfIndex, bookIndex) {
  if (shelfIndex >= bookcase.length || shelfIndex < 0) {
    return console.error("shelf doesn't exist!");
  }
  if (bookIndex >= bookcase[shelfIndex].length || bookIndex < 0) {
    return console.error("book # out of range!");
  }

  let book = bookcase[shelfIndex][bookIndex];
  console.log(`shelf #${shelfIndex}, book #${bookIndex}: ${book}`);
}

function getBookPos(bookname) {
  for (let i = 0; i < bookcase.length; i++) {
    for (let j = 0; j < bookcase[i].length; j++) {
      if (bookcase[i][j].toLowerCase() == bookname.toLowerCase()) {
        return console.log(`shelf #${i}, book #${j}`);
      }
    }
  }
  console.error("Book not found!");
}

function draw() {}
