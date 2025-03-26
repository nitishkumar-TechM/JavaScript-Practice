// Dynamic nature of Objects in JavaScript 

const circle = {
    radius: 1
};

circle.color = 'yellow';
console.log(circle);

circle.location = {x:2, y:5};
circle.draw = function() {};

console.log(circle);

// we can also delete the existing properties or methods,

delete circle.color;
delete circle.draw;

console.log(circle);





