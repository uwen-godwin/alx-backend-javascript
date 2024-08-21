const http = require('http');
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse');

const app = http.createServer((req, res) => {
    const { url } = req;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (url === '/students') {
        const databaseFile = process.argv[2];

        if (!databaseFile) {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('This is the list of our students\n');
            return;
        }

        fs.readFile(databaseFile, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Cannot load the database');
                return;
            }

            const records = data.split('\n').filter(line => line.trim() !== '');

            let csStudents = [];
            let sweStudents = [];

            for (const record of records.slice(1)) {
                const [name, , field] = record.split(',');
                if (field === 'CS') csStudents.push(name);
                if (field === 'SWE') sweStudents.push(name);
            }

            const response = [
                'This is the list of our students',
                `Number of students: ${csStudents.length + sweStudents.length}`,
                `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`,
                `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`
            ].join('\n');

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(response);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

app.listen(1245, () => {
    console.log('Server is listening on port 1245');
});

module.exports = app; 
