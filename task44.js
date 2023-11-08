"use strict";
//
const sandwichItem = (...items) => {
    console.log(`sandwich summary`);
    if (items.length == 0) {
        console.log("yur order is empty");
    }
    else {
        items.forEach((item, index) => {
            console.log(`${index + 1}${item}`);
        });
    }
};
sandwichItem();
sandwichItem("Boiled Eggs", "Tomato", "Cheese", "Shrimp");
sandwichItem("Ham", "Lettuce");
