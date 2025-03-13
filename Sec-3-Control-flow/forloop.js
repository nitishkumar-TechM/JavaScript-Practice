console.log("forloop.js");

//For loop

 for (let i = 1; i <= 5; i++) {
    //  console.log('Hello World', i);
    if (i % 2 !== 0) console.log(i);
 }

 console.log('reverse order');
 

 for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) console.log(i);
 }

//while loop
console.log('while loop');

let i = 0;

while (i <= 5) {
    if (i % 2 !== 0) console.log(i);
    i++;
}

//do while loop
console.log('do while loop');

let j = 9;

do {
    if (j % 2 !== 0) console.log(j);
    j++;
} while (j <= 5);

//infinite loop
console.log('infinite loop');

let k = 0;

while (k <= 5) {
    console.log(k);
    k++;
}

// for (let i = 0; i <= 5; )
