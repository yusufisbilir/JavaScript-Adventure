// second to minute
let second = 1200;
let x = second%60
let minute = (second-x)/60
let message = `Minute: ${minute}, Second ${x}`
// console.log(message);

//fahrenheit converter
let fahr = 100;
let celcius = (5/9) * (fahr-32);
// console.log(celcius);

//leap year
let year  = 4100;
// if(year%400 == 0 || (year%4 ==0 && year%100 == 0))
//     console.log("Leap year");

let msg = (year%400 == 0 || (year%4 ==0 && year%100 == 0)) ? "leap year" : "not leap year"; //ternary if

console.log(msg);