//template strings
const title='Best reads of 2020';
const author='Wole Soyinka';
const likes=30;

//concatenatin way
// let result= 'The blog called ' + title +' by ' + author + ' has ' + likes + ' likes';
// console.log(result);


//template string or template literal  way
let result= `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);


//creating html templates
let html=`
<h2>${title}</h2>
<p>By ${likes}</p>
<span>This blog has ${likes} likes</span>
`;

console.log(html);