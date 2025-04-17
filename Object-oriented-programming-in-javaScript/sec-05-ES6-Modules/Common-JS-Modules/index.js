console.log('Module');

const Circle = require('./circle');

const c = new Circle(10);
// console.log(_radius.get(c));  // we can not able to access the private variable.
// when we use module.

c.draw();


// The things are highly releated are kept together :- Cohesion