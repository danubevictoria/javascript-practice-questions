// Write a function to reverse a string in-place. ↴
// Since strings in JavaScript are immutable ↴ , first convert the string into an array of characters, do the in-place reversal on that array, and re-join that array into a string before returning it. This isn't technically "in-place" and the array of characters will cost O(n)O(n) additional space, but it's a reasonable way to stay within the spirit of the challenge. If you're comfortable coding in a language with mutable strings, that'd be even better!

function reverseStringInPlace(str) {
  if (str) {
    let charArray = str.split("");
    var startIndex = 0;
    var endIndex = charArray.length - 1;

    while(startIndex < endIndex) {
      var temp = charArray[startIndex];
      charArray[startIndex] = charArray[endIndex];
      charArray[endIndex] = temp;

      startIndex++;
      endIndex--;
    }

    return charArray.join('');
  } else {
    throw new Error ('Enter valid string');
  }
}

// reverseStringInPlace('');
console.log(reverseStringInPlace('hello')) //olleh;
console.log(reverseStringInPlace('hello world')) //dlrow olleh;
