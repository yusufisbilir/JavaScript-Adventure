const list1 = [1,2,3,4];
const [one,two,three] = list1;
console.log(one);   //1



const object = {
    val1:"val10",
    val2:"val20",
    val3:"val30",
    val4:{
        name:"name",
        surname:"surname",
    },
};

const {val1} = object;
console.log(val1);

const {val4:{name: newVal}} = object;
console.log(newVal);    //name