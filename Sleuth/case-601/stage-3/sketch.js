/*
Officer: 5148740
CaseNum: 601-2-52213678-5148740

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, LightSeaGreen stroke rectangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Coral fill triangles centered over each location.

Use X11 colours. You can find a reference table at https://www.w3.org/TR/css3-iccprof#numerical.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 54 pixels of any of the crimes then the details should be pushed to possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn. Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- <
- .push()
- rect() NB. Draw each rectangle with the point at its center.rectMode(CENTER) is not accepted

- triangle() NB. Draw each triangle with the point roughly at its center.

- stroke(), fill() - rgb values only
- noStroke(), noFill()

*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var FrySightings = [
  { PointX: 639, PointY: 288 },
  { PointX: 681, PointY: 286 },
  { PointX: 712, PointY: 293 },
  { PointX: 756, PointY: 310 },
  { PointX: 715, PointY: 368 },
  { PointX: 701, PointY: 425 },
  { PointX: 753, PointY: 436 },
  { PointX: 815, PointY: 468 },
  { PointX: 795, PointY: 506 },
  { PointX: 788, PointY: 497 },
  { PointX: 781, PointY: 486 },
  { PointX: 768, PointY: 489 },
  { PointX: 750, PointY: 500 },
  { PointX: 732, PointY: 506 },
  { PointX: 714, PointY: 514 },
  { PointX: 695, PointY: 531 },
  { PointX: 693, PointY: 552 },
  { PointX: 654, PointY: 523 },
  { PointX: 624, PointY: 500 },
  { PointX: 594, PointY: 484 },
  { PointX: 555, PointY: 474 },
];

//Recent crime records.

var MurdersceneRecord_PositionX = [
  409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456,
];
var MurdersceneRecord_PositionY = [
  446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770,
];
var MurdersceneRecord_Victim = [
  "DRUSILLA WARMAN",
  "LAVERNE JACQUELIN",
  "ERMELINDA OORIN",
  "LAKESHA SYMMES",
  "DEEDEE PHINNEY",
  "JENIFFER DEAUVILLE",
  "GAYLA WILLMAR",
  "JACQUELINE DURANTS",
  "JESSIA PORTOS",
  "KITTY THAXTER",
  "DARBY MYRLE",
  "LINETTE MOHWAWK",
  "JAUNITA JOYER",
  "NICOLE ASHELY",
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
  rectMode(CENTER);
  strokeWeight(2);
  stroke(32, 178, 170);
  for (let i = 0; i < FrySightings.length; i++) {
    rect(FrySightings[i].PointX, FrySightings[i].PointY, 6, 6);
  }
  rectMode(CORNER);

  // murder scenes
  noStroke();
  fill(255, 127, 80);
  for (let i = 0; i < MurdersceneRecord_PositionX.length; i++) {
    triangle(
      MurdersceneRecord_PositionX[i] - 4,
      MurdersceneRecord_PositionY[i] + 4,
      MurdersceneRecord_PositionX[i],
      MurdersceneRecord_PositionY[i] - 6,
      MurdersceneRecord_PositionX[i] + 4,
      MurdersceneRecord_PositionY[i] + 4
    );
  }

  // murder scene proximity
  for (let i = 0; i < FrySightings.length; i++) {
    for (let j = 0; j < MurdersceneRecord_PositionX.length; j++) {
      if (
        dist(
          FrySightings[i].PointX,
          FrySightings[i].PointY,
          MurdersceneRecord_PositionX[j],
          MurdersceneRecord_PositionY[j]
        ) < 54
      ) {
        possibleMatches.push({
          suspect_x: FrySightings[i].PointX,
          suspect_y: FrySightings[i].PointY,
          crime_x: MurdersceneRecord_PositionX[j],
          crime_y: MurdersceneRecord_PositionY[j],
          victimName: MurdersceneRecord_Victim[j],
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
