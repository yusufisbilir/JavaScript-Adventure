const myFrom = document.querySelector("#form");
const Name = document.querySelector("#name");

myFrom.addEventListener('submit',eventX);
myFrom.addEventListener('keydown',eventX);
myFrom.addEventListener('keypress',eventX);

myFrom.addEventListener('focus',eventX);
myFrom.addEventListener('blur',eventX);

myFrom.addEventListener('cut',eventX);
myFrom.addEventListener('paste',eventX);

myFrom.addEventListener('input',eventX);


function eventX(e){
    // document.querySelector('.link').textContent = Name.value
    console.log("Event: "+ e.type);

    e.preventDefault();
};