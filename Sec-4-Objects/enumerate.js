
const circle = {
    radius : 1,
    draw() {
        console.log('draw');        
    }
};

for (let key in circle)
    console.log(key, circle[key]);

for (let key of Object.keys(circle))    // this will return an array
    console.log(key);

for (let entry of Object.entries(circle))    // this will return an array
    console.log(entry);

if ('radius' in circle) console.log('yes');
if ('color' in circle) console.log('yes');


// function Object() {}

// const x = {value: 1};
// const x = new Object();


// Cloning an Object
console.log('---------Cloning an Object--------------');

// const another = {};
// for (let key in circle)
//     another[key] = circle[key];

// another['radius'] = circle['radius'];

// const another = Object.assign({}, circle);

const another = { ...circle };
console.log(another);



    