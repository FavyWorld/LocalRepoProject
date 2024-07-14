//changing the text in an element
const para =document.querySelector('p');
//console.log(para.innerText);
para.innerText ='ninjas are awesome!'; //changed on the webpge


// changing plenty  p tag elements content

const paras =document.querySelectorAll('p')

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += 'new text'; //adding extra text to all on webpages
// });


// Changing the HTML not Text
const content=document.querySelector('.content');
//console.log(content.innerHTML);

//to change  it now
//content.innerHTML= '<h2>The new H2</h2>'; // changed on the page

const people = ['mario', 'luigi', 'yoshi'];
people.forEach(person =>{
    content.innerHTML += `<p>${person}</p>`;
});