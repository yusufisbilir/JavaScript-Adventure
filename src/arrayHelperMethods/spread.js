const numbers = [1,2,3,4,5,6];

//spread operator
let copy = [...numbers];    //new array
console.log(copy);  //[ 1, 2, 3, 4, 5, 6 ]

let words = "Hello world";
words = [...words];
console.log(words); //'H', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd'


function total(...params) {
    let result=0;
    params.forEach(element => {
        result += element
    });
    return result;
};
console.log(total(12,3,4,5,65,6,7,7));