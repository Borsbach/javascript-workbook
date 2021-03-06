"use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//return word.substring(2) + word.charAt(0) + word.charAt(1) + "ay"
function pigLatin(word) {
  word = word.toLowerCase().trim();
  //check the first character
  if (isVowel(word.charAt(0)))
    return word + "yay";
    else if (isVowel(word.charAt(1)))
    return word.slice(1) + word.charAt(0) + "ay";
    else if (isVowel(word.charAt(2)))
    return word.slice(2) + word.slice(0,2) + "ay";
    else if (isVowel(word.slice(3)))
    return word.slice(3) + word.slice(0,3) + "ay";
    //If entry is not a word get prompted to try again
    else return "Please try again!"
}

  //Checks for Vowels
  function isVowel(word) {
    if (
      word === "a" ||
      word === "e" ||
      word === "u" ||
      word === "i" ||
      word === "o"
      )
      return true;
      else return false;
    }
    

    function getPrompt() {
      rl.question("Enter a word ", answer => {
        var words = answer.split(' ');
        var newWords = [];
        for(let i = 0; i < words.length; i++){
          newWords.push(pigLatin(words[i]));
        }
        console.log(newWords.toString())
    getPrompt();
  });
}

// Tests

if (typeof describe === "function") {
  describe("#pigLatin()", () => {
    it("should translate a simple word", () => {
      assert.equal(pigLatin("car"), "arcay");
      assert.equal(pigLatin("dog"), "ogday");
    });
    it("should translate a complex word", () => {
      assert.equal(pigLatin("create"), "eatecray");
      assert.equal(pigLatin("valley"), "alleyvay");
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin("egg"), "eggyay");
      assert.equal(pigLatin("emission"), "emissionyay");
    });
    it("should lowercase and trim word before translation", () => {
      assert.equal(pigLatin("HeLlO "), "ellohay");
      assert.equal(pigLatin(" RoCkEt"), "ocketray");
    });
    // it("should translate 2 or more words at a time", () => {
    //   assert.equal(pigLatin("apple pie"), "appleyay,iepay");
    // });
  });
} else {
  getPrompt();
}
