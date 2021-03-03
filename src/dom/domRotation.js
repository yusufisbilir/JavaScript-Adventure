let val;
const list1 = document.querySelector('ul.list');
console.log(list1);

val = list1.childNodes[1].nodeType;
// 1 element
// 3 text
// 8 comment

val = list1.firstElementChild;


val = list1.childElementCount;

// parent element
val = list1.parentElement;


console.log(val);