// Sorting an Array

const numbers = [ 3, 6, 4, 7, 1];
console.log(numbers);

numbers.sort();

console.log('Sorted : ', numbers);

numbers.reverse();
console.log('Reversed : ',numbers);

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'javaScript' },
];

courses.sort((a, b) => {
    // a < b => -1
    // a > b => 1
    // a === b = 0

    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});

console.log(courses);

// Testing the elements of an Array

console.log('---------Testing the elements of an Array---------');

const numbers1 = [1, 2, -1, 3, 4];

// every() method - checks if all the elements of an array pass a test
// some() method - checks if at least one element of an array pass a test

const allPositive = numbers1.every(function(value) {
    return value >= 0;
});

const atLeastOnePositive = numbers1.some(function(value) {
    return value >= 0;
});

console.log(allPositive);
console.log(atLeastOnePositive);







