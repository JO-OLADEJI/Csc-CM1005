/*
Officer: 5148740
CaseNum: 601-3-57141017-5148740

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

1. In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Sienna fill rectangles centered over each location.

2. In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Gold stroke ellipses at each location.

3. This time we will catch Fry by comparing both distance from the crimes and dates of sightings. If she was within less than 38 pixels of any of the crimes within no more than 3 days of their occurrence then the details should be pushed to the list of possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

For this mission you will need ONLY the following:

- for loop
- if()
- <
- &&
- .push()
- dist()
- abs()
- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- ellipse()

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var Fry_Logbook = [
  { PosX: 518, PosY: 471, date: 12 },
  { PosX: 486, PosY: 508, date: 12 },
  { PosX: 475, PosY: 566, date: 13 },
  { PosX: 376, PosY: 554, date: 13 },
  { PosX: 316, PosY: 559, date: 13 },
  { PosX: 265, PosY: 614, date: 14 },
  { PosX: 253, PosY: 609, date: 14 },
  { PosX: 240, PosY: 604, date: 14 },
  { PosX: 220, PosY: 597, date: 15 },
  { PosX: 178, PosY: 600, date: 15 },
  { PosX: 199, PosY: 604, date: 17 },
  { PosX: 146, PosY: 582, date: 18 },
  { PosX: 115, PosY: 551, date: 20 },
  { PosX: 67, PosY: 495, date: 21 },
  { PosX: 39, PosY: 493, date: 22 },
  { PosX: 68, PosY: 461, date: 24 },
];

//Recent crime records.

var Killing_Record = [
  {
    Pos_X: 438,
    Pos_Y: 420,
    recordDate: 11,
    Fatality_Details: "JACQUELINE DURANTS",
  },
  {
    Pos_X: 408,
    Pos_Y: 451,
    recordDate: 11,
    Fatality_Details: "LAVERNE JACQUELIN",
  },
  { Pos_X: 408, Pos_Y: 377, recordDate: 13, Fatality_Details: "JAUNITA JOYER" },
  { Pos_X: 642, Pos_Y: 289, recordDate: 16, Fatality_Details: "GAYLA WILLMAR" },
  {
    Pos_X: 623,
    Pos_Y: 279,
    recordDate: 16,
    Fatality_Details: "LOUISE ZETLAND",
  },
  {
    Pos_X: 95,
    Pos_Y: 488,
    recordDate: 17,
    Fatality_Details: "BRIDGET BROADVIEW",
  },
  {
    Pos_X: 75,
    Pos_Y: 522,
    recordDate: 18,
    Fatality_Details: "LESLEY MONKSFORD",
  },
  {
    Pos_X: 269,
    Pos_Y: 597,
    recordDate: 26,
    Fatality_Details: "LARRAINE PEGORD",
  },
  {
    Pos_X: 389,
    Pos_Y: 554,
    recordDate: 28,
    Fatality_Details: "JULIANA ADVERSANE",
  },
  { Pos_X: 484, Pos_Y: 549, recordDate: 2, Fatality_Details: "MAJORIE JENI" },
  { Pos_X: 496, Pos_Y: 484, recordDate: 9, Fatality_Details: "NICOLE ASHELY" },
  {
    Pos_X: 546,
    Pos_Y: 463,
    recordDate: 14,
    Fatality_Details: "SUMMER CASIMERE",
  },
  {
    Pos_X: 538,
    Pos_Y: 359,
    recordDate: 12,
    Fatality_Details: "DEEDEE PHINNEY",
  },
  { Pos_X: 702, Pos_Y: 412, recordDate: 17, Fatality_Details: "DARBY MYRLE" },
  {
    Pos_X: 817,
    Pos_Y: 474,
    recordDate: 18,
    Fatality_Details: "TAMICA MAUBERT",
  },
];

function preload() {
  countyMap = loadImage("map.png");
}

function setup() {
  createCanvas(countyMap.width, countyMap.height);
  noFill();
  noStroke();
  image(countyMap, 0, 0);

  //add your code below here
  // sightings
  fill(160, 82, 45);
  for (let i = 0; i < Fry_Logbook.length; i++) {
    rect(Fry_Logbook[i].PosX - 3, Fry_Logbook[i].PosY - 3, 6, 6);
  }

  // murder locations
  noFill();
  strokeWeight(2);
  stroke(255, 215, 0);
  for (let i = 0; i < Killing_Record.length; i++) {
    ellipse(Killing_Record[i].Pos_X, Killing_Record[i].Pos_Y, 4, 4);
  }

  // sighting & murder relationship
  for (let i = 0; i < Fry_Logbook.length; i++) {
    for (let j = 0; j < Killing_Record.length; j++) {
      if (
        dist(
          Fry_Logbook[i].PosX,
          Fry_Logbook[i].PosY,
          Killing_Record[j].Pos_X,
          Killing_Record[j].Pos_Y
        ) < 38 &&
        abs(Fry_Logbook[i].date - Killing_Record[j].recordDate) <= 3
      ) {
        possibleMatches.push({
          suspect_x: Fry_Logbook[i].PosX,
          suspect_y: Fry_Logbook[i].PosY,
          crime_x: Killing_Record[j].Pos_X,
          crime_y: Killing_Record[j].Pos_Y,
          victimName: Killing_Record[j].Fatality_Details,
        });
      }
    }
  }

  // code to draw the matches ( if any)
  for (let i = 0; i < possibleMatches.length; i++) {
    stroke(127);
    strokeWeight(3);
    line(
      possibleMatches[i].crime_x,
      possibleMatches[i].crime_y,
      possibleMatches[i].suspect_x,
      possibleMatches[i].suspect_y
    );

    noStroke();
    fill(127);
    text(
      possibleMatches[i].victimName,
      possibleMatches[i].crime_x + 15,
      possibleMatches[i].crime_y + 15
    );
  }
}

//We are not using the draw function this time
