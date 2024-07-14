// Activities 1

let name='favy';
console.log(name, typeof name);

let age=25;
console.log(age, typeof age);

let isStudent=false;
console.log(isStudent, typeof isStudent);

let address=['abeokuta Nigeria'];
console.log(address, typeof address);

let hobbies=['gaming', 'cooking', 'coding'];
console.log(hobbies, typeof hobbies);

let undefinedVariable;
console.log(undefinedVariable, typeof undefinedVariable);

let nullVariable=null;
console.log(nullVariable, typeof nullVariable);

// Activities 2

let userName=prompt('What is your name?');
let userAge=prompt('How old are you?');
//Convert userAge to number
userAge=Number(userAge);

let currentYear= new Date().getFullYear();
let yearOfBirth= userAge - currentYear;

// display result
alert(`Hello Mr ${userName} ! you are ${userAge} years old and born in the year ${yearOfBirth}.`)




