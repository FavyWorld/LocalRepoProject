// function declearation (Hoisting works for decleartion, anywhere you put it on the code and any plave you declear it it will work)

// function greet(){
//     console.log('Hello there');
// }
// //functiin expression

// greet(); //we can declear it 3times 
// greet();
// greet();

// // Another way which is known as expression

// const speak = function(){
//     console.log('good day')
// }

// // calling it

// speak();
// speak();
// speak();

//Arguments and parameters

// const speak = function(name, time){
//     console.log(`good ${time} ${name}`);
// };
// speak('mario', 'morning');

// const speak = function(name ='luigi', time ='night'){
//     console.log(`good ${time} ${name}`);
// };
// speak();
// speak('shun', 'day');


//returning values
//regular function
// const calcArea =function(radius){
//     return 3.14 * radius**2;
// };


// arrow function how to write it compare to regular function
const calcArea = (radius) =>3.14 * radius**2;

// to access it now with return
const area =calcArea(5)
console.log(area);


