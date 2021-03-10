//Array
let nameArr = ['yusuf','emir'];
const [name,surname] = nameArr;
// console.log(surname);

let numArr = [1,2,3,4,5,6];
let [one,two, ...others] = numArr;
console.log(others);  //[ 3, 4, 5, 6 ]

//Object
let obj = {
    x : 1,
    y : 2,
    z : 3,
};
const{x,y,z} = obj;

console.log(x); //1
