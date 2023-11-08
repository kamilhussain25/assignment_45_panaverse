//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

const guestlist:string[] = [
    "kamilhussain",
    "imran khan",
    "zia khan",
    "asif khan"
]
for (let guest of guestlist){
    console.log(`${guest},you found a bigger dinner table.`);
    
}
//• Add one new guest to the beginning of your array.

let newguestbeginning = guestlist.unshift("zardari")
console.log(guestlist);
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


let indexmiddleguest = Math.floor(guestlist.length/2)

let middleguest = guestlist.splice(indexmiddleguest,0,"sharif family")
 console.log(guestlist);
 
 let endguest = guestlist.push("my mueshid ilyas qadri")
 console.log(guestlist);
 for (let guest in guestlist){
 console.log(`${guestlist[guest]} you are all invited in my party`)};
 
