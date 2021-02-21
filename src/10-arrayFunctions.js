let abc = ["a", "b", "c", "d", "e", "f"];

let str = abc.toString(); //a,b,c,d,e,f

let join = abc.join(" | "); //a | b | c | d | e | f

abc.push("g"); // element added end of the array

abc.pop(); //last element deleted

abc.shift(); // first element deleted

abc.unshift("new element"); // element added to the top

delete abc[2];

abc.splice(4, 0, "1", "2", "3"); // start from 4, delete 0 element , add "1","2","3"

console.log(abc);

let odd = [1, 3, 5];
let even = [2, 4, 6];

let combine = odd.concat(even);
combine = combine.sort();
console.log(combine);

let newCombine = combine.slice(2,5); //index 2 to 5
console.log(newCombine);