console.log('ifelse.js');

// if else statement

// Hours
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

let hour = 12;

if (hour >= 6 && hour < 12)
    console.log('Good morning');    
else if (hour >= 12 && hour < 18)
    console.log('Good Afternoon');
else
    console.log('Good Evening');


// Switch case statement

let role = 'guest';

switch (role) {
    case 'guest': 
        console.log('Guest User');
        break;  

    case 'moderator':
        console.log('Moderator User');
        break;

    default:
        console.log('Unknown User');        
}

if (role === 'guest') console.log('Guest');
else if (role === 'moderator') console.log('Moderator');
else console.log('Unknown User');



