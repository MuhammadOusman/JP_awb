console.log("--- Updating Object Properties (Spread Operator) ---");



(function() {
const user = {
    name: "John Doe",
    age: 28,
    email: "john.doe@example.com"
};

const updatedUser = {
    ...user,
    email: "john.new.email@example.com",
    address: "123 Main St"
};

console.log("Original User:", user);
console.log("Updated User:", updatedUser);
})();

