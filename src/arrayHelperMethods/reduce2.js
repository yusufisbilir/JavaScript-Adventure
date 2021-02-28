const arr = [1,2,3,4,5,6];


// filter func with reduce
const newArr = arr.reduce((pre,curr)=>{ //pre is empty array
    if(curr>3){
        pre.push(curr); //pushing elements to pre(array)
    }
    return pre;
},[]);

console.log(newArr);    //log pre(array)


// find func with reduce
const newFind = arr.reduce((pre,curr)=>{
    if (curr === 2){
        return curr;
    }else{
        return pre;
    }
}, undefined);

console.log(newFind);   //2