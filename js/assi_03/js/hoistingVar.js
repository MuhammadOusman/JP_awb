console.log("--- Hoisting with var ---");



(function() {
console.log("Value of 'hoistedVar' before declaration:", hoistedVar);

var hoistedVar = "I am hoisted";

console.log("Value of 'hoistedVar' after declaration:", hoistedVar);
})();

