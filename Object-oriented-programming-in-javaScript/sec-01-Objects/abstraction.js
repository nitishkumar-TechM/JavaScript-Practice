console.log("Abstraction in JavaScript");

function Circle(radius) {
  let color = 'red'; // private property
  // it is not accessible outside the Circle function and it is not as a part of object.

  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y)
        throw new Error('Invalid Location.')
      defaultLocation = value;
    }
  });
  
  let computeOptimumLocation = function (factor) {
    //...

  }

  this.getArea = function () {
    return Math.PI * this.radius * this.radius;
  };

  this.draw = function () {
    let x, y;

    computeOptimumLocation(0.1);
    // defaultLocation = { x: 1, y: 1 };

    // this.radius = 1;
    console.log("Drawing a circle with radius: " + this.radius);
  }

}

const circle = new Circle(5);
console.log(circle.getArea()); // 78.53981633974483
// circle.defaultLocation =1;


// Closure - A closure is a function that remembers its outer variables and can access them.
// In the Circle function above, the `draw` method is a closure because it has access to 
// the `computeOptimumLocation` function and `defaultLocation` variable, even though they are 
// not directly accessible outside the Circle function.

console.log("Closure example:");
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(`Outer Variable: ${outerVariable}`);
    console.log(`Inner Variable: ${innerVariable}`);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside"); 