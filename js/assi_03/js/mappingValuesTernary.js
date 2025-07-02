console.log("--- Mapping Values (Ternary) ---");



(function() {
const numbers = [1, 2, 3, 4, 5, 6];

const transformedNumbers = numbers.map(num =>
    (num % 2 === 0) ? num * 2 : num * 3
);

console.log("Original numbers:", numbers);
console.log("Transformed numbers:", transformedNumbers);
})();

