// Loops

//for
for(let i=0; i<2; i++){
    console.log("hello");
};

//while
let i = 1;
while(i<12){
    console.log("it work");
    i++;
    if(i==5){
        break;
    };
};

//do while
let x = 0;
do{
    console.log(x);
    x++;
}while(x<10);


//for with arrays
let cars = ["bmw","ford","mercedes"];

for(let i=0; i<cars.length; i++){
    console.log(cars[i]);
};


//for in
for(let i in cars){
    console.log(cars[i]);
};

//for of
for (car of cars){
    console.log(car);
}

//forEach
cars.forEach(function(item){
    console.log(item);
});


//map 
let val = cars.map(function(item){
    return item;
});

console.log(val);