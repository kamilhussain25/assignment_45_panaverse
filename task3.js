"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let x = "kamil hussain";
let y = x.toLowerCase();
//console.log(y);
let z = x.toUpperCase();
//console.log(z);
//titlecase("kamil hussain")
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(`converted to lowercase  ${y} converted touppercase  ${z}  converted to titlecase ${titleCase("kamil hussain")}`);
