const header = document.getElementById("header");
console.log(header);

//style
header.style.backgroundColor = "red";
header.style.color =  "white";
header.style.padding = "1rem";

// content update
header.textContent = "new header";
header.innerText = "new header2";

header.innerHTML = "<h3>inner html</h3>";


document.querySelector('h1');
document.querySelector('#ul');
document.querySelector('.li');