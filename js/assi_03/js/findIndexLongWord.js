console.log("--- Find Index of Long Word (FindIndex) ---");

const words = ["apple", "banana", "cherry", "date"];

const indexOfFirstLongWord = words.findIndex(word => word.length > 5);

console.log("Words:", words);
console.log("Index of first word with more than 5 characters:", indexOfFirstLongWord);

const shortWords = ["cat", "dog", "ant"];
const indexOfFirstLongWord2 = shortWords.findIndex(word => word.length > 5);
console.log("Words:", shortWords);
console.log("Index of first word with more than 5 characters:", indexOfFirstLongWord2);