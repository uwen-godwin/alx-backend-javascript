import EVCar from './100-evcar'; // Corrected import statement without .js extension

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

console.log(ec1 instanceof EVCar); // Should print: true
console.log(ec2 instanceof Car);   // Should print: true
console.log(ec2 instanceof EVCar); // Should print: false
console.log(ec1 === ec2);          // Should print: false (using === for strict equality)

export default EVCar; // If you want to export EVCar
