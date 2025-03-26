// Factory Function

function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('Draw');            
        }
    };
}

const circle = createCircle(3);
console.log(circle.constructor);


// Constructor Function 

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');        
    }
}

const another = new Circle(2);
console.log(another.constructor);
console.log(Circle.constructor);

Circle.call({}, 3);
// the above line code is equal to const another = new Circle(2);

Circle.apply({}, [1, 2, 3]);

// When we declare a function, internally it is represented like this.
const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('draw');        
    }
    `);

const circleObj = new Circle1(2);
console.log(circleObj);



let x = {};

// let x = new Object();

// In JavaScript we have a  few other built in constructors,
//  for example, we have

new String();  // '', " ", ``
new Boolean();  // true, false
new Number();   //  1, 2,3...


// Every object has a constructor property, and that references
// a function that was used to create that object.




