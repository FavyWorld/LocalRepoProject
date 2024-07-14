// Conditional Logic Practice

let number = 20;
if(number > 0){
    console.log(`$[number] is positive`);
}

else if(number<0){
    console.log(`$[number] is negative`)
}

else{
    console.log(`$[number] is zero`)
}

//Looping Through Numbers

for(let i = 1; i <= 10; i++ ){
    console.log(i)
}

// Basic Function Creation

function sum(num1, num2){
    return num1 + num2
}

let result = sum(3,5);
console.log(result);