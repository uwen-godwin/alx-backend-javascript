class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const CloningConstructor = this.constructor[Symbol.species];
    return new CloningConstructor(this._brand, this._motor, this._color);
  }
}

export default Car;
