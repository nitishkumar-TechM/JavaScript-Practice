// let x = 10;
// let y = x;

// x = 20;

// console.log('x :', x);
// console.log('y :', y);

let x = {value: 10};
let y= x;

x.value = 20;

console.log("x", x.value);
console.log("y", y.value);

// let number = 10;

// function increase(number) {
//     number++;
// }

// increase(number);
// console.log('number', number);


let obj = {value: 10};

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log('obj', obj);



