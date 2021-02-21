//long version
function sayHi() {
  console.log("Hi");
};
sayHi()

//assigning the function to the variable
const sayHi2 = function () {
  console.log("Hi2");
};
sayHi2()

//fat arrow
//not have parameters
const fatArrow = _ =>{
    console.log("Hi Arrow Function");
};
fatArrow()

//shortest version
const sqrt = (num) => num*num;

console.log(sqrt(10));