"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//task43
function all_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians = ['Witcher', 'Dr. Strange', 'Mage'];
function greatmagician(magicians) {
    let great = magicians.map(element => `the great ${element}`);
    //console.log(great);
    return great;
}
console.log(greatmagician(magicians));
