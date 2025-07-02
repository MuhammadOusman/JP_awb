console.log("--- Simple Arrow Function ---");



(function() {
const add = (a, b) => a + b;

const result = add(3, 5);
console.log("Result of add(3, 5):", result);

const subtract = (a, b) => {
    const diff = a - b;
    return diff;
};
console.log("Result of subtract(10, 4):", subtract(10, 4));
})();

