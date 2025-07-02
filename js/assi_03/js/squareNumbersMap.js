console.log("--- Square Numbers (Map) ---");



(function() {
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(num => num * num);

console.log("Original numbers:", numbers);
console.log("Squared numbers:", squaredNumbers);
})();

