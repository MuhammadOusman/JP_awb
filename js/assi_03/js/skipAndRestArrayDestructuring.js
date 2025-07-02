console.log("--- Skip and Rest (Array Destructuring) ---");

const colorsArray = ["red", "green", "blue", "yellow", "purple", "orange"];

const [, , ...remainingColorsAfterSkip] = colorsArray;

console.log("Original colors array:", colorsArray);
console.log("Remaining colors after skipping first two:", remainingColorsAfterSkip);

const data = [100, 200, 300, 400, 500];
const [, , , ...lastTwo] = data;
console.log("\nData example:");
console.log("Original data array:", data);
console.log("Last two elements (by skipping first three):", lastTwo);