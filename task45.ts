//task45
function createCar(manufacturer: string, model: string,color?: string[], features?: string[]) {
    let a =  manufacturer + model +  color + features
    return a
}
        

    


const myCar = createCar("Toyota", "Camry", ["Blue"] , ["Sunroof", "Leather seats"])
console.log(myCar)
