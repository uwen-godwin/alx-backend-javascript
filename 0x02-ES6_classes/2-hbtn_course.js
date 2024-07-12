export default class HolbertonCourse {
  constructor(name, length, students) {
    this._validateName(name);
    this._validateLength(length);
    this._validateStudents(students);

    this._name = name;
    this._length = length;
    this._students = students.slice();
  }

  _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  _validateLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  _validateStudents(students) {
    if (!Array.isArray(students) || !students.every(student => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._validateName(newName);
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._validateLength(newLength);
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._validateStudents(newStudents);
    this._students = newStudents.slice();
  }
}
