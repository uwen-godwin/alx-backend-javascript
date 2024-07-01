import Car from './10-car';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super();
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  cloneCar() {
    const { _brand, _motor, _color } = this;
    return new Car(_brand, _motor, _color);
  }
}

export default EVCar;
