export default function createIteratorObject(report) {
  const employees = [];

  Object.keys(report).forEach(department => {
      report[department].forEach(employee => {
          employees.push(employee);
      });
  });

  return employees[Symbol.iterator]();
}
