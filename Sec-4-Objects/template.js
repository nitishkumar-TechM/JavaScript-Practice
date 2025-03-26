console.log('Testing nk');

// String primitive
const message = 
'This is my\n' +
'\'first\' message';

console.log(message);

// Literals in JavaScript
// Object -> {}
// Boolean -> true, false
// String -> '', ""
// Template -> ``  (Backtick character)


const another = 
`This is my 
'first' message`;

console.log('another mess: ', another);

const email = `
Hi John,

I hope this email finds you well.
Just wanted to check in and see how things are going.
${message}
${2 + 3}
We can also call a function that returns a value.

Best regards,
Jane
`;

console.log(email);


