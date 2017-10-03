// You're working on a secret team solving coded transmissions.
// Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backwards! Your colleagues have handed off the last step to you.
//
// Write a function reverseWords() that takes a string message and reverses the order of the words in-place. ↴
//
// Since strings in JavaScript are immutable ↴ , we'll first convert the string into an array of characters, do the in-place word reversal on that array, and re-join that array into a string before returning it. This isn't technically "in-place" and the array of characters will cost O(n)O(n) additional space, but it's a reasonable way to stay within the spirit of the challenge. If you're comfortable coding in a language with mutable strings, that'd be even better!
//
// For example:
//
//   var message = 'find you will pain only go you recordings security the into if';
//
// reverseWords(message);
// // returns: 'if into the security recordings you go only pain will you find'
//
// When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.

function reverseWords(message) {
  if (message) {
    let reversedMessage = reverseChars(message);

    let reversedCharsArray = reversedMessage.split(' ');

    for (let i = 0; i < reversedCharsArray.length; i++) {
      let word = reversedCharsArray[i];
      reversedCharsArray[i] = reverseChars(word);
    }

    return reversedCharsArray.join(' ');
  } else {
    throw new Error ('Enter a valid message');
  }
}

function reverseChars(str) {
  if (str) {
    let charArray = str.split('');

    let startIndex = 0;
    let endIndex = str.length - 1;

    while (startIndex < endIndex) {
      let temp = charArray[startIndex];
      charArray[startIndex] = charArray[endIndex];
      charArray[endIndex] = temp;

      startIndex++;
      endIndex--;
    }

    return charArray.join('');
  }
}

var message = 'find you will pain only go you recordings security the into if';

console.log(reverseWords(message));
// returns: 'if into the security recordings you go only pain will you find'
