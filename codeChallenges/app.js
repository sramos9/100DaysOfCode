// DAY 3 #100DaysOfCode

// Challenge
// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

// function findLongestWord(str) {
//   //code
//
//   var longestWord = str.split(' ').reduce(function(longest, currentWord) {
//       if(currentWord.length > longest.length)
//         return currentWord
//       else
//         return longest;
//
// }, "");
//
// return longestWord.length;
// }
//
// console.log(findLongestWord("The quick brown fox jumped"));

// DAY 4 CODEWARS

//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.


function persistence(num) {
  // code here
       function multiply(n){
         // this is saying take the num, split it and multiply the two nums split and return value
           return n.reduce(function(a,b){
             return a*b;
           });
       }
       var count =0;
       while(num.toString().length > 1) {
         // this is changing the num to string to see how many characters it is
           num= num.toString().split("");
           // (checking for single digit, if > 1, it's saying split it.)
           num = multiply(num);
           // this is multiplying the single digits that was split above
           count++;
           // iterating through the splits
        }
        return count;
        // this is the answer - gives you how many times it had to split/multiply before getting to single digit
    }
console.log(persistence("39"));
