//Console
console.log("hello world");
console.warn("This is warn");
console.alert("This is alert");
console.error("This is error");

// This is a comment 


// Variables ES6
let x = 10;
const y = 12;

let sth;
let $sth;
let _sth;

// Template literal
const name = "Yusuf";
const surname = "Emir";
let nameSurname = `Hello my name is ${name} ${surname}`;
console.log(nameSurname);

// List
const y = [1,2,3,4,5];
y.push(0);      //added end of the list
y.shift(10);    //first element deleted
console.log(y);

// Pirimitive types
//string
//number
//boolean
//null
//undefinded


// reference types - objects
//Array
let z = [1,2,3];

//Object
let adress = {
    city:"Kocaeli",
    village:"Gebze"
};

//function
let calculate = function(){
    return 0;
};



// Type conversion
console.log(typeof "12", typeof 12); //type of

let c = 10;

let strX = String(c);  //to String
c = c.toString()


c = Number(c); //to Number


//parseInt, parseFloat
c = parseInt(c);
c = parseFloat(c);


// comparsion operators
c = (2>3) && (4<5);
c = (2>3) || (4<5);
c = (2!=3) || (4<5);