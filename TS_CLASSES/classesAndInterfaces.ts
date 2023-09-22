interface color {
    color: string;
    ride(): void;
}
class Bike implements color {
    constructor(public readonly color: string) {}
    ride(): void {
        console.log("The bike is on the road");
    }
}

const honda = new Bike("black");
console.log(honda.color);
honda.ride();

abstract class Employee {
    constructor(
        readonly id: number,
        readonly firstName: string,
        readonly lastName: string
    ) {}
    abstract getPay(): number;
    greet(): void {
        console.log(
            `Hi ${this.firstName} ${this.lastName}, Welcome to the company XYZ`
        );
    }
}

class FullTimeEmployee extends Employee {
    constructor(
        id: number,
        firstName: string,
        lastName: string,
        public department: string
    ) {
        super(id, firstName, lastName);
    }
    getPay(): number {
        return 14_00_000;
    }
}

const bharath = new FullTimeEmployee(
    1050,
    "Bharath Kumar",
    "Kalyanasundaram",
    "Backend"
);
bharath.greet();
console.log(bharath.getPay());
