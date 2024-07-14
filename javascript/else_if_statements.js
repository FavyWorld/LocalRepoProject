const password = '123456789111';
if(password.length >= 12){
    console.log('the password is stronger')
}
else if(password.length >= 8){
    console.log('that password is long enough');
} else{
    console.log('password is not long enough');
}