const singleHappyBirthday = function() {
    console.log("aur bhai, party dee")
}



// singleHappyBirthday();


function findTarget(array, target) {
    for (let num of array) {
        if (num === target) {
            console.log("found");
        }
    }
}

findTarget([1, 2, 3, 4, 5, 6], 3);


// ARROW FUNCTION

const arrowFunction = () => {
    console.log("I am arrow function")
}

arrowFunction()