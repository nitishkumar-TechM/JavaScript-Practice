console.log('Hoisting');

sayHello();

// Function Declaration
function sayHello() {
    console.log('Hello');
}

// Function Expression
const sayGoodbye = function() {
    console.log('Goodbye');
};

// By convention we add semi-colon in function expression
// But it is not mandatory in Function Declaration.


// Class Declaration
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

// Class Expression
const Square = class {
    constructor(side) {
        this.side = side;
    }

    getArea() {
        return this.side * this.side;
    }
};

// Hoisting- Unlike Functions Class Declaration or Class Expression 
// are not Hoisted.
