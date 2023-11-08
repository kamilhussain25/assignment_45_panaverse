"use strict";
//task32
let current_user = ["kamil", "ali", "faisal", "rizwan"];
let new_user = ["kamil", "Ali", "faiSal", "rizwan", "usama", "khalid"];
for (let user of new_user) {
    let lowernewuser = user.toLowerCase();
    if (current_user.includes(lowernewuser)) {
        console.log(`  ${user} is already taken`);
    }
    else {
        console.log(`user name ${user}  is vailable`);
    }
}
