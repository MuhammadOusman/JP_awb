console.log("--- Copying an Object (Spread Operator) ---");



(function() {
const originalObject = { name: "Alice", age: 30, details: { city: "New York" } };

const copiedObject = { ...originalObject };

console.log("Original Object:", originalObject);
console.log("Copied Object:", copiedObject);

console.log("Are they the same reference?", originalObject === copiedObject);

copiedObject.age = 31;
originalObject.details.city = "London";
console.log("\nAfter modifying copiedObject.age and originalObject.details.city:");
console.log("Original Object:", originalObject);
console.log("Copied Object:", copiedObject);
})();

