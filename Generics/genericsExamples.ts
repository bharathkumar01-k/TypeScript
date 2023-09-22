function identity<T>(item: T): T {
    return item;
}

console.log(identity<string>("bharath"));

function getRandomElement<T>(arr: T[]): T {
    const arrLength = arr.length;
    const randomNumber = Math.floor(Math.random() * arrLength);
    return arr[randomNumber];
}

console.log(getRandomElement<number>([1, 3, 4, 56, 7, 8, 9, 95]));
console.log(
    getRandomElement<string>(["kdsf", "kdhjfgs", "djfds", "fksgkg", "sdgv"])
);
console.log(
    getRandomElement<boolean>([
        true,
        false,
        false,
        true,
        false,
        true,
        true,
        true,
    ])
);

const identityFunction = <T>(item: T): T => {
    return item;
};

interface Person {
    name: string;
    age: number;
}

interface Area {
    area: string;
}

const merge = <T, U>(object1: T, object2: U) => {
    return {
        ...object1,
        ...object2,
    };
};

const person1: Person = {
    name: "Bharath kumar",
    age: 22,
};

const areaPerson1: Area = {
    area: "Rajapalayam",
};
const bharath = merge(person1, areaPerson1);

console.log("-------------------");
console.log(bharath);
