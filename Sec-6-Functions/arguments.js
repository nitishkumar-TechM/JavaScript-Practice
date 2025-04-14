
let x = 1;

x = 'a';

function sum() {
    console.log(arguments); // Arguments object is an array-like object
    console.log(arguments.length); // Number of arguments passed

    let total = 0;

    for (let value of arguments) {
        total += value;
    }
    console.log(total); // 3
    
    return total; // 1 + 2 = 3 
    // return a + b;  // 1 + undefined = NaN
}

console.log(sum(1, 2));
console.log(sum(1, '2')); // 12
console.log(sum(1, 2, 8, 5, 3)); // 3
console.log(sum(1)); // NaN
console.log(sum()); // NaN

console.log('---------------Rest Operator------------------');

// Rest operatior : When we use ...(three dot) along with the function parameter, 
// know as rest operator.
// it collects all the arguments passed to the function into an array.


function sum2(args) {
    console.log(args);
}

sum2(1, 2, 3, 4); // args = 1, the first element

function sum3(...args) {
    return args.reduce((acc, curr) => acc + curr);
}

console.log(sum3(1, 2, 3, 4, 5, 10)); // args = [1, 2, 3, 4, 5, 10]

function sum4(discount, ...prices) {
    console.log('Price: ',prices); // prices = [20, 30, 40]    
    const total =  prices.reduce((acc, curr) => acc + curr);
    return total * (1 - discount);
}


// Uncaught SyntaxError: Rest parameter must be last formal parameter
// So, we cannot have a operator after the rest operator

console.log(sum4(0.1, 20, 30, 40)); // 90 * (1 - 0.1) = 81

console.log('---------------Default Parameter------------------');

function interest(principal, rate = 3.5, years) {    
    return principal * rate / 100 * years;
}

console.log(interest(1000, 3.5, 5)); // 175
console.log(interest(1000, 6.5, 9));
console.log(interest(1000, undefined, 9));

// So as a best prtactice, whenever we are using default parameter,
//  we should use it at the end of the function parameter list.
// otherwise, if we use in the middle anywhere then, make sure that 
// we are passing the default value for rest of parameter falling after it.


