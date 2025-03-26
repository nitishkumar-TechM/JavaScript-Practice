// Object- Oriented Programming (OOP)

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function(){
        console.log("Draw Function");        
    }

};

circle.draw();  //Method.
console.log("------------****************-------------------");


// Factory Function
// Camel Notaion: oneTwoThreeFour

function createCircle(radius, location) {
    return {
        // radius: radius,
        // In modern JS if our key and value are same, then simply add the key only.
        radius,   // it is euivalent to radius : radius
        location: location,

        draw() {
            console.log('Draw');            
        }   

        // draw: function(){
        //     console.log("Draw Function");        
        // }    
    };
}

const circle1 = createCircle(3, {x:1, y:1});
console.log(circle1);
circle1.draw();

const circle2 = createCircle(5, {x:3, y:4});
console.log(circle2);


// Constructor Function
// Pascal Notaion: OneTwoThreeFour

function Circle(radius, location) {
    this.radius = radius;
    this.location = location,
    this.draw = function() {
        console.log('Constructor fun Draw Method');        
    }
    // return this;
}

// In JavaScript, we have a keyword called 'this', and 'this' is
// a refrence to the object that is executing this piece of code.
// For now, let assume 'this' references an empty object.

// class Circle {
//     constructor(radius, location) {
//         this.radius = radius;
//         this.location = location,
//             this.draw = function () {
//                 console.log('Constructor fun Draw Method');
//             };
//         // return this;
//     }
// }

const circle3 = new Circle(1, {x: 2, y: 3}); 
// when we use 'new' here, three things happen, This new operator creates
// an empty javaScript object eg:- const x = {}
// Next, it will set 'this' to point new empty object
// finally, this 'new' operator return this new object from this function 
console.log('circle 3 :',circle3);

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person('Nitish');
console.log('person1 ', person1);
person1.greet('Rahul');











