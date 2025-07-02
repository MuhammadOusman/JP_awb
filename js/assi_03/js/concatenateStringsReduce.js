console.log("--- Concatenate Strings (Reduce) ---");

const words = ["Hello", "world", "this", "is", "JavaScript"];

const sentence = words.reduce((accumulator, currentValue) => {
    return accumulator + " " + currentValue;
});

const sentenceWithInitial = words.reduce((accumulator, currentValue) => {
    return accumulator === "" ? currentValue : `${accumulator} ${currentValue}`;
}, "");

console.log("Original words:", words);
console.log("Concatenated sentence (first method):", sentence);
console.log("Concatenated sentence (with initial value):", sentenceWithInitial);