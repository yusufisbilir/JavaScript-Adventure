//grade calculator  exam1 %40, exam2 %60
let [exam1, exam2] = [95,70];
let result = 0;
result = exam1*0.40 + exam2*0.60;
let msg = "";
msg = (result>50) ? (result="Passed") : (result="Fail");    //ternary if
console.log(`Status: ${msg}, average: ${result}`);