export default function createIteratorObject(report) {
  const employees = [];

  for (const department in report) {
      if (Object.prototype.hasOwnProperty.call(report, department)) {
          const departmentEmployees = report[department];
          for (let i = 0; i < departmentEmployees.length; i++) {
              employees.push(departmentEmployees[i]);
          }
      }
  }

  return employees[Symbol.iterator]();
}
