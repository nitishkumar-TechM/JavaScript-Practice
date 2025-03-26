// Math Object (Built-in Object in JavaScript)
console.log('Random number: ', Math.random());

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

console.log('Random number between two numbers: ', getRandomArbitrary(10,20));

console.log('Round', Math.round(1.90));

console.log('Max', Math.max(1, 2, 3, 4, 5));
console.log('Min', Math.min(1, 2, 3, 4, 5));

console.log('-------------String----------------');

// String primitive
const message = '  This is my first message  ';
// const message = '  This is my  \nfirst message  ';

// String Object
const another = new String('hi');

console.log(typeof message);
console.log(typeof another);

console.log('Length : ', message.length);
console.log('Character at a given index : ', message[0]);
console.log('Includes : ', message.includes('my'));
console.log('Starts with : ', message.startsWith('This'));
console.log('Ends with : ', message.endsWith('e'));
console.log('Index of : ', message.indexOf('my'));
console.log('Replace : ', message.replace('first', 'second'));
console.log('To Upper Case : ', message.toUpperCase());
console.log('Trim : ', message.trim());
console.log('Trim Left : ', message.trimLeft());
console.log('Split : ', message.trim().split(' '));

console.log('-----------------Date---------------------');

// Date Object
const now = new Date();
const date = new Date('March 31 2025 9:00');
const date2 = new Date(2019, 4, 23, 9)

console.log(now);
console.log('date :', date);
console.log('date2 :', date2);
console.log(now.getFullYear());
console.log(now.setFullYear(2019));
console.log('now', now.toDateString());
console.log('now', now.toTimeString());
console.log('now', now.toISOString());






















