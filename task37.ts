//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
let size = "large"
let size1 = "medium"
function make_shirt(size:string="large",message:string="i love typescript") {
console.log(`\n ${size}\n ${message}`);

return;
    
}
make_shirt("medium")