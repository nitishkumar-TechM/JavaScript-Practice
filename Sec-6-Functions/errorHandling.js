console.log("Error Handling in JavaScript");

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,       
    // fullName: function() {},
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        if (typeof name !== 'string') {
            throw new Error('Name must be a string');
        }

        const parts = name.split(' ');
        if (parts.length !== 2) {
            throw new Error('Name must contain first and last name');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

}

// person.fullName = null;
try {
    person.fullName = '';
}
catch (e) {    
    // alert(e);    
    console.log('Error: ', e.message);
    
}

console.log('Person: ', person);

console.log('--------------Local vs Global scope----------------');

const color = 'red'; // global variable

{
    const message = 'hi';
}
// console.log(message); // ReferenceError: message is not defined

function start() {
    const message = 'hi';
    
    if (true) {
        const message = 'hello';  // it gives the local preference first
        console.log(message); // hello
    }
    console.log('color: ', color);
    
}

function stop() {
    const message = 'bye';
    console.log(message); // bye
}

start();
stop();

// In general we should avoid using global variables
// because they can be changed from anywhere in the code


