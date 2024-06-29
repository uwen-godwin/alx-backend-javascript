export default function createIteratorObject(report) {
  const employees = [];

  // Iterate through each department in the report object
  for (const department in report) {
      if (Object.prototype.hasOwnProperty.call(report, department)) {
          // Iterate through each employee in the current department
          for (const employee of report[department]) {
              employees.push(employee);
          }
      }
  }

  // Return an object with a Symbol.iterator method
  return {
      [Symbol.iterator]() {
          let index = 0;
          // Return an iterator object
          return {
              next() {
                  // Check if there are more employees to iterate over
                  if (index < employees.length) {
                      return { value: employees[index++], done: false };
                  } else {
                      return { value: undefined, done: true };
                  }
              }
          };
      }
  };
}
