console.log('Private Members Using Symbols');


// In ES6, we can use symbols to create private members
// Symbols are unique and immutable primitive data types that can be
// used as object property keys

// Symbol is basically a unique identifier
// and it is not possible to access the symbol property 
// using the name of the property


const _radius = Symbol();
const _draw = Symbol();
// Symbol() === Symbol() // false

class Circle {
    constructor(radius) {
        // this.radius = radius;
        // this['radius']= radius; // public property
        this[_radius] = radius; // private property
    }

    [_draw]() {

    }
}

// as we know this radius property is public by default

const c = new Circle(1);
// console.radius // we can access the radius property

// console.log(Object.getOwnPropertyNames(c));


console.log(Object.getOwnPropertySymbols(c)); // [Symbol()]
const key = Object.getOwnPropertySymbols(c)[0];  // [Symbol()]
console.log(c[key]); // 1




