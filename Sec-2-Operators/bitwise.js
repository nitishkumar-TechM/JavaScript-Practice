console.log('Test bit Nitish');

// Bitwise Operators

// 1 = 00000001  => 8 bits = 1 byte

// 2 = 00000010

// R = 00000011 = 3

console.log( 1 | 2); // Bitwise OR

console.log( 1 & 2); // Bitwise AND
// R = 00000000 = 0

// Read, Write, Execute
// 00000100 = 4
// 00000110 = 6
// 00000111 = 7

// Access Control System using Bitwise Operators
const readPermission = 4; // 0100
const writePermission = 2; // 0010
const executePermission = 1; // 0001

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes' : 'no';
console.log(message);


// excerise - swapping variables

// let a = 'red';
// let b = 'blue';

// let temp = a;
// a = b;
// b = temp;

// console.log(a);
// console.log(b);

// excercise - swapping variables without using temp variable

let a = 'red';
let b = 'blue';

// Method 1: Using addition and subtraction
a = a + b;
b = a - b;
a = a - b;

console.log(a); // blue
console.log(b); // red

// Method 2: Using array destructuring (ES6)
[a, b] = [b, a];

console.log(a); // red
console.log(b); // blue

// Method 3: Using bitwise XOR (already implemented above)
a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(a); // blue
console.log(b); // red







