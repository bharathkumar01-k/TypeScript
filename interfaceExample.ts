interface Animal {
    name: string;
}

interface Animal {
    age: number;
}
interface Dog extends Animal {
    breed: string;
    bark(): string;
}
interface ServiceDog extends Animal, Dog {
    job: "sniffer" | "guide dog";
}

const myPup: ServiceDog = {
    name: "my pup 1",
    age: 0.5,
    breed: "Rajapalayam",
    bark() {
        return "Dog is barking";
    },
    job: "sniffer",
};

console.log(myPup);
