const http = require('http'); // Import the http module

// Create the HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200; // Set the status code to 200 (OK)
  res.setHeader('Content-Type', 'text/plain'); // Set the content type to plain text
  res.end('Hello Holberton School!'); // Send the response body
});

// Make the server listen on port 1245
app.listen(1245, '127.0.0.1', () => {
  console.log('Server is listening on port 1245');
});

module.exports = app; // Export the app (server) for testing or reusability
