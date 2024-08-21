const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.trim().split('\n').filter((line) => line.length > 0);
      const totalStudents = lines.length - 1;

      console.log(`Number of students: ${totalStudents}`);

      const studentsByField = {};
      for (const line of lines.slice(1)) {
        const [firstName, , , field] = line.split(',');
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstName);
      }

      for (const [field, students] of Object.entries(studentsByField)) {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }
      resolve();
    });
  });
}

module.exports = countStudents;
