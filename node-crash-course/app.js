const namee = "aastha";

console.log(namee);

const greet = (namee)=>{
    console.log(`hello ${namee}`);   //hello astha
}

greet("astha");
greet("pan");


// console.log(global);

global.setTimeout(() => {
    console.log(`int the timeout`);
    clearInterval(int)
}, 3000);

const int = setInterval(()=>{
    console.log(`interval`)
}, 1000);


console.log(__dirname); //  /home/atm/Desktop/Aastha/Nodejs/node-crash-course
console.log(__filename); //  /home/atm/Desktop/Aastha/Nodejs/node-crash-course/app.js



console.log(document.querySelector);   //ReferenceError: document is not defined