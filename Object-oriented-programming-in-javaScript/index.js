console.log("Hello World");

// Object-oriented programming (OOP) is a programming paradigm that uses objects and classes to structure code.
// It allows for the creation of reusable and modular code, making it easier to manage and maintain large codebases.


// Procedural programming is a programming paradigm that uses procedures or routines to structure code.
// It focuses on the sequence of actions to be performed, rather than the data being manipulated.
let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
  return baseSalary + (overtime * rate);
}

// we have varibles on one side and functions on the other side. They are decoupled.
// one of the symptons of procedural programming is that we have a lot of variables and functions.

let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function () {
        return this.baseSalary + (this.overtime * this.rate);
    }
};

employee.getWage(); // 30200
// In OOP, we can create objects that encapsulate both data and behavior.
