// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages: number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][] = [[]];
// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
    name: string;
    price: number;
};

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

const productArray: Product[] = [];

for (let i: number = 1; i <= 10; i++) {
    productArray.push({
        name: "prod " + i,
        price: parseFloat(Math.random().toFixed(4)) * 100,
    });
}
console.log(productArray);

const getTotal = (productArr: Product[]): number => {
    let total: number = 0;
    productArr.forEach((product) => {
        total += product.price;
    });
    return total;
};

console.log(getTotal(productArray));
