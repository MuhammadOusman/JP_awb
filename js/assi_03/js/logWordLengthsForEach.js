console.log("--- Log Word Lengths (forEach) ---");

const words = ["apple", "banana", "cherry"];

console.log("Logging word lengths:");
words.forEach(word => {
    console.log(`Word "${word}" has length ${word.length}`);
});