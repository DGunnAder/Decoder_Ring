// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() submission tests written by Thinkful", () => {
  describe("error handling", () => {
    it("should return false if the shift amount is 0", () => {
      const actual = caesar("thinkful", 0);
      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is above 25", () => {
      const actual = caesar("thinkful", 26);
      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
      const actual = caesar("thinkful", -26);
      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
      const expected = "phvvdjh";
      const actual = caesar("message", 3);
      expect(actual).to.equal(expected);
    });

    it("should leave spaces and other symbols as is", () => {
      const expected = "d phvvdjh.";
      const actual = caesar("a message.", 3);
      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const expected = "d phvvdjh";
      const actual = caesar("A MESSAGE", 3);
      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const expected = "cheud pdjdclqh";
      const actual = caesar("zebra magazine", 3);
      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const expected = "wbyox jxdxwfkb";
      const actual = caesar("zebra magazine", -3);
      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const expected = "message";
      const actual = caesar("phvvdjh", 3, false);
      expect(actual).to.equal(expected);
    });

    it("should leave spaces and other symbols as is", () => {
      const expected = "a message.";
      const actual = caesar("d phvvdjh.", 3, false);
      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const expected = "a message";
      const actual = caesar("D PHVVDJH", 3, false);
      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const expected = "zebra magazine";
      const actual = caesar("cheud pdjdclqh", 3, false);
      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const expected = "zebra magazine";
      const actual = caesar("wbyox jxdxwfkb", -3, false);
      expect(actual).to.equal(expected);
    });
  });
});