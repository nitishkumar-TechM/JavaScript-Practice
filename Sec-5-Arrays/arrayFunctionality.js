// Arrow Function

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

const course = courses.find( course => course.name === 'a');

console.log('course: ', course);


// Removing Elements

const numbers = [1, 2, 3, 4];
const num = [1, 2, 3, 4];
console.log('numbers : ', numbers);

// End
const last = numbers.pop();
console.log('last : ', last);


// Beginning
const first = numbers.shift();
console.log('first : ', first);
console.log('numbers : ', numbers);

// Middle
num.splice(2, 1);
console.log('num : ', num);
// splice method can be used to remove elements from the middle of the array.
// first argument is the starting index of the element to be removed
// second argument is the number of elements to be removed.
// if we want to insert elements at the middle of the array, we can use splice method.

// Emptying an Array
console.log('-----Emptying an Array-----------');

let num2 = [1, 2, 3, 4];
let another = num2;
console.log('num2 : ', num2);

num2.push('a');


// Solution 1
num2 = [];  // This sol works only when there is no any 
// other references to the original
console.log('num2 : ', num2);  
console.log('another : ', another);

// Solution 2
console.log('Solution 2 : ');
let num3 = [1, 2, 3, 4, 5];
let anotherNum = num3;

num3.length = 0;  // it truncate the array

console.log('Original Array : ', num3);
console.log('Another Array : ', anotherNum);


// Solution 3
console.log('Solution 3 : ');
let num4 = [1, 2, 3, 4, 5];
let anotherNum2 = num4;

num4.splice(0, num4.length);  

console.log('Original Array : ', num4);
console.log('Another Array : ', anotherNum2);


// Solution 4
console.log('Solution 4 : ');

let num5 = [1, 2, 3, 4, 5];
let anotherNum3 = num5;
console.log('Original Array : ', num5);

while ( num5.length > 0) {
    num5.pop();
}

console.log('Original Array : ', num5);
console.log('Another Array : ', anotherNum3);


// Combining and Slicing Arrays

console.log('---------Combining and Slicing Arrays------------');

// const firstArray = [1 ,2 , 3];
const firstArray = [{ id: 1}];  // when the element of an array is an object
// and we combine the elements using concat, the reference of the object is copied
// not the object itself. So if we change the object in the first array, it will also
// change in the combined array. To avoid this, we can use slice method to create a copy
// of the original array.
const secondArray = [4, 5, 6];

const combined = firstArray.concat(secondArray);
console.log('Combined Array: ', combined);
console.log('Combined Array before change: ', JSON.parse(JSON.stringify(combined)));
firstArray[0].id = 14;

const slice = combined.slice(2, 4);
const slice2 = combined.slice(2);
const slice3 = combined.slice();  // copy of the original array
console.log('Slice Array: ', slice);
console.log('Slice2 Array: ', slice2);
console.log('Slice3 Array: ', slice3);

// Spread Operator

const firstArray1 = [{ id: 1}];
const secondArray2 = [4, 5, 6];

const spreadArray = [ ...firstArray1, 'a', ...secondArray2, 'b' ];
console.log('Combined via spread : ', spreadArray);

// Copying an Array
// const copy = spreadArray.slice()
const copy = [...spreadArray];
console.log('copy', copy);

// Iterating an Array
console.log('---------Iterating an Array------------');


const data = [1, 2, 3];

for (let num of data)
    console.log(num);


data.forEach((num, index) => console.log(index, num));

// Joinning Array

const dummyArray = [1, 2, 3, 'a', 'b'];
const joined = dummyArray.join('');
const joined2 = dummyArray.join(',');
const joined3 = dummyArray.join(' ');

console.log('Joined : ', joined);
console.log('Joined2 : ', joined2);
console.log('Joined3 : ', joined3);

const message = 'This is my first message';
const parts = message.split(' ');
console.log('Parts : ', parts);

const combinedParts = parts.join('-');
console.log('Combined Parts: ', combinedParts);









