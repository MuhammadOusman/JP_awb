console.log("--- Arrow Function with Array Methods ---");



(function() {
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num * num);

console.log("Original numbers:", numbers);
console.log("Squared numbers:", squaredNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);
})();

