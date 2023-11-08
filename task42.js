"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//42
function all_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians = ['Witcher', 'Dr. Strange', 'Mage'];
function greatmagician(magicians) {
    for (let magician of magicians) {
        console.log(`the great ${magician}`);
    }
}
all_magicians(magicians);
greatmagician(magicians);
