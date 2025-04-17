console.log('Private Members Using WeakMaps');

// WeakMaps are collections of key-value pairs(Dictionary) where the keys are objects
// and the values can be any data type.


const _radius = new WeakMap();
const _move = new WeakMap();
const privateProps = new WeakMap(); // WeakMap to store private properties


class Circle {
    constructor(radius) {
        privateProps.set(this, {
            radius: radius,
            draw: () => {
                console.log('draw');
            }
        })

        
        _radius.set(this, radius); // private property  
        
        _move.set(this, () => {
            console.log('move');
        }); // private method
    }



    // we want to read this radus property
    draw() {
        _move.get(this)(); // private method
        console.log('draw');
        console.log(_radius.get(this)); // 1
    }

   
}

const c = new Circle(1);
