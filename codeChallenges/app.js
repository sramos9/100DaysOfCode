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

//
// function persistence(num) {
//   // code here
//        function multiply(n){
//          // this is saying take the num, split it and multiply the two nums split and return value
//            return n.reduce(function(a,b){
//              return a*b;
//            });
//        }
//        var count =0;
//        while(num.toString().length > 1) {
//          // this is changing the num to string to see how many characters it is
//            num= num.toString().split("");
//            // (checking for single digit, if > 1, it's saying split it.)
//            num = multiply(num);
//            // this is multiplying the single digits that was split above
//            count++;
//            // iterating through the splits
//         }
//         return count;
//         // this is the answer - gives you how many times it had to split/multiply before getting to single digit
//     }
// console.log(persistence("39"));


//Day #5

// const grades = [4, 73, 67, 38, 33];
// const roundUp = [];
// const postGrades = ()=> {
//   for(let i = 0; i<= grades.length; i++)
//   if(grades < 40){
//     return grades;
//   } else if {
//       const newGrade = () => {
//         // place holder for new grade IF that is less than or equal to 2
//         (grades[i] >= 40 && grades[i] + 2 || 1 == grades[i] % 5 = 0){
//           return grades[i]
//           // i think this is where you would take that outcome and push it into roundUp array.
//
//           // if it is greater than 3 round it up to the next multiple of 5
//       }
//     }
//   }
// };
// console.log(postGrades);


// code callenge from booking

// function luckNumber {
//
//
// if (n % 4 != 0 || n % 13 != 0){
//       console.log(n);;
//
//   };
// };
//
// luckNumber();

//code challenge from hacker rank -- jen

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
//
// factorial(4);

//1. an array of integers, arr, denoting the elements in the array.
//2. an integer, k, denoting the element to be searched in the array.
//the function must return a string "YES" or "NO" if element is present in the arr or not.

// function findNumber(arr, k) {
//
//     for(let i = 0; i <= arr.length; i++) {
//         if(arr[i] === k) {
//             return "YES";
//         } else {
//             return "NO";
//         }
//     }
//
// }
//
// findNumber([1, 2, 3], 5);


//project euler

function findMultiples() {

  for(let i =0; i <= 10; i++) {
    if(i % 3 || i % 5) {
      return i;
    } else {
      return "not a multiple";
    }
  }
}

findMultiples();



// new practice
// for  loops

//starting point - ending point - count 1

//for () {
  //
//}

for (var x = 0; x <= 5; x++) {
  for (var j = 0; j <= 5; j++) {
    console.log('first loop');
  }
}
