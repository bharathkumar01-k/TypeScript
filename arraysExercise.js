"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard = [[]];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
const productArray = [];
for (let i = 1; i <= 10; i++) {
    productArray.push({
        name: "prod " + i,
        price: parseFloat(Math.random().toFixed(4)) * 100,
    });
}
console.log(productArray);
const getTotal = (productArr) => {
    let total = 0;
    productArr.forEach((product) => {
        total += product.price;
    });
    return total;
};
console.log(getTotal(productArray));
