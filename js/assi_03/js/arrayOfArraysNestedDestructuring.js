console.log("--- Array of Arrays (Nested Destructuring) ---");

const nestedArray = [[1, 2], [3, 4], [5, 6]];

const [[a,], [b,], [c,]] = nestedArray;

console.log("Original nested array:", nestedArray);
console.log("Variable a (first element of first sub-array):", a);
console.log("Variable b (first element of second sub-array):", b);
console.log("Variable c (first element of third sub-array):", c);

const [ [, x], [, y], [, z] ] = nestedArray;
console.log("\nSecond elements:");
console.log("Variable x:", x);
console.log("Variable y:", y);
console.log("Variable z:", z);