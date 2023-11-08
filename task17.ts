//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

const guestlistrep:string[] = [
    "kamilhussain",
    "imran khan",
    "zia khan",
    "asif khan"
]
for (let guest of guestlistrep){
    console.log(`${guest} ,i can invite anly two people for dinner`);
    
}
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

 while(guestlistrep.length >2){
     let Removed = guestlistrep.pop()
     console.log(`sorry${Removed} i can not invite u because of space issue`);
    
 }
// //• Print a message to each of the two people still on your list, letting them know they’re still invited.

for (let guest of guestlistrep){
    console.log(`${guest} u are still invited`);
    
}
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

for(let i =0 ; guestlistrep.length=0; i++){
    let Removedremain = guestlistrep.pop()
    console.log(`Guest list after diner : ${Removedremain}`);
    
}

