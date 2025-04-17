console.log('Creating your own prototype');

function Shape(color){
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('Duplicate');
}

// This extend function is what we called Intermedite Function Inheritance. 
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;    
}   

function Circle(radius, color) {
    //Calling the super Constructor
    Shape.call(this, color); // Call the Shape constructor with the current context
    this.radius = radius;
}


// Circle.prototype = Object.create(Object.prototype); // objectBase

// Set up inheritance
// Circle.prototype.constructor = Circle; // Set the constructor property to Circle
// new Circle.prototype.constructor() => new Circle();
Circle.prototype = Object.create(Shape.prototype); // Create a new object with Shape's prototype
Circle.prototype.constructor = Circle; // Set the constructor property to Circle


// It is very important to put after the extend function
Circle.prototype.duplicate = function () {
    // Call the duplicate method from the parent class
    Shape.prototype.duplicate.call(this);
    console.log('Duplicate Circle');
}

// Whenever you reset the prototype of an object,
// you should also need to set the constructor property
//  back to the original constructor function


Circle.prototype.draw = function () {
  console.log('Draw');
}

function Square(size) {
    this.size = size;
}

extend(Square, Shape); // Inherit from Shape

Square.prototype.duplicate = function () {
    console.log('Duplicate Square');
}

const shapes = [ 
    new Circle(1, 'Red'),
    new Square(2)
];

for (let shape of shapes)
    shape.duplicate(); // Calls the duplicate method of the respective shape


const s = new Shape();
const c = new Circle(1, 'Green');

// new Circle(2) === new Circle.prototype.constructor(2)


