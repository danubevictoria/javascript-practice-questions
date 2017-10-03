// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
//
// For example, given:
//
//   [1, 7, 3, 4]
//
// your function would return:
//
//   [84, 12, 28, 21]
//
// by calculating:
//
//   [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]
//
// Do not use division in your solution.

function getProductsOfAllIntsExceptAtIndex(intArr) {
  let products = [];
  let productSoFar = 1;

  for (let i = 0; i < intArr.length; i++) {
    let temp = intArr[i];
    products[i] = intArr.slice(i + 1).reduce(function(product, value) {
      return product * value;
    }, 1) * productSoFar;
    productSoFar *= temp;
  }
  return products;
}

// Example Test
let example = [1, 7, 3, 4];
// console.log(getProductsOfAllIntsExceptAtIndex(example));
