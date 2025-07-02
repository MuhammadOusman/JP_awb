console.log("--- Adding Elements to an Array (Spread Operator) ---");



(function() {
const numbers = [10, 20, 30];

const updatedNumbers = [0, ...numbers, 40];

console.log("Original numbers:", numbers);
console.log("Updated numbers:", updatedNumbers);
})();

