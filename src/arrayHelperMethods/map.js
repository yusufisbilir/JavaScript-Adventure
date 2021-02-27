// map
const numbers = [1,2,3,4,5,6];

const newNumbers  = numbers.map((num)=>{    //[ 3, 6, 9, 12, 15, 18 ]
    return num*3;
});
console.log(newNumbers);



//my map function
function myMap(arr, process){
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(process(arr[i]));
    };
    return newArr;
};

const myNewArr = myMap(numbers, function(num){
    return num*5;
});
console.log(myNewArr);