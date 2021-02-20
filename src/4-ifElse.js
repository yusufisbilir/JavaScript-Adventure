let date = new Date();

hour = date.getHours();

console.log(hour);

let greeting;

if (hour < 10) {
    greeting = "Good morning";
  } else if (hour < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  };

console.log(greeting);


// Tenrary if

let a = 10, b = 5, c = 0; //long version
if(a>b){
    c = a-b;
}else{
    c = a+b
}
console.log(c);

//short version
c = (a>b) ? (a-b) : (a+b);  // c = (condition) ? (true) : (false)
console.log(c);