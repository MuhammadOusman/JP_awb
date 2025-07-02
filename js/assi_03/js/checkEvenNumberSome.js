console.log("--- Check for Even Number (Some) ---");



(function() {
const numbers = [1, 3, 5, 7, 8];

const hasEvenNumber = numbers.some(num => num % 2 === 0);

console.log("Numbers:", numbers);
console.log("Does the array have at least one even number?", hasEvenNumber);

const oddNumbers = [1, 3, 5, 7];
const hasEvenNumber2 = oddNumbers.some(num => num % 2 === 0);
console.log("Numbers:", oddNumbers);
console.log("Does the array have at least one even number?", hasEvenNumber2);
})();

