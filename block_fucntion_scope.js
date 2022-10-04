/* let and const are block scope
var is function scope
 */

{
    let firstName = "harshit"
    console.log(firstName + " inside block");
    var myname = "adarsh"
}
//below line will throw error as let is block scoped, it's scope is limited to block only
// console.log(firstName + " out of block");

// myname is var hence global scoped,it will not throw error
console.log(myname);


function addTwo(a, b = 1) {
    return a + b;
}

const ans = addTwo(4);


// CALLBACK FUCNTION

function myFunc(callback) {
    callback();
}

function myFunc2() {
    console.log("inside my func 2")
}

myFunc(myFunc2);

// FUNCTION RETURNING FUNCTION

function myFunc() {

    function hello() {
        console.log('hello javascript');
    }
    return hello;
}

const value = myFunc();
value();