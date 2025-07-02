console.log("--- First and Rest (Array Destructuring) ---");

const numbersArray = [10, 20, 30, 40, 50, 60];

const [first, ...rest] = numbersArray;

console.log("Original array:", numbersArray);
console.log("First element:", first);
console.log("Rest of elements:", rest);

const colors = ["red", "green", "blue"];
const [primaryColor, ...remainingColors] = colors;
console.log("\nColors example:");
console.log("Primary Color:", primaryColor);
console.log("Remaining Colors:", remainingColors);