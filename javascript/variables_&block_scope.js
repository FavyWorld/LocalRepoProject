// variables & block scope
let age =30;

if(true){
    let age =40;
    //lets add name too
    let name = 'shun';
    console.log('inside 1st code block:', age, name); // we can redefine variable inside code block, the outcome in the code block will be 40

    //Nested code block, having another code nested in a code block.
    if(true){
        console.log('inside 2nd code block:', age);
    }
}

console.log('outside code block:', age, name); // we later add name here but its not reflecting  because its code is at  the top not the 'inside code block'
