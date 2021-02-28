const cites = [
    {name:"Istanbul", plate:34},
    {name:"Ankara", plate:6},
    {name:"Bursa", plate:16},
    {name:"Izmir", plate:35},
    {name:"Tokat", plate:60},
    {name:"Trabzon", plate:61},
];

cites.sort(function (a, b){
    return b.plate - a.plate;
})

console.log(cites);