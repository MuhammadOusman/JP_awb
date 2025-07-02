console.log("--- Convert to Uppercase (Map) ---");

const words = ["apple", "banana", "cherry"];

const uppercaseWords = words.map(word => word.toUpperCase());

console.log("Original words:", words);
console.log("Uppercase words:", uppercaseWords);