// Getters and Setters

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,       
    // fullName: function() {},
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

}

console.log(`${person.firstName} ${person.lastName} is ${person.age} years old.`);
// console.log(`Full name: ${person.fullName()}`);
console.log(`Full name: ${person.fullName}`);
person.fullName = "Nitish Kumar";
console.log('Person: ', person);


// getters => access properties

// setters => change (mutate) properties



