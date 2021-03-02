// Create
const newElement = document.createElement('li');
newElement.className='list-item';
newElement.textContent = 'New Element';
document.querySelector('ul').appendChild(newElement);
console.log(newElement);

// Replace
const newHeader  = document.createElement('h6');
newHeader.id = 'h6-header';
newHeader.textContent = 'New Header';
const oldHeader = document.querySelector('h1')
const headerParent = document.querySelector('body');
headerParent.replaceChild(newHeader,oldHeader);

// delete
const listItem = document.querySelector('li');
listItem.remove();  
