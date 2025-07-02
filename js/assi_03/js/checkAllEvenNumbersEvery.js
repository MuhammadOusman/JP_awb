console.log("--- Check All Even Numbers (Every) ---");



(function() {
const numbers = [2, 4, 6, 8, 10];

const allEven = numbers.every(num => num % 2 === 0);

console.log("Numbers:", numbers);
console.log("Are all numbers in the array even?", allEven);

const mixedNumbers = [2, 4, 6, 7, 10];
const allEven2 = mixedNumbers.every(num => num % 2 === 0);
console.log("Numbers:", mixedNumbers);
console.log("Are all numbers in the array even?", allEven2);
})();

