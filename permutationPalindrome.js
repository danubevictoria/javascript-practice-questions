// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴
// You can assume the input string only contains lowercase letters.
//
// Examples:
//
// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false
// "But 'ivicc' isn't a palindrome!"
// If you had this thought, read the question again carefully. We're asking if any permutation of the string is a palindrome. Spend some extra time ensuring you fully understand the question before starting. Jumping in with a flawed understanding of the problem doesn't look good in an interview.

function permutationPalindrome(str) {
  let unpairedCharacters = new Set();

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);

    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char);
    } else {
      unpairedCharacters.add(char);
    }
  }

  return unpairedCharacters.length <= 1;
}

console.log(permutationPalindrome('civic'));
console.log(permutationPalindrome('ivicc'));
console.log(permutationPalindrome('civil'));
console.log(permutationPalindrome('livci'));