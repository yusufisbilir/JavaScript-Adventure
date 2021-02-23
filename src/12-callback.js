// callback, async
const processOne = (text, callback) =>{
    console.log(text);
    setTimeout(() => {
       return 0 
    }, 3000);
    callback();
};

const processTwo = _ => console.log("process2 worked");

processOne("Hello", processTwo);

// setTimeout()
const func = _ => 0;

setTimeout(func, 3000);   // waiting 3 seconds


// setInterval()
let num = 0; 
const interv = setInterval(() => {     //delay 1 second, run, delay 1 second run, ...
    if(num == 5)
        clearInterval(interv);
    console.log("Hello");
    num++;

}, 500);