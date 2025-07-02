console.log("--- Find Long Word (Find) ---");



(function() {
const words = ["apple", "banana", "cherry", "date"];

const firstLongWord = words.find(word => word.length > 5);

console.log("Words:", words);
console.log("First word with more than 5 characters:", firstLongWord);

const shortWords = ["cat", "dog", "ant"];
const firstLongWord2 = shortWords.find(word => word.length > 5);
console.log("Words:", shortWords);
console.log("First word with more than 5 characters:", firstLongWord2);
})();

