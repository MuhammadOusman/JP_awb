console.log("--- Function Calls ---");



(function() {
function calculateProduct(a, b) {
    return a * b;
}

const productMessage = `The product of 12 and 5 is ${calculateProduct(12, 5)}.`;

console.log(productMessage);
})();

