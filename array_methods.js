/* 
important array methods

forEach, map, filter, reduce
*/

const numbers = [4, 2, 5, 8];

function multiplyby2(number, index) {
    console.log("index is ", index);
    console.log(number * 2);
}

// multiplyby2(numbers[0], 0);

for (let i = 0; i < numbers.length; i++) {
    multiplyby2(numbers[i], i);
}

// numbers.forEach(multiplyby2)

numbers.forEach((num, ind) => console.log(`index is ${ind} number is ${num}`));

// MAP
// map will create a new array, by mapping thorugh the values in array, the function must return some thing or else undefined will be store in new array
const square = function(number) {
    return number * number;
}

const squarenumber = numbers.map(square);
console.log(squarenumber);

// FILTER
//  it filter based of truthy value and falsey value

const evenNumber = numbers.filter((number) => {
    return number % 2 === 0;
})

console.log(evenNumber);

// REDUCE
// aim : sum of all numbers
const sum = numbers.reduce((accumulator, currentvalue) => { return accumulator + currentvalue }, 0);

console.log(sum);

// SORT
// it will convert numbers to string and then sort
numbers.sort((a, b) => a - b);
console.log(numbers);


// FIND
// EVERY
// SPLICE
// SOME
// FILL
// LIKE