const path = require('path');
const fs = require('fs');

// Get the script file to run from command line arguments
const scriptFile = process.argv[2];

// Check if the script file exists
if (scriptFile && fs.existsSync(path.resolve(__dirname, scriptFile))) {
  require(path.resolve(__dirname, scriptFile));
} else {
  console.error(`Error: Script file "${scriptFile}" not found.`);
  process.exit(1);
}
