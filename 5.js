//Write a function to find the factorial of a number.

var num = prompt('Enter a number');
var factorial = 1;

function fact(){
    for(var i = num; i >0; i--){

    factorial = factorial * i;
    console.log(factorial);
}
return factorial;
}

console.log('The factorial is ' + fact())
