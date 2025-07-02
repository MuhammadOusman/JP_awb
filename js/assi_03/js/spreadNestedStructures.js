console.log("--- Spread Operator with Nested Structures ---");



(function() {
const nestedArray = [1, [2, 3], 4, { a: 5 }];
const shallowCopiedArray = [...nestedArray];

console.log("Original nestedArray (before modification):", nestedArray);
console.log("Shallow Copied Array (before modification):", shallowCopiedArray);
console.log("Are they the same reference?", nestedArray === shallowCopiedArray);

shallowCopiedArray[0] = 99;
shallowCopiedArray[1][0] = 200;
shallowCopiedArray[3].a = 500;

console.log("\nAfter modification:");
console.log("Original nestedArray (after modification):", nestedArray);
console.log("Shallow Copied Array (after modification):", shallowCopiedArray);
console.log("Observation: Shallow copy duplicates top-level elements. For nested objects or arrays, it copies their references, meaning changes to nested structures affect both the original and copied arrays.");
})();

