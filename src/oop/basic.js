function crateStudent(name, age){
    return{
        name:name,
        age:age,

        //Method
        data:function(){
            return `My name is: ${this.name}, my age is: ${this.age}`
        },
    };
};
const yusuf = crateStudent('yusuf',20);
console.log(yusuf.name);