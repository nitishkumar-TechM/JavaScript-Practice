//for-in loop 
// use for iterarte over property of an object or elements in an array

const person = {
    name: 'Nitish',
    age: 25
};

//we want to display all the property of the person object
for (let key in person)
    console.log(key, person[key]);


//Dot Notation
person.name

// Bracket  Notation
person['name']

// Example with an array
const colors = ['red', 'green', 'blue'];

// Using for-in loop to iterate over array elements
for (let index in colors) {
    console.log(index, colors[index]);
}


//for-of
//new way to iterate over array

for (let color of colors)
    console.log(color);

    // Example with a string
const message = 'Hello World';

    // Using for-of loop to iterate over string characters
for (let char of message) {
    console.log(char);
}

//Break and Continue
let i = 0;

while (i <= 10){
    // if (i === 5) break;
    if (i % 2 === 0){
        i++;
        continue;
    }

    console.log(i);
    i++;    
}

