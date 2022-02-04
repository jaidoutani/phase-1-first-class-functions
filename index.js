//take a callback function as an argument
//call the callback function
//it doesn't matter what this function returns, so long as it calls the callback function
function receivesAFunction(cb) {
    return cb();
}

//take no arguments
//return a named function
function returnsANamedFunction() {
    return function fn() {
    }
}


//take no arguments
//return an anonymous function
let returnsAnAnonymousFunction = function() {
    return function() {
    }
}