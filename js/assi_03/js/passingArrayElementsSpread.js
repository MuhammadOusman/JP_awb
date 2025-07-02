console.log("--- Passing Array Elements as Arguments (Spread Operator) ---");

function sum(a, b, c) {
    return a + b + c;
}

const numbersToSum = [10, 20, 30];

const result = sum(...numbersToSum);

console.log(`Numbers to sum: ${numbersToSum}`);
console.log(`Sum using spread operator: ${result}`);

const twoNumbers = [5, 10];
const partialSum = sum(...twoNumbers);
console.log(`Sum of [5, 10] using spread: ${partialSum}`);

const fourNumbers = [1, 2, 3, 4];
const excessiveSum = sum(...fourNumbers);
console.log(`Sum of [1, 2, 3, 4] using spread: ${excessiveSum}`);