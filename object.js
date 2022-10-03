/*
objects store key value pairs, 
keys are also refered to as properties, 
key are bydefault string
objects don't have index 
object is referce type just like array
 */

const person = {
    name: "harsit",
    age: 22,
    hobbies: ["Guitar", "Sleeping", "Singing"]
};

console.log(typeof person);
console.log(person.name);
console.log(person.hobbies);

const key = "email";
person.gender = "male";
person["key"] = "kadarsh115@gmail.com";
person[key] = "kadarsh115@gmail.com";

console.log(person);

// iterating object
for (let key in person) {
    console.log(`${key} : ${person[key]}`);
}

console.log(Object.keys(person)); //it will give array of keys

for (let key of Object.keys(person)) {
    console.log(person[key]);
}

const key1 = 'one',
    key2 = 'two',
    val1 = 'value1',
    val2 = 'value2';

const obj = {
    [key1]: val1,
    [key2]: val2
}

console.log(obj);

// spread operstor
const arr1 = [1, 2, 3],
    arr2 = [4, 5, 6];
const newarr = [...arr1, ...arr2, ...
    "12345"
];
console.log(newarr);