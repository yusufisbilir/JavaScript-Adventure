const numbers = [1,2,3,4,5,6];

const numEvery = numbers.every((num)=> num>3);  // False
console.log(numEvery);

const numSome = numbers.some((num)=> num>3);    //True
console.log(numSome);