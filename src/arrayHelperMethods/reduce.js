const numbers = [1,2,3,4,5,6];

// numbers.reduce((pre,curr,currIndex)=>{console.log(pre,curr,currIndex);},0);

// 0 1 0
// undefined 2 1
// undefined 3 2
// undefined 4 3
// undefined 5 4
// undefined 6 5

const result = numbers.reduce((total, curr, index)=>{
    return total + curr;
},0);
console.log(result); //21


// map function with reduce
const newArr = numbers.reduce((arr, number)=>{
    arr.push(number*2);
    return arr;
},[]);
console.log(newArr);