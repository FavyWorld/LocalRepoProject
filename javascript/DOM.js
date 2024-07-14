// The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can 
// change the document structure, style, and content. The DOM represents the document as nodes and objects; this way, programming l
// anguages can interact with the page. Event handling allows web pages to be interactive and responsive to user actions, making the web 
// experience dynamic and engaging.

//Basic DOM Manipulation:

// Selecting Elements: Use methods like document.getElementById(), document.querySelector(), and document.querySelectorAll() 
// to select elements from the HTML document.
// javascript let header = document.getElementById('header'); let items = document.querySelectorAll('.item');

// Modifying Elements: Once selected, you can change elements’ text content, HTML, and CSS styles. 
// For example, to change the text of an element: javascript header.textContent = 'New Header Text';

// Creating and Removing Elements: You can create new elements with document.createElement() and add them to the DOM 
// using methods like .appendChild() or .insertBefore().  To remove an element, use .removeChild(). 
// javascript let newElement = document.createElement('div');  document.body.appendChild(newElement); 
// document.body.removeChild(newElement);

// const para = document.querySelector('.error');
// console.log(para);

// to select all paragraghs Element

// const paras = document.querySelectorAll('p');

// const error = document.querySelectorAll('.error');

// console.log(paras); //we  cn use [] to select each para




//get an element by ID

const title = document.getElementById('page-title');
console.log(title);

// get element by class name

const errors = document.getElementsByClassName('error');
console.log(errors);

//get element by tag name

const paras =document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);

