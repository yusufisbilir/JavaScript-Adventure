function Person(name,birthday,adress){
    this.name = name;
    this.birthday = birthday;
    this.adress = adress;
};
Person.prototype.calculateAge = function(){
    let year = new Date();
    year = year.getFullYear();

    return `Age: ${year-this.birthday}`;
};

const yusuf = new Person('yusuf',2001, 'Kocaeli');
console.log(yusuf.calculateAge());