"use strict";
//task25
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
let aliens_colour = "green";
if (aliens_colour == "green") {
    console.log("player got 10 point");
}
else {
    console.log("player got 5 point");
}
aliens_colour = "blue";
if (aliens_colour == "green") {
    console.log("player got 10 point");
}
else {
    console.log("player got 5 point");
}
