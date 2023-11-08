// task 24
// Task # 24
console.log("=====================")
let text:string|number = 1;
let Karachi = "pakistan"
//True 5 test
// • Tests for equality and inequality with strings
console.log(text ==  1? true : false);
console.log(text == 1 );
console.log(Karachi == 'Karachi');
console.log(Karachi === 'Pakistan');

// • Tests using the lower case function
console.log("Karachi".toLowerCase() == "kAraChi".toLowerCase());

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(1 == 1)
console.log(1 >= 2)
console.log(1 <= 9)
console.log(1 != 1)

// • Tests using "and" and "or" operators
var user = 'admin';
var password = 'admin'

console.log(`user and password ${user === 'admin' && password === 'admin'}`)
console.log(`user and password ${user === 'admin' || password === 'admin'}`)

// • Test whether an item is in a array
var cities = ["Karachi", "Islamabad", "Faislabad", "Lahore"]
console.log("Array item check: ", cities.includes('multan'))

// • Test whether an item is not in a array
console.log("Array item check: ", !cities.includes('multan'))
export{}