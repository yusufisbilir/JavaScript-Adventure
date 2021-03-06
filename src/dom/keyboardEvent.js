const myForm = document.querySelector("#form");
const Name = document.querySelector("#name");

myForm.addEventListener('submit',eventX);
myForm.addEventListener('keydown',eventX);
myForm.addEventListener('keypress',eventX);

myForm.addEventListener('focus',eventX);
myForm.addEventListener('blur',eventX);

myForm.addEventListener('cut',eventX);
myForm.addEventListener('paste',eventX);

myForm.addEventListener('input',eventX);


function eventX(e){
    // document.querySelector('.link').textContent = Name.value
    console.log("Event: "+ e.type);

    e.preventDefault();
};