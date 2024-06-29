export default function createIteratorObject(report) {
  const employees = [];

  for (const department in report) {
      if (Object.prototype.hasOwnProperty.call(report, department)) {
          for (const employee of report[department]) {
              employees.push(employee);
          }
      }
  }

  return {
      [Symbol.iterator]() {
          let step = 0;
          return {
              next() {
                  if (step < employees.length) {
                      return { value: employees[step++], done: false };
                  } else {
                      return { value: undefined, done: true };
                  }
              }
          };
      }
  };
}
