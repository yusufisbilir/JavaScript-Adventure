//constructor functions
function Person(name,birthday,adress){
    //constructor
    this.name = name;
    this.birthday = birthday;
    this.adress = adress;

    //method
    this.calculateAge = ()=>{
        let year = new Date();
        year = year.getFullYear();

        return `Age: ${year-birthday}`;
    }; 
};

const yusuf = new Person('yusuf',2001, 'Kocaeli');
console.log(yusuf.calculateAge());