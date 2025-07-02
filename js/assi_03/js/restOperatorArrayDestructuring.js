console.log("--- Rest Operator (Array Destructuring) ---");



(function() {
const numbers = [1, 2, 3, 4, 5];

const [firstNumber, ...remainingNumbers] = numbers;

console.log("Original numbers array:", numbers);
console.log("First Number:", firstNumber);
console.log("Remaining Numbers:", remainingNumbers);

const singleElementArray = [100];
const [singleNum, ...emptyRest] = singleElementArray;
console.log("\nSingle element array example:");
console.log("Single Number:", singleNum);
console.log("Empty Rest:", emptyRest);
})();

