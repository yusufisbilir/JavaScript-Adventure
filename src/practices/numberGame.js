// Game
let randomNumber = Math.floor((Math.random() *10)+1); //1-10 random number
let userNumber = 5; //prompt
let msg = "";

if(userNumber == randomNumber)
    msg = "TRUE";
else if(userNumber>randomNumber)
    msg = "-";
else{msg = "+"};

console.log(msg);