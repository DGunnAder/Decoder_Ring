// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25) return false;
    if (!encode) shift = -shift;

    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return input.toLowerCase().split("").map((char) => {
      if (alphabet.includes(char)) {
        let newIndex = (alphabet.indexOf(char) + shift) % 26;
        if (newIndex < 0) newIndex += 26;
        return alphabet[newIndex];
      }
      return char;
    }).join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
