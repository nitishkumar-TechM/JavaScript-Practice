//Exercise
// Write a function that takes two numbers
// and returns the maximum of the two

function maximum(num1, num2){
    if (num1 > num2)
        return `num1 ${num1} is maximum`;
    else if (num1 < num2)
        return `num2 ${num2} is maximum`;

    // return (num1 > num2) ? num1 : num2;

    return `Both are equal`
}

console.log('--------Exercise 1------------');
console.log(maximum(8,8));

//isLanscape or not

function isLandscape(width, height){
    
    return (width > height);
    
}

console.log('--------Exercise 2------------');
console.log(isLandscape(300,900));

//FizzBuzz
function fizzbuzz(input) {
    if((input % 3 === 0) && (input % 5 === 0)){
        return 'FizzBuzz';
    }
    if(input % 5 === 0){
        return 'Buzz';
    }
    if(input % 3 === 0){
        return 'Fizz';
    }
    if(typeof input !== 'number'){
        return NaN;
    }
    
    return input;
}

console.log('--------Exercise 3------------');
console.log(fizzbuzz('2'));

// Speed Limit = 70
// 5 -> 1 Point
// Math.floor(1,3)
// 12 Points -> License Suspended

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    
    if (speed <= speedLimit){
        return 'OK'
    }
    const Points = Math.floor((speed - speedLimit) / kmPerPoint)
    if (Points <= 12)
        return `Points ${Points}`;

    return 'License suspended' 
       
}

console.log('--------Exercise 4------------');
console.log(checkSpeed(120));

//showNumber function even odd

function showNumbers(limit){
    for (let i = 0; i <= limit; i++){
        const message = (i % 2 === 0 ) ? "Even" : "ODD";
        console.log(i, message);               
    }
}

console.log('--------Exercise 5------------');
showNumbers(10);

//Count Truthy

const isActive = true;
// const name = 'Nitish'  // Truthy (true)
const name = ''  // Falsy (true)
// Falsy - undefined, null, '', false, 0, NaN

if (name) console.log("hello", name);

function countTruthy(array){
    let count = 0;

    for (let value of array)
        if (value)
            count++;
        
    return count;

}

console.log('--------Exercise 6------------');
console.log('count truthy', countTruthy([1, 3, 4, NaN]));

// Show Properties of an object

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}


function showProperties(obj){
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
    
console.log('--------Exercise 7------------');
showProperties(movie)

// sum of multiple of 3 and 5 upto limit

function sum(limit){
    let totalSum = 0;

    for (let i = 1; i<= limit; i++){
        if (i % 3 === 0 || i % 5 === 0)
            totalSum += i;
    }
    
    return totalSum;
}

console.log('--------Exercise 8------------');
console.log('sum', sum(10));


// Grading system

const marks = [80, 80, 50];

function calculateGraded(marks){
    
    const avg = calAvg(marks);   
    
    if (avg < 60) return 'F';
    if (avg < 70) return 'D';
    if (avg < 80) return 'C';
    if (avg < 90) return 'B';
    
    return 'A';
}

function calAvg(array){
    let sum = 0;
    
    for (let value of array){
        sum += value;
    }
    
    return Math.floor(sum / array.length);   
}


console.log('--------Exercise 9------------');
console.log(calculateGraded(marks));

//Show Star Pattern

function showStar(rows){
     
    for (let i = 1; i <= rows; i++ ){
        let pattern = '';
        for (let j= 1; j <= i; j++){
            pattern += '*';            
        }
        console.log(pattern);       
    }
}

console.log('--------Exercise 10------------');
showStar(5);

//Prime Number upto limit

function showPrime(limit){
    for (let num = 2; num <= limit; num++){
        // 2 - current (i) another loop
        let isPrime = true;
        for (let factor = 2; factor < num; factor++){
            if (num % factor === 0){
                isPrime = false;
                break;
            }
        }
        
        if (isPrime) console.log(num);
    }
}

console.log('--------Exercise 11------------');
showPrime(100)


function showPrimNumbers(limit){
    for (number = 2; number <= limit; number++)
        if (isPrime(number)) console.log(number);
}

function isPrime(number){ 
    for (let factor = 2; factor < number; factor++){
        if (number % factor === 0){
            return false;          
        }
    }
    return true
}

console.log('Prime Number');
showPrimNumbers(50)



    



    























