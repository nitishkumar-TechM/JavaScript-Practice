console.log('---------------Exercise-------------------');

console.log('Exercise 1:-');

// arrayFromRange(min, max)  - should return an array of numbers from min to max

const numbers = arrayFromRange(1, 9);
console.log(numbers); // [1, 2, 3, 4]

function arrayFromRange(min, max) {
    let arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}

console.log('Exercise 2:-');

// includes(array, element) - 
// should return true if the element exists in the array, otherwise false

const numbers2 = [1, 2, 3, 4];

console.log(includes(numbers2, 1)); // trues
console.log(includes(numbers2, -1)); // false

function includes(array, serachElement) {
    for (let element of array) {
        if (element === serachElement) {
            return true;
        }
    }
    return false;
}

console.log('Exercise 3:-');

// except(array, excluded) -
// should return an array excluding the excluded elements

const numbers3 = [1, 2, 3, 4, 1, 1];

const output = except(numbers3, [1, 2]);
console.log(output); // [3, 4]

function except(array, excludes) {
    let output = [];
    for (let element of array) {
        if (!excludes.includes(element)) {
            output.push(element);
        }
    }
    return output;
}

console.log('Exercise 4:-');

// moving an element

const numbers4 = [1, 2, 3, 4];
const output2 = move(numbers4, 1, -2);
console.log(output2); // [2, 1, 3, 4]

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];

    output.splice(index + offset, 0, element);
    return output;

}

console.log('Exercise 5:-');

// countOccurrences(array, element) -
// should return the number of times the element exists in the array

const numbers5 = [1, 2, 3, 4, 1, 1];

const count = countOccurrences(numbers5, 1);
console.log(count); // 3

function countOccurrences(array, element) {
    let count = 0;
    for (let ele of array) {
        if (ele === element) {
            count++;
        }
    }
    return count;
}

console.log(countOccurrences2(numbers5, 1));


function countOccurrences2(array, element) {
    return array.reduce((accumulator, current) => {
        const occurrence = (current === element) ? 1 : 0;
        console.log(accumulator, current, element);        
        return accumulator + occurrence;
    }, 0);
}

console.log('Exercise 6:-');

// get max number in the array

const numbers6 = [1, 2, 3, 4];

const max = getMax(numbers6);
console.log(max);   

function getMax(array) {
    if (array.length === 0) return undefined;
    // let max = array[0];
    // for (let ele of array) {
    //     if (ele > max) {
    //         max = ele;
    //     }
    // }
    // return max;

    return array.reduce((a, b) => (a > b) ? a : b);
}


// Any time you have an array of values and you want to reduce them to a single value,
// you should think of reduce() method.

console.log('Exercise 7:-');

// Movies

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title 


const titles = movies
    .filter(m => m.year === 2018 && m.rating > 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);
    // .forEach(m => console.log(m));

console.log(titles); // ['b', 'a']












