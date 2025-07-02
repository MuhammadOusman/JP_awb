console.log("--- Iterate Over Keys (Object.keys()) ---");



(function() {
const product = {
    name: "Wireless Mouse",
    price: 25.99,
    category: "Electronics",
    inStock: true
};

const productKeys = Object.keys(product);

console.log("Product Object:", product);
console.log("Iterating over keys:");

productKeys.forEach(key => {
    console.log(`Key: ${key}, Value: ${product[key]}`);
});
})();

