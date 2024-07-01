import EVCar from './100-evcar';

class Car {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }
}

class EVCar extends Car {
    constructor(make, model, color, range) {
        super(make, model, color);
        this.range = range;
    }

    cloneCar() {
        return new Car(this.make, this.model, this.color);
    }
}

const ec1 = new EVCar('Tesla', 'Turbo', 'Red', '250');
console.log(ec1);

const ec2 = ec1.cloneCar();
console.log(ec2);

console.log(ec1 instanceof EVCar);
console.log(ec2 instanceof Car);
console.log(ec2 instanceof EVCar);
console.log(ec1 === ec2);

export default EVCar;
