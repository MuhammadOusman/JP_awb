console.log("--- Sum of Numbers (Reduce) ---");



(function() {
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Original numbers:", numbers);
console.log("Sum of numbers:", sum);
})();

