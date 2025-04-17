console.log('Property Descriptor');

let person = { name: 'Nitish' };
console.log(person);

let objectBase = Object.getPrototypeOf(person);
console.log(objectBase);

let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log('Property Descriptor', descriptor);

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: true,
    configurable: true  // we can able to delete the property
})

person.name = 'John';
console.log(person.name);


for (let key in person) {
  console.log(key, person[key]);
}

console.log(Object.keys(person));

// Constructor Prototype

Object.getPrototypeOf(myObj);

// myObj.__proto__ = Object.getPrototypeOf(myObj);
// Constructor.prototype () => returns the same object as Object.getPrototypeOf(myObj)

