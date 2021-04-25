document.querySelector('#button1').addEventListener('click',getText);
document.querySelector('#button2').addEventListener('click',getJson);
document.querySelector('#button3').addEventListener('click',getApi);
const output = document.getElementById("output");

function getText(){
    fetch("data.txt")
    .then((response)=>{
        
        return response.text();
    })
    .then((text)=>{
        output.innerHTML += text;
    })
    .catch(err=>console.log(err));
};

function getJson(){
    fetch('data.json')
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        let result = "<ul>";
        data.forEach(element => {
            result += `<li> Title: ${element.title} - text: ${element.text} </li>`    
        });

        result += "</ul>";

        output.innerHTML+=result
    }).catch(err=>{console.log(err);})

};

function getApi(){
    fetch('https://api.github.com/users')
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        let result = "<ul>";
        data.forEach(element => {
            result += `<li> User Name: ${element.login} </li>`
        });

        result += "</ul>";

        output.innerHTML+=result
    }).catch(err=>{console.log(err);})
};