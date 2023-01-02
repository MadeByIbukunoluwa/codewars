

// DESCRIPTION:
// You're given two integers – n and k. n is always positive, while k >= 0. Write a function that returns first k odd digits in a number n.

// The output should also be an integer.

// In the following cases a function should return 0:

// there are no odd digits in a number n;
// k is bigger than a number of digits in n;
// k = 0;
// k is bigger than a number of odd digits in n.
// BTW, is 0 an odd number or an even one?



function findOddDigits(n, k) {
  let oddDigits = [...String(n)].filter((num) => num % 2 === 1).slice(0, k);
  if (k > oddDigits.length) return 0;
  return parseInt(oddDigits.join("") || 0);
}