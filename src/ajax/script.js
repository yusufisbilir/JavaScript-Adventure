var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.readyState = ()=>{
    if (xhr.readyState===4){
        if(xhr.status===200){
            console.log(xhr.responseText);
        }else if(xhr.status==404){
            console.log('404 page not found');
        }
    }
}

xhr.onprogress = ()=>{
    console.log('on progressing');
}

xhr.open('GET','text.txt',true); //true = async
xhr.send();
