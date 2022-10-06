const array = ['item1', 'item2', 'item3'];
const object = {
    key1: 'item1',
    key2: 'item2',
    key3: 'item3'
}
const firstNmae = "sakjjask";
// ARRAYS ARE ITERABLE
for (let item of array) {
    console.log(item);
}

// OBJECTS ARE NOT ITERABLE, TypeError: object is not iterable
// for (let item of object) {
//     console.log(item);
// }

// Strings are array like object

for (let char of firstNmae) {
    console.log(char);
}

// SET IS ITERABLE
/* 
sets have its own methods
No index based access
Order is not guranteed
unique items only
*/
const numbers = new Set([1, 2, 2, 3]);
numbers.add(4);
numbers.add(['item1', 'item2']);
numbers.add(['item1', 'item2']);

console.log(numbers);
console.log(numbers.has(1))

// set doesn't support length property
let length = 0;
for (let e of numbers) {
    length++;
    console.log(e);
}

console.log(length);

// MAP OBJECTS
const person = new Map([
    ['myname', 'adarsh'],
    ['hername', 'godknows']
]);
person.set('firstName', 'amit');
person.set('age', 23);
person.set(1, 'one'); // here in this Map , key 1 is a number, where as in obkect literal it key is 99% string
person.set([1, 2, 3], 'onetwothree');
console.log(person);

// accessing values
console.log(person.get('age'));
// print all keys
console.log(person.keys());

for (let key of person.keys()) {
    console.log(key, typeof key);
}

for (let [key, value] of person) {
    console.log(key, value);
}
// **************************************
const person1 = {
    id: 1,
    firstNmae: "xyz"
}

const extraInfo = new Map();
extraInfo.set(person1, { age: 8, gender: "male" });

console.log(person1.id);
console.log(extraInfo.get(person1).gender);

// OPTIONAL CHAINING

let user = {
        firstName: "harshit"
    }
    // let user;

console.log(user.firstName);
// console.log(user?.firstName);
console.log(user.address);

// 8:36