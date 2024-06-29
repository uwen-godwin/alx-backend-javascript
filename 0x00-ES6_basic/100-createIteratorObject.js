export default function createIteratorObject(report) {
  const employees = [];

  for (const department of Object.keys(report)) {
      if (Object.prototype.hasOwnProperty.call(report, department)) {
          employees.push(...report[department]);
      }
  }

  return employees[Symbol.iterator]();
}
