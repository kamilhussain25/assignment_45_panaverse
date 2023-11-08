//42
function all_magicians(magicians: string[]) {
    for (let magician of magicians) {
      console.log(magician);
    }
}
let magicians: string[] = ['Witcher', 'Dr. Strange', 'Mage'];

function greatmagician(magicians:string[]){
    for(let magician of magicians){
       
        console.log(`the great ${magician}`);
        
    }
}




all_magicians(magicians);
greatmagician(magicians)
export{}