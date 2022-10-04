let num = 4;

console.log(isEven(num));

//Function expression will throw error, undefined
// const isEven = () => { return num % 2 == 0; }

// Function declaration will not throw error
function isEven(x) {
    return x % 2 == 0;
}

// lexical scope chaining

const myVar = "value1";

/* 
myApp -> local + global scope
myFunction -> local + myApp scope + global
myFunc2 -> local + myFunction scope + myApp + global
*/
function myApp() {
    function myFunc() {
        const myFunc2 = () => {
            console.log("inside myFunc", myVar);
        }

        myFunc2();
    }

    console.log(myVar);
    myFunc();
}
myApp();