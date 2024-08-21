const readline = require('readline');

// Create an interface for input and output streams
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display the welcome message
console.log('Welcome to Holberton School, what is your name?');

// Prompt the user for input
rl.question('', (name) => {
  // Output the user's name
  console.log(`Your name is: ${name}`);

  // Close the readline interface
  rl.close();
});

// Listen for the 'close' event to print the closing message
rl.on('close', () => {
  console.log('This important software is now closing');
});
