console.log("--- Hoisting with let and const ---");



(function() {
console.log("Trying to log 'hoistedLet' before declaration:");
try {
    console.log("Value of 'hoistedLet':", hoistedLet);
} catch (e) {
    console.error("Error logging 'hoistedLet':", e.message);
}
let hoistedLet = "I am let";
console.log("Value of 'hoistedLet' after declaration:", hoistedLet);

console.log("\nTrying to log 'hoistedConst' before declaration:");
try {
    console.log("Value of 'hoistedConst':", hoistedConst);
} catch (e) {
    console.error("Error logging 'hoistedConst':", e.message);
}
const hoistedConst = "I am const";
console.log("Value of 'hoistedConst' after declaration:", hoistedConst);
})();

