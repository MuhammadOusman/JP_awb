console.log("--- Skipping Elements (Array Destructuring) ---");



(function() {
const colors = ["red", "green", "blue", "yellow"];

const [primaryColor, , tertiaryColor] = colors;

console.log("Colors array:", colors);
console.log("Primary Color:", primaryColor);
console.log("Tertiary Color:", tertiaryColor);

const numbers = [10, 20, 30, 40, 50];
const [, , , fourthNum, fifthNum] = numbers;
console.log("\nNumbers example:");
console.log("Original numbers:", numbers);
console.log("Fourth number:", fourthNum);
console.log("Fifth number:", fifthNum);
})();

