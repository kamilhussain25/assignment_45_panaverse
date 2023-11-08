"use strict";
//task45
function createCar(manufacturer, model, color, features) {
    let a = manufacturer + model + color + features;
    return a;
}
const myCar = createCar("Toyota", "Camry", ["Blue"], ["Sunroof", "Leather seats"]);
console.log(myCar);
