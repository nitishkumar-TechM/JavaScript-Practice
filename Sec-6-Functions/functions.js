// Function Declaration vs Function Expression

// Function Declaration
walk();

function walk() {
    console.log("Walking");    
}
// We don't use semicolon here

// Anonymous Function Expression
// run();
const run = function() {
    console.log("Running");    
};
// let run = function walk() {
//     console.log("Running");    
// };

let move = run;
run();
move();

