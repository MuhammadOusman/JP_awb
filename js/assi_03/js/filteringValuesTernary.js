console.log("--- Filtering Values (Ternary) ---");

const strings = ["apple", "banana", "cat", "dog", "elephant", "fig"];

const longStrings = strings.filter(str =>
    (str.length > 3) ? true : false
);

console.log("Original strings:", strings);
console.log("Long strings (length > 3):", longStrings);