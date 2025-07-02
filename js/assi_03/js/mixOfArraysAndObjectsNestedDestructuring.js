console.log("--- Mix of Arrays and Objects (Nested Destructuring) ---");



(function() {
const data = {
    id: "user_001",
    info: [
        { name: "Alice" },
        { age: 25 },
        { city: "Wonderland" }
    ]
};

const {
    id,
    info: [ { name }, { age } ]
} = data;

console.log("Original data object:", data);
console.log("ID:", id);
console.log("Name:", name);
console.log("Age:", age);

const { info: [,, { city }] } = data;
console.log("City:", city);
})();

