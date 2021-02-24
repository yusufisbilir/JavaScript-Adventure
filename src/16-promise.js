// promise for clean code
// Callback hell
const asyncFunc = (aNumber) =>{
    return new Promise((resolve,reject) =>{
        if(aNumber === 4 )
            resolve("everything okay");
        else
            reject("There was a problem")
    });
};

asyncFunc(4)
    .then((data) =>{
        console.log(data);  //data = resolves parameter ("everything okay")
        return 1;
    })
    .then((data)=>{
        console.log(data);  // data = first thens return (1)
        return 2;
    })
    .then((data)=>{
        console.log(data);
        return 3;
    })
    .then((data) => {console.log(data); return 4;})     //short version
    .catch((error) =>{
        console.log("Error");
    })