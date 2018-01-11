// DAY 3 #100DaysOfCode

// Challenge
// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

function findLongestWord(str) {
  //code

  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
      if(currentWord.length > longest.length)
        return currentWord
      else
        return longest;

}, "");

return longestWord.length;
}

console.log(findLongestWord("The quick brown fox jumped"));
console.log(findLongestWord(longest));
//keep this function call here
//LongestWord(readline());
