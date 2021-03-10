//Person Constructor
function Person(name,surname){
    this.name = name;
    this.surname = surname;
};

//Prototype
Person.prototype.sayHiPerson = function(){
    return `Hello I'm ${this.name} ${this.surname}`
};

function Student(name,surname,age,school){
    // this.name = name;
    // this.surname = surname;
    Person.call(this,name,surname)  //inheritence constructor
    this.age = age;
    this.school = school;
};
Student.prototype = Object.create(Person.prototype);    //inheritence proto

Student.prototype.sayHiStudent = function(){
    return `name: ${this.name}, surname ${this.surname}, age: ${this.age}, school: ${this.school}`;
};



const yusuf = new Person('yusuf','emir');
console.log(yusuf.sayHiPerson());

const emir = new Student('yusuf','emir',20,'xx');
console.log(emir.sayHiStudent());
console.log(emir.sayHiPerson());