console.log('Method Overriding');

class Shape {
    move() {
        console.log('move');
    }
}

class Circle extends Shape {
    move() {
        super.move(); // call the parent method
        console.log('Circle move');
    }
}

const c = new Circle();
