console.log("--- When to use var, let, and const ---");



(function() {
console.log("\nGood use case for `var` (mostly historical/legacy):");
function processItem(item) {
    if (item.quantity > 0) {
        var status = "In Stock";
    } else {
        var status = "Out of Stock";
    }
    console.log(`Item status: ${status}`);
}
processItem({ name: "Apple", quantity: 5 });
processItem({ name: "Orange", quantity: 0 });

console.log("\nGood use case for `let` (when variable needs re-assignment):");
let count = 0;
for (let i = 0; i < 3; i++) {
    count += i;
    console.log(`Loop iteration ${i}, current count: ${count}`);
}
console.log(`Final count (using let): ${count}`);

console.log("\nGood use case for `const` (when variable should not be re-assigned):");
const PI = 3.14159;
const APP_NAME = "MyAwesomeApp";
console.log(`App Name: ${APP_NAME}, PI value: ${PI}`);

const config = {
    theme: "dark",
    notifications: true
};
console.log("Initial config:", config);
config.theme = "light";
config.language = "en-US";
console.log("Modified config (allowed):", config);
})();

