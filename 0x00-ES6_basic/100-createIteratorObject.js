export default function createIteratorObject(report) {
  const employees = [];

  // Iterate through each department in the report
  for (const department in report) {
      if (Object.prototype.hasOwnProperty.call(report, department)) {
          // Iterate through each employee in the current department
          report[department].forEach(employee => {
              employees.push(employee);
          });
      }
  }

  // Return an iterator over the employees array
  return employees[Symbol.iterator]();
}
