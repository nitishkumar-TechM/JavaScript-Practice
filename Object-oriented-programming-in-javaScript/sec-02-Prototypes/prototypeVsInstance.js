console.log('Prototype vs Instance member');

function Circle(radius) {
    // Instance members
  this.radius = radius;

  this.move = function () {
    this.draw();  
    console.log('move');
  }

}

// Circle.prototype === c1.__proto__; // true

// Prototype members
Circle.prototype.draw = function () {
    // this.move();
    console.log('draw');    
}

const c1 = new Circle(1);
const c2 = new Circle(2);

Circle.prototype.toString = function () {
    return `Circle with radius: ${this.radius}`;
}

// Returns instance members
console.log(Object.keys(c1)); // ['radius', 'move']

// Returns al  members (instance + prototype)
for (let key in c1) {
    console.log(key);
}

console.log(c1.hasOwnProperty('radius')); // true
console.log(c1.hasOwnProperty('draw')); // false
