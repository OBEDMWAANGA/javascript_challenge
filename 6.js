//Day 6: Scope and Closures
//Code Challenge: Write a closure that increments a counter on each invocation.

function createcounter(){

    var counter = 0; // only accessable in this scope

    function counterf(){ //inner function
        counter++;
        return counter;
    }
    return counterf; // returns inner function
}

const counterfun = createcounter();

/////
console.log(counterfun());
console.log(counterfun());
console.log(counterfun());