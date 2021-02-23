const arr = ["abc","klm","xyz"];
console.log(...arr);    //abc klm xyz

const arr2 = [...arr,1,2,3];    //[ 'abc', 'klm', 'xyz', 1, 2, 3 ]
console.log(arr2);

const arr3 = ["a","b","c","d"];
const [val1,val2, ...rest] = arr3;  //[ 'c', 'd' ]
console.log(rest);