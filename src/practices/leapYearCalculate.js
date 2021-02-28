//leap year
let year  = 4100;
// if(year%400 == 0 || (year%4 ==0 && year%100 == 0))
//     console.log("Leap year");

let msg = (year%400 == 0 || (year%4 ==0 && year%100 == 0)) ? "leap year" : "not leap year"; //ternary if

console.log(msg);