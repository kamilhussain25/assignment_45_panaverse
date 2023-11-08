//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let car ={
    name : "vigo",
    colour : "red",
    prize : "40 lac"
}

let car1 ={
    name : "suzuki",
    colour :"blue",
    prize : "60 lac"
}
let list : Array<typeof car> = []
list.push(car,car1)
 console.log(list);

 function displycars(list:Array<typeof car>){
    for (const key in list) {
         
            //const element = list[key];
            
        console.log(list[key]);
        
    }

 }
 displycars(list)
 export{}