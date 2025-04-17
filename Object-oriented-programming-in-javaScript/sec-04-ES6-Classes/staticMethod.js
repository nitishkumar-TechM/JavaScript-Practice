console.log('Static Method Example');

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    
    // Instance method
    draw() {
        console.log('Drawing a circle with radius:', this.radius);
    }

    // Static method
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }

}

// const circle = new Circle(5);
const circle = Circle.parse('{"radius": 10}');

console.log(circle);

// parse() method is accessible on the class reference

 
class Math2 {
    static abs(value) {
        //...
    }
}

Math2.abs(-1); // 1
