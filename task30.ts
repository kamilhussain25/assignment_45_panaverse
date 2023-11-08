// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

const nameuser:string[] =["admin",'kamil',"adnan","imran"]
function greeting (){
    for(let key in nameuser){
        if(nameuser[key] == "admin"){
        console.log("hello admin , would you like to see status report?");
        
        }else {
            console.log("hello everyone plz login again");
            
        }
    }

    
}
greeting()