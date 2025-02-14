// alert('test')
let x = 10;
let y = 3;

console.log(`x = ${x} and y = ${y}`);

console.log('x + y = ', x + y);
console.log('x - y = ', x - y);
console.log('x * y = ' ,x * y);
console.log('x / y = ', x / y);
console.log('x % y = ', x % y);
console.log('x ** y = ', x ** y);

x++;
//Assignment Operator
x = x + 1;

x = x + 5;
x += 5;

x = x * 3;
x *= 3;


//Increment (++)
// console.log(x+s)
//Decrement
console.log(--x);
console.log(x);


//comparison operator

let a = 1;

//Relational operator
console.log(a > 0);
console.log(a >= 1);
console.log(a < 1);
console.log(a <= 1);

// Equality
console.log(a === 1);
console.log(a !== 1);


// Strict Equality (Same Type + Same Value)
console.log(1 === 1);
console.log('1' === 1);

// Loose Equality (Value)
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

// Ternary Operator
// If a customer has more than 100 points
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);
console.log('-----------Logical operator--------------------');

// Logical AND (&&) Operator
// Returns TRUE if both operators are TRUE

console.log(true && true);
console.log(true && false);

let highIncome = false;
let goodCreditScore = true;

// let eligibleForLoan = highIncome && goodCreditScore;
// console.log('Eligible For Loan :', eligibleForLoan);


//Logical OR (||)
// REturns TRUE if one of the operand is TRUE

let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible For Loan :', eligibleForLoan); 

//NOT (!)
let applicationRefused = !eligibleForLoan;

console.log('Application Refused :', applicationRefused);

console.log('-----------Logical operaors with Non-Booleans');









