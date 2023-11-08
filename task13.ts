//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

 const arre =["car","bike","suzuki"];

 const statements = ["i love driving car " ,"bike is easy to ride" ,"is affordable"]

 for(let key in arre){
    console.log(`${arre[key]}:${statements[key]}`);
    
    
 }