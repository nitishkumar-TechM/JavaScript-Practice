// Exercise 1: Create a address object
// street
// city
// zip code

const address = {
    street: 'WB East Walk',
    city: 'Kolkata',
    zipCode: 841789,    
};

function showAddress(obj) {
    for (let key in obj)
        console.log(key, obj[key]);
      
};

console.log('Exercise 1: ');

showAddress(address);

// Exercise 2- Write two different functions one is factory function, 
// the other is constructor function

// Factory function

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode,
    }
}

const addressTest1 = createAddress('Test1', 'Delhi Factory', 4355500);
console.log();


// Constructor Function
function Address(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
}

const addressTest2 = new Address('Test2', 'Constructor Delhi', 456790);
console.log('Exercise 2: ');

console.log('address 2: ', addressTest2);

// Exercise 3 - create two address objects.

let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');
let address3 = address1;

console.log('Exercise 3: -');

console.log('areEqual : ', areEqual(address1, address2));
console.log('areSame : ', areSame(address1, address2));
console.log('areSame for add1 and add3: ', areSame(address1, address3));


function areEqual(address1, address2) {
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode
}

function areSame(address1, address2) {
    return address1 === address2;
}


// Exercise 4- create a blog object
// title
// body
// author
// views
// comments
//    (author, body)
// isLive


let post = {
    title: 'Tech Mahindra',
    body: 'One of the leading tech company',
    author: 'Nitish Kumar',
    views: 120,
    comments: [
        { author: 'Rahul', body: 'Good' },
        { author: 'Abhishek', body: 'Cool' },
    ],
    isLive: true,
};

console.log('Exercise 4- ');
console.log(post);

// Constructor Function to create post object for blog

function Post(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;     
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

console.log('Excercise 5: -');

let post1 = new Post('a', 'b', 'c');
console.log('post1 : ', post1);

// Exercise 6 - Price Range Objects

let priceRanges = [
    { label: '$', tooltip:'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
    { label: '$$', tooltip:'Moderate', minPerPerson: 11, maxPerPerson: 20 },
    { label: '$$$', tooltip:'Expensive', minPerPerson: 21, maxPerPerson: 50 },
]

let restaurants = [
    { averagePerPerson: 5 }
]





