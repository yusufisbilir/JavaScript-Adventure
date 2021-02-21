let person = {
    name:"name",
    birthDay:2001,
    age: function(){
        return 2021 - (this.birthDay);
    },
};

console.log(person.age());