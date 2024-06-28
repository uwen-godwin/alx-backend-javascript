 import EVCar from './100-evcar.js';

const ec1 = new EVCar("Tesla", "Turbo", "Red", "250");
console.log(ec1);

const ec2 = ec1.cloneCar();
console.log(ec2);

console.log(ec1 instanceof EVCar); // Should print: true
console.log(ec2 instanceof Car);    // Should print: true
console.log(ec2 instanceof EVCar);  // Should print: false
console.log(ec1 == ec2);            // Should print: false
