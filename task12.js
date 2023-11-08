"use strict";
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let Names1 = ["imran", "rizwan", "shoaib"];
for (let key in Names1) {
    console.log(`${Names1[key]} you are invited in my birthday party`);
}
