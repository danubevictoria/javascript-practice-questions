// Write a recursive function for generating all permutations of an input string. Return them as a set.
// Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.
//
// To start, assume every character in the input string is unique.
//
// Your function can have loops—it just needs to also be recursive.

function generatePermutations(str) {
  let permutations = new Set([]);

  if (str.length == 1) {
    permutations.add(str);
    return permutations;
  }
  for (let i = 0; i < str.length; i++) {

  }
}
