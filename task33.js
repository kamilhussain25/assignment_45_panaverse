"use strict";
//task34
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let ordinal;
num.forEach((element) => {
    if (element === 1) {
        ordinal = "st";
    }
    else if (element === 2) {
        ordinal = "nd";
    }
    else if (element === 3) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }
    console.log(`${element}${ordinal}`);
});
