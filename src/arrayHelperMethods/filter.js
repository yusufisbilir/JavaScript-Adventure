// filter
const plants = [
    {name:"grape", typex:"fruit"},
    {name:"spinach", typex:"vegetable"},
    {name:"apple", typex:"fruit"},
    {name:"pumkin", typex:"vegetable"},
]; 

const fruits = plants.filter(function(item){
    return item.type ==="fruit"
});
console.log(fruits);


//my filter
function myFilter(arr, call){
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {

        const result = call(arr[i]);
        if(result){
            newArr.push(arr[i]);
        };
        
    };
    return newArr;
};

function filter(plants){
    return plants.typex === "fruit"
};
const myFruits = myFilter(plants, filter);
console.log(myFruits);