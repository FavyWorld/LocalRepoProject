const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('herf', 'https://www.favyworld.free.nf/');
link.innerText= 'FavyWorld Website';


const msg= document.querySelector('p');
console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');
msg.setAttribute('style', 'color:green');