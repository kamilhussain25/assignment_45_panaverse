//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

const peoples:string[]= ["ali", "junaid","hanif"];
const notcome = "ali"
let guestindex = peoples.indexOf(notcome);
console.log( `${notcome} he is not coming ` );

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let newguest = peoples.splice(guestindex,1,"kamil")
console.log(peoples);
//• Print a second set of invitation messages, one for each person who is still in your list.

for (let key in peoples){
    console.log(`${peoples[key]} :you would like to invite in my party`);
    
}


