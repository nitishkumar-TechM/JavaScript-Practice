console.log('--------------let vs var----------------');

let x = 0;

var y = 1;

function start() {
    for (var i = 0; i < 5; i++) {
        console.log('Inside for loop:', i);
        if (i === 2) {
            var i = 10; // This will change the value of i in the for loop
            console.log('Inside if block:', i);
        }
    }

    console.log(i);
    
}
// console.log('Outside for loop:', i); // Uncaught ReferenceError: i is not defined


start();

// When we declare the variable with 'var'. 
// It's scope is not limited to the block in which it's defined.
// It's scope is the function in which it's defined.

// Before ES6, 'var' was the only way to declare a variable.

// 'let' was introduced in ES6.

// ES6 (ES2015) : let, const => block scope
// ES5 : var => function scope

var color = 'red';
let age = 30;

// When we use 'var' outside of the function, it will be available in the global scope.
// and attaches the global varible to the window object in the browser.
console.log(window.color); // red
console.log(window); // red

// window object is something centgral, there is only one instence of the window object,
// lets say we are using a third party library. if that third party library 
// also has a with the same name, that variable can override the global variable.
// So, we should avoid using 'var' in the global scope.

// if we define a global function it is also attched to the woindow object.
function greet() {
    console.log('Hello');
}

window.greet(); // Hello

// How to encapsulate these functions in separate modules so they are not
// attached to the window object.

// Avoid using 'var' beacuse it is function scoped not block scoped.