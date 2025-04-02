// Filtering an Array

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(value => value >= 0);

console.log('Filtered Array:', filtered);
console.log(filtered);

// Output:
// Filtered Array: [ 1, 2, 3 ]

// Mapping an Array
console.log('---------------Mapping an Array-------------------');


// const items = filtered.map(n => '<li>' + n + '</li>');
const items = filtered.map(n => ({ value: n }));



console.log('Mapped Array:', items);

const html ='<ul>' + items.join('') + '</ul>';
console.log('Joined Array:', html);

//  Map() method is chaining method,
//  it can be used to map the array and then join the array to create a string.

const num2 = [1, -1, 2, 3];

const items2 = num2
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log('Mapped Array:', items2);

// Reducing an Array
console.log('---------------Reducing an Array-------------------');

const num3 = [1, -1, 2, 3];
// Example suppose each items in the array is the price of the product
// and we want to calculate the total price of the products in the array.

// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3, => a = 5
const sum = num3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log('Reduced Array:', sum);

// if we don't provide the initial value of the accumulator, 
// then the first element of the array will be used as the initial value of the accumulator.
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3, => a = 5

const sum2 = num3.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log('Reduced Array:', sum2);






