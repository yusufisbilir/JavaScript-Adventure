const users = [
    {id:1, name:"a"},
    {id:2, name:"b"},
    {id:3, name:"c"},
    {id:4, name:"d"},
    {id:5, name:"e"},
    {id:6, name:"f"},
];

//find
const findF = users.find((user)=> user.id === 2); //just 1 element
console.log(findF);