//task43
function all_magicians(magicians: string[]) {
    for (let magician of magicians) {
      console.log(magician);
    }
}
let magicians: string[] = ['Witcher', 'Dr. Strange', 'Mage'];

function greatmagician(magicians:string[]){
    let great = magicians.map(element=>`the great ${element}`)
    //console.log(great);
    return great
    
}
console.log(greatmagician(magicians))
export{}