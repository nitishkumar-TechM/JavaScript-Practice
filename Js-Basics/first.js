let name = 'Nitish';
console.log(name);

// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive

let firstName = 'Nitish';
let lastName= 'Kumar';

const interestRate = 0.3;
// interestRate = 1;
console.log('interestRate ', interestRate);

// Premitive / Value Types
let studentName = 'Ram'; // String Literal
let age = 30;  // Number Literal
let isApproved = true; // Boolean Literal
let rollNumber = undefined;
let selectedColor = null;


// Reference type
let person ={
    name : 'Nitish',
    age: 25
};

// Dot Notation
person.name = 'John';

// Bracket Notation
let selection ='name';
person[selection] = 'Ram'
person['name'] = 'Shayam'

console.log(person.name);
console.log('Person ', person);

// Array
let selectedColors = ['red', 'blue'];
selectedColors[2] ='green';
selectedColors[3] = 3;

console.log(selectedColors.length);

// Function

// Performing a Task
 function greet(name, lastName='kumar') {
    console.log('Hello world ' + name + ' ' + lastName);    
 }

 greet('Nitish');
 greet('Rahul', 'Raj');

 // Calculating a Value
 function square(number){
    return number * number;
 }

 let num = square(6);
 console.log('square', num);
 
 console.log(square(2));
 



