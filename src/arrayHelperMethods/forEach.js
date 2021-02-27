// forEach
let numbers = [1,2,4,5];

numbers.forEach((item, index)=>{
    console.log(item, index);
});


//my forEach function
logArr(numbers, function(item,index){
    console.log(item,index);
});

function logArr(array, callback){
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i)
        
    };
};