// 1 [https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript]

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    const vowels = 'aeiouAEIOU';
    return str.split('').filter(ch => !vowels.includes(ch)).join('');
}

// ---------------------------------------------------------------------------

// 2 [https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript]

// Implement a function that adds two numbers together and returns their sum in binary.
// The conversion can be done before, or after the addition.
// The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation))) 

function addBinary(a, b) {
    const sum = a + b
    return sum.toString(2)
}

// ---------------------------------------------------------------------------

// 3 [https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript]

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants? code sz tushintir

function nbYear(p0, percent, aug, p) {
    let years = 0;
    while (p0 < p) {
        p0 = Math.floor(p0 + (p0 * percent / 100) + aug);
        years++;
    }
    return years;
}

// ---------------------------------------------------------------------------

// 4 [https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript]

// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".
// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
    const sum = array.reduce((acc, num) => acc + num, 0);
    return sum % 2 === 0 ? "even" : "odd";
}

// ---------------------------------------------------------------------------

// 5 [https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript]

// Build a function that returns an array of integers from n to 1 where n > 0.

function reverseSeq(n) {
    let arr = [];
    for (let i = n; i >= 1; i--) {
        arr.push(i);
    }
    return arr;
}

// ---------------------------------------------------------------------------

// 6 [https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript]

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
    return str.endsWith(ending);
}

// ---------------------------------------------------------------------------

// 7 https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

// Rules of the "Rock, Paper, Scissors" game are:
// Rock beats Scissors
// Scissors beat Paper,
// Paper beats Rock.
// Let's play! You have to return which player won! In case of a draw return Draw!.

function rps(p1, p2) {
    if (p1 === p2) return "Draw!";

    if (
        (p1 === "rock" && p2 === "scissors") ||
        (p1 === "scissors" && p2 === "paper") ||
        (p1 === "paper" && p2 === "rock")
    ) {
        return "Player 1 won!";
    } else {
        return "Player 2 won!";
    }
}
