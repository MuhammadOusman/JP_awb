console.log("--- Find Index of First Even Number (FindIndex) ---");

const numbers = [1, 3, 5, 7, 8, 10];

const indexOfFirstEven = numbers.findIndex(num => num % 2 === 0);

console.log("Numbers:", numbers);
console.log("Index of first even number:", indexOfFirstEven);

const oddNumbers = [1, 3, 5, 7];
const indexOfFirstEven2 = oddNumbers.findIndex(num => num % 2 === 0);
console.log("Numbers:", oddNumbers);
console.log("Index of first even number:", indexOfFirstEven2);