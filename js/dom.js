// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
//ParentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'red';
console.log(itemList.parentNode.parentNode.parentNode);  

// ParentElement 
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = ' green';
console.log(itemList.parentElement.parentElement.parentElement);

// ChildNodes
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[0].style.backgroundColor = 'yellow';
itemList.children[0].style.color = 'red';
itemList.children[1].style.backgroundColor = 'blue';
itemList.children[1].style.color = 'yellow';
itemList.children[2].style.backgroundColor = 'black';
itemList.children[2].style.color = 'white';
itemList.children[3].style.backgroundColor = 'red';
itemList.children[3].style.color = 'green';

 // FirstChild 
console.log(itemList.firstChild);
// FirstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';
//itemList.firstElementChild.style.backgroundColor = 'red';
//itemList.firstElementChild.style.color = 'white';

 // LasttChild 
console.log(itemList.lastChild);
// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';
//itemList.lastElementChild.style.backgroundColor = 'green';
//itemList.lastElementChild.style.color = '#ddd';

 // nextSibling
 //console.log(itemList.nextSibling);
 // nextElementSibling
//console.log(itemList.nextElementSibling);

// previousSibling
console.log(itemList.previousSibling);
// previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.textContent = 'Goodbey';
itemList.previousElementSibling.style.backgroundColor = 'green';
itemList.previousElementSibling.style.color = 'blue';

// createElement

// create a div
var newDiv = document.createElement('div');

// add className
newDiv.className = 'hello';

// add id
newDiv.id = 'hello-1';

// add attribute
newDiv.setAttribute('title', 'hello Div');

// create textNodes
var newDivText = document.createTextNode('Hello world');

// add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

// style 
newDiv.style.fontSize = '35px';
newDiv.style.fontFamily = 'cursive';
newDiv.style.fontWeight = 'bold';
newDiv.style.lineHeight = '30px';
newDiv.style.textAlign = 'center';
newDiv.style.color = 'red';


container.insertBefore(newDiv, h1);