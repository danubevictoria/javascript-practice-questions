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

// Given an array of integers, find the highest product you can get from three of the integers.
// The input arrayOfInts will always have at least three integers.
function highestProduct(arrayOfInts) {
  if (!arrayOfInts || arrayOfInts.length == 0) {
    throw new Error('No arg defined');
  }

  let highestProductOf3;
  let highestProductOf2 = 1;
  let highest;
  let lowestProductOf2;
  let lowest;

  if(arrayOfInts.length <= 3) {
    highestProductOf3 = 1;
    for (let i = 0; i < arrayOfInts.length; i++) {
      highestProductOf3 *= arrayOfInts[i];
    }
    return highestProductOf3;
  } else {
    highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
    highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
    lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
    highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
    lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];

    for (let j = 2; j < arrayOfInts.length; j++) {
      let current = arrayOfInts[j];

      highestProductOf3 = Math.max(
        highestProductOf3,
        current * highestProductOf2,
        current * lowestProductOf2);

      highestProductOf2 = Math.max(
        highestProductOf2,
        current * highest,
        current * lowest
      );

      lowestProductOf2 = Math.min(
        lowestProductOf2,
        current * highest,
        current * lowest
      )

      highest = Math.max(highest, current);
      lowest = Math.min(lowest, current);
    }

    return highestProductOf3;
  }
}

// Example Test
let emptyArray = [];
let lessThan3Ints = [1, 2];
let threeInts = [2, 3, 4];
let moreThanThree = [20, 10, 11, 2];
let negatives = [-10, -2, 6, 2];
// console.log(highestProduct(emptyArray));
console.log(highestProduct(lessThan3Ints));
console.log(highestProduct(threeInts));
console.log(highestProduct(moreThanThree));
console.log(highestProduct(negatives));
