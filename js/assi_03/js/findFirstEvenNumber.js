console.log("--- Find First Even Number (Find) ---");



(function() {
const numbers = [1, 3, 5, 7, 8, 10];

const firstEven = numbers.find(num => num % 2 === 0);

console.log("Numbers:", numbers);
console.log("First even number found:", firstEven);

const oddNumbers = [1, 3, 5, 7];
const firstEven2 = oddNumbers.find(num => num % 2 === 0);
console.log("Numbers:", oddNumbers);
console.log("First even number found:", firstEven2);
})();

