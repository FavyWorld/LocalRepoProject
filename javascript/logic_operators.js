// logical operators - OR || and AND &&

const password = '12345678911@1';
if(password.length >= 12 && password.includes('@')){
    console.log('the password is stronger')
}
else if(password.length >= 8 || password.includes('@') && password.length>=5){
    console.log('that password is strong enough');
} else{
    console.log('password is not strong enough');
}