class Person{
    static x = 0;

    constructor(name,surname) {
        this.name = name;
        this.surname = surname;

        Person.x++;
    };

    sayHi(){
        return `Hello I'm ${this.name} ${this.surname}`;
    };

    static test(){
        return `i am static method`
    };
};

class Student extends Person{
    constructor(name,surname,age) {
        super(name,surname);
        this.age = age;
    };

    sayAge(){
        return this.age
    }İ
};

const yusuf = new Person('yusuf','emir');
console.log(yusuf.sayHi());

const emir = new Student('yusuf','emir',20);
console.log(emir.sayAge());

console.log(Person.test());