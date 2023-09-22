interface Employee {
    readonly id: number;
    name: string;
    age: number;
}

const emp1: Employee = {
    id: 1,
    name: "bharath",
    age: 22,
};

const emp2: Employee = {
    id: 2,
    name: "Max",
    age: 25,
};
console.log(emp1);
console.log(emp2);
