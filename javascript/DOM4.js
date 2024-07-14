const title =document.querySelector('h1');
console.log(title.style); //to access the style
console.log(title.style.color); //to the color, if i want to know the color.

//to add my own style through Js
title.style.margin='50px';
title.style.color='crimson';
title.style.fontSize='60px';

// to delete a style added
title.style.margin =' '; //empty string
