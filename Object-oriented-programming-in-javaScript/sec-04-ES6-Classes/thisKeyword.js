'use strict';
console.log('This Keyword');

const Circle = function() {
    this.draw = function() {
        console.log(this);
    }
};

const c = new Circle();

// Method Call
c.draw(); // Circle { draw: [Function] }

const draw = c.draw;  // getting the reference of the draw() method not calling
console.log(draw); // [Function] 

// Function Call (stand alone not part of any object)
draw(); // Window object
// In non-strict mode, this will be the global object (window in browsers)
// In strict mode, this will be undefined

// In JavaScript, we have mode called 'strict mode' which is a way to opt in to a restricted variant of JavaScript.
// When we enable this mode, JavaScript engines will be more sensitive. It will do more error checking.
// If there are errors that scilent fail in non-strict mode, they will throw errors in strict mode.
// Also this will change the behavior of the this keyword.
// In strict mode, this will be undefined in function calls.
// The reason for this is because to prevent us from accidentally modifying global object.
// It helps in catching common coding errors and "unsafe" actions such as defining global variables.



class Square {
    constructor() {
        this.draw = function() {
            console.log(this);
        }
    }

    move() {
        console.log(this);
    }
}

const s = new Square();
s.move(); // Square { draw: [Function], move: [Function] }

const move = s.move;
move(); // undefined

// By default the body of the class is executing in strict mode