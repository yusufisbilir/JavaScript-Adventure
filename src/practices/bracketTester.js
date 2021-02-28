//reduce function practice, bracket tester
// (()) - True, (() -False

function bracketTester(text){
    const arr = text.split("")  //str to array, example ["a","b","c"]
    const test = arr.reduce((pre,curr)=>{
        if(curr=="("){
            pre +=1;
        }
        if(curr==")"){
            pre -=1;
        }
        return pre;

    },0);   //initial = 0 (True), initial != 0 (false)

    if(test!=0){
        return "Missing Brackets"
    }else{
        return "Brackets Complete"
    }
};

console.log(bracketTester("((()))"));