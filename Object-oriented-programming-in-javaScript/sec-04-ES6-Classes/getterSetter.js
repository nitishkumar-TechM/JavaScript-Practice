console.log('Getter and Setter');

// Getter and Setter are special methods that allow you to define how to access and modify properties of an object.

const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius); // private property
    }

    get radius() {
        return _radius.get(this); // getter
    }

    set radius(value) {
        if (value <= 0) throw new Error('Invalid radius');
        _radius.set(this, value); // setter
    }
}

const c = new Circle(1);
