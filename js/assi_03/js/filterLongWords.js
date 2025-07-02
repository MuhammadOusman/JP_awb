console.log("--- Filter Long Words (Filter) ---");



(function() {
const words = ["apple", "banana", "cherry", "date"];

const longWords = words.filter(word => word.length > 5);

console.log("Original words:", words);
console.log("Words with more than 5 characters:", longWords);
})();

