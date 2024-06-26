export default function createIteratorObject(report) {
  const employees = [];

  for (const department in report) {
    employees.push(...report[department]);
  }

  return employees[Symbol.iterator]();
}
