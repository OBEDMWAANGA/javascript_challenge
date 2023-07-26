//second challenge
var num = prompt('enter number');

function isprime(num){
    if(num <=1) return false;

    for(var i = 2; i < num; i++){
        if(num % i ===0) return false;
    }
    return true;
}

if(isprime(num)){
    console.log(num +' is a prime number.')
}
else{
    console.log(num +' is not a prime number.')
}