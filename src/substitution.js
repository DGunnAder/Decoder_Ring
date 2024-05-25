// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) return false;

    const realAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const lookup = encode ? realAlphabet : alphabet;
    const replacement = encode ? alphabet : realAlphabet;
    
    const lookupMap = lookup.split("").reduce((acc, letter, i) => {
      acc[letter] = replacement[i];
      return acc;
    }, {});
    
    return input.toLowerCase().split("").map((char) => {
      if (char === " ") return char;
      return lookupMap[char];
    }).join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
