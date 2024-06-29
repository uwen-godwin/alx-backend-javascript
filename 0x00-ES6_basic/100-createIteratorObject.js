export default function createIteratorObject(report) {
  const employees = [];

  for (const department in report) {
      if (Object.prototype.hasOwnProperty.call(report, department)) {
          for (const employee of report[department]) {
              employees.push(employee);
          }
      }
  }

  return employees[Symbol.iterator]();
}
