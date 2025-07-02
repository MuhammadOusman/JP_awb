console.log("--- Copying an Array (Spread Operator) ---");

const originalArray = [1, 2, 3, { a: 4 }];

const copiedArray = [...originalArray];

console.log("Original Array:", originalArray);
console.log("Copied Array:", copiedArray);

console.log("Are they the same reference?", originalArray === copiedArray);

copiedArray[0] = 99;
originalArray[3].a = 50;
console.log("\nAfter modifying copiedArray[0] and originalArray[3].a:");
console.log("Original Array:", originalArray);
console.log("Copied Array:", copiedArray);