"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//task38
function cities(cities, country = "unknown country") {
    return console.log(`${cities}is in ${country}`);
}
cities("karachi", "pakistan");
cities("multan", "pakistan");
cities("london");
