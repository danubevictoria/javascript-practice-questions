// I like parentheticals (a lot).
// "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."
//
// Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.
//
// Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).

function closeParenthesis(sentence, openParenPosition) {
  if (sentence, openParenPosition) {

    let nestedOpen = 0;

    for (let i = openParenPosition + 1; i < characters.length; i++) {
      let char = sentence.charAt(i);

      if (char == ')' && nestedOpen == 0) {
        return i;
      } else if (char == '(') {
        nestedOpen++;
      } else if (char == ')') {
        nestedOpen--;
      }
    }

    throw new Error ('No close parenthesis for the open parenthesis position specified.')
  } else {
    throw new Error ('Enter valid sentence and open parenthesis position.');
  }
}

console.log(closeParenthesis("Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.", 10));
