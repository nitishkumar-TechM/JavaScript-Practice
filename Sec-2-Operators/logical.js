console.log('Test Nitish');

// Falsy (false)
// undefined
// null
// 0
// ''
// NaN
// false

// Anything that is not Falsy -> Truthy

// Short-circuiting

let userColor = undefined
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

