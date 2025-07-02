console.log("--- Check for Long Word (Some) ---");

const words = ["apple", "banana", "cherry", "date"];

const hasLongWord = words.some(word => word.length > 5);

console.log("Words:", words);
console.log("Does the array have at least one word with more than 5 characters?", hasLongWord);

const shortWords = ["cat", "dog", "ant"];
const hasLongWord2 = shortWords.some(word => word.length > 5);
console.log("Words:", shortWords);
console.log("Does the array have at least one word with more than 5 characters?", hasLongWord2);