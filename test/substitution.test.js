// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  it("should return false if the given alphabet isn't exactly 26 characters long", () => {
    const actual = substitution("thinkful", "short");
    expect(actual).to.be.false;
  });

  it("should return false if there are any duplicate characters in the given alphabet", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.be.false;
  });

  it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in the message", () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    const actual = substitution("MESSAGE", "plmoknijbuhvygctfxrdzeswaq");
    const expected = "ykrrpik";
    expect(actual).to.equal(expected);
  });
});

