const content =document.querySelector('p');
//to get the class an element has

console.log(content.classList);

//to add  or remove class to a particular tag

content.classList.add('error');
content.classList.remove('error');
content.classList.add('success');

const paras =document.querySelectorAll('p');
paras.forEach(p => {
    console.log(p.textContent);
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }

    if(p.textContent.includes('success')){
        p.classList.add('success');
    }

    
});