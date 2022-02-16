"use strict";

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
  let num = str.split(" ");
  return num[Math.floor(num.length / 2)].length;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
  let firststringlength = str1.length;
  let secondstringlength = str2.length;
  let string1Array = str1.split("").sort();
  let string2Array = str2.split("").sort();
  if (firststringlength != secondstringlength) {
    return false;
  }
  for (let i = 0; i < firststringlength; i++) {
    if (string1Array[i] != string2Array[i]) {
      return false;
    }
  }
  return true;
};
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === int) {
      return i;
    } else if (arr[i] > int) {
      return i;
    }
  }
  let length = arr.length;
  return length;
};
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };
