//Changing content on the webpage
let paragraph = document.getElementById('greeting');
console.log(paragraph);
paragraph.textContent ='Hello, DOM';
//after clicking the button
let button = document.getElementById('clickButton');
button.addEventListener('click', ()=>{
    button.textContent ='Clicked';
});
//giving bg color to listed content
let listItem= document.querySelectorAll('.hover-item');
console.log(listItem);

listItem.forEach(item =>{
    item.addEventListener('mouseover', () =>{
        item.style.backgroundColor ='blue';
    })

    item.addEventListener('mouseout', () =>{
        item.style.backgroundColor ='limegreen';
    })
})