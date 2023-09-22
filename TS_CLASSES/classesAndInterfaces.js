"use strict";
class Bike {
    constructor(color) {
        this.color = color;
    }
    ride() {
        console.log("The bike is on the road");
    }
}
const honda = new Bike("black");
console.log(honda.color);
honda.ride();
class Employee {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greet() {
        console.log(`Hi ${this.firstName} ${this.lastName}, Welcome to the company XYZ`);
    }
}
class FullTimeEmployee extends Employee {
    constructor(id, firstName, lastName, department) {
        super(id, firstName, lastName);
        this.department = department;
    }
    getPay() {
        return 1400000;
    }
}
const bharath = new FullTimeEmployee(1050, "Bharath Kumar", "Kalyanasundaram", "Backend");
bharath.greet();
console.log(bharath.getPay());
