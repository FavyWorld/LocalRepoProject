// const names = 'shun';

// // funtions

// const greet =() => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// //methods

// let resultTwo = names.toUpperCase();
// console.log(resultTwo);


// //callbacks & foreach

// let people =['mario', 'luigi', 'ryu', 'shun', 'chun-li'];

// const logPerson =(person, index) => {
//     console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);

// get a reference to the 'ul'

const ul = document.querySelector('.people')

const people=['mario', 'luigi', 'ryu', 'shun', 'chun-li'];

let html = ``;

people.forEach(person =>{
    //create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML =html;

