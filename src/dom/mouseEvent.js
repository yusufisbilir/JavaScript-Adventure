// document.querySelector('.link').addEventListener('click',mouseEvent);
// document.querySelector('.link').addEventListener('dblclick',mouseEvent);
// document.querySelector('.link').addEventListener('mousedown',mouseEvent);
// document.querySelector('.link').addEventListener('mouseup',mouseEvent);
// document.querySelector('.link').addEventListener('mouseenter',mouseEvent);
// document.querySelector('.link').addEventListener('mouseleave',mouseEvent);
// document.querySelector('.container').addEventListener('mouseover',mouseEvent);
// document.querySelector('.container').addEventListener('mouseout',mouseEvent);
document.querySelector('.container').addEventListener('mousemove',backGroundColorizer);//crusor coordinate


function mouseEvent(e){
    let val;
    val = e.type;
    console.log(val);
};

function backGroundColorizer(e){
    document.querySelector('.paragraph').textContent = `x: ${e.clientX} Y: ${e.clientY}`
    document.querySelector('.container').style.backgroundColor = 
    `rgb(${e.clientX%255},
         ${e.clientY%255},
         ${(e.clientY+e.clientX)%255})`
};