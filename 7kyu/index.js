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

// [https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript]



function addBinary(a, b) {
    const sum = a + b
    return sum.toString(2)
}