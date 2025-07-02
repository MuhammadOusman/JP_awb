console.log("--- Check All Long Words (Every) ---");



(function() {
const words = ["elephant", "giraffe", "hippopotamus"];

const allLong = words.every(word => word.length > 5);

console.log("Words:", words);
console.log("Are all words in the array more than 5 characters long?", allLong);

const mixedWords = ["apple", "banana", "cherry"];
const allLong2 = mixedWords.every(word => word.length > 5);
console.log("Words:", mixedWords);
console.log("Are all words in the array more than 5 characters long?", allLong2);
})();

