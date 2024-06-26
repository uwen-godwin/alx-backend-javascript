export default function createIteratorObject(report) {
  const employees = report.allEmployees;
  const employeeNames = [];

  for (const department in employees) {
    if (employees.hasOwnProperty(department)) {
      employeeNames.push(...employees[department]);
    }
  }

  return employeeNames[Symbol.iterator]();
}
