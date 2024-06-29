export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this.length = length;
    this._students = students;
  }

  get students() {
    return this._students;
  }

  set students(args) {
    this._students.push(args);
  }

  set name(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    this._length = length;
  }
}
