console.log("--- Re-assignment ---");

console.log("Trying var re-assignment:");
var assignVar = "Initial var value";
console.log("assignVar initial:", assignVar);
assignVar = "New var value";
console.log("assignVar reassigned:", assignVar);

console.log("\nTrying let re-assignment:");
let assignLet = "Initial let value";
console.log("assignLet initial:", assignLet);
assignLet = "New let value";
console.log("assignLet reassigned:", assignLet);

console.log("\nTrying const re-assignment:");
try {
    const assignConst = "Initial const value";
    console.log("assignConst initial:", assignConst);
    // assignConst = "New const value"; // This line would throw an error
    console.log("assignConst reassigned (should not happen):", assignConst);
} catch (e) {
    console.error("Error re-assigning 'assignConst':", e.message);
}