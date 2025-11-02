// 1 [https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript]

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// function disemvowel(str) {
//     const vowels = 'aeiouAEIOU';
//     return str.split('').filter(ch => !vowels.includes(ch)).join('');
// }

// ---------------------------------------------------------------------------

// 2 [https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript]

// Implement a function that adds two numbers together and returns their sum in binary.
// The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation))) 

// function addBinary(a, b) {
//     const sum = a + b
//     return sum.toString(2)
// }

// ---------------------------------------------------------------------------

// 3 [https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript]

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants? code sz tushintir

// function nbYear(p0, percent, aug, p) {
//     let years = 0;
//     while (p0 < p) {
//         p0 = Math.floor(p0 + (p0 * percent / 100) + aug);
//         years++;
//     }
//     return years;
// }

// ---------------------------------------------------------------------------
