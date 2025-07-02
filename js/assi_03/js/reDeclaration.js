console.log("--- Re-declaration ---");



(function() {
console.log("Trying var re-declaration:");
var myVar = "First value";
console.log("myVar after first declaration:", myVar);
var myVar = "Second value";
console.log("myVar after second declaration:", myVar);

console.log("\nTrying let re-declaration:");
try {
    let myLet = "First value";
    console.log("myLet after first declaration:", myLet);
    // let myLet = "Second value"; // This line would throw an error
    console.log("Attempting to re-declare 'myLet' would fail.");
} catch (e) {
    console.error("Error re-declaring 'myLet':", e.message);
}

console.log("\nTrying const re-declaration:");
try {
    const myConst = "First value";
    console.log("myConst after first declaration:", myConst);
    // const myConst = "Second value"; // This line would throw an error
    console.log("Attempting to re-declare 'myConst' would fail.");
} catch (e) {
    console.error("Error re-declaring 'myConst':", e.message);
}
})();

