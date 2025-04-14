console.log("this keyword in JavaScript");

// In JavaScript, the value of `this` is determined by how a function is called.
// 1. In a regular function call, `this` refers to the global object (or undefined in strict mode).

// In a method call, `this` refers to the object that the method is called on.
const obj = {
  name: "Alice",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};

// method -> obj
// function -> global(window, global)

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  play() {
    console.log(this);
  },
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag); // undefined
    }, this);
  },
};

video.stop = function () {
    console.log(this);
}

video.showTags();

video.stop();

// a regular function 

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video("b"); // {}
// In a constructor function, `this` refers to the newly created object.

// When dealing with a regular function, 'this' by default refers to the
//  global object (window in browsers, global in Node.js). 
// But if we call a function, using the new operator, which is the case for 
// constructor functions, this will reference the newly created object.

// 2. In a regular function, `this` refers to the global object (or undefined in strict mode).
// In strict mode, `this` is undefined in a regular function call.
// 3. In an arrow function, `this` lexically binds to the surrounding context.