// Adding element to array

const numbers = [3, 4];

// End
numbers.push(5, 6);

console.log('Numbers : ', numbers);


// Beginning
numbers.unshift(1, 2);

console.log('Numbers : ', numbers);


// Middle
numbers.splice(2, 0, 'a', 'b');
// splice(startIndex, deleteCount, itemsToAdd)

console.log('Numbers : ', numbers);

console.log('-----------------Finding Elements (primitive)--------------------');

// FINDING ELEMENTS (PRIMITIVES)

const num = [1, 2, 3, 1, 4];

console.log('indexOf',num.indexOf('1'));
console.log('indexOf',num.indexOf(1));
console.log('indexOf',num.indexOf(1, 2));  // start searching from index 2
console.log('lastIndexOf',num.lastIndexOf(1));

console.log(num.indexOf(1) !== -1);  // true -> number exists in the array

console.log(num.includes(1));


console.log('-----------------Finding Elements (reference)--------------------');

// FINDING ELEMENTS (OBJECT OR REFERENCE TYPES) 

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

// console.log(courses.includes({ id: 1, name: 'a' }));

const course = courses.find( course => course.name === 'a');

const course2 = courses.find(function(course) {
    return course.name === 'xyz'
})

const course3 = courses.findIndex(function(course) {
    return course.name === 'a'
})

console.log('course: ', course);
console.log('course2: ', course2);
console.log(course3);






