console.log("--- Object Parameters (Destructuring) ---");



(function() {
function displayUser({ name, age }) {
    console.log(`User Name: ${name}, Age: ${age}`);
}

displayUser({ name: "Bob", age: 30 });
displayUser({ age: 24, name: "Charlie" });
displayUser({ name: "Diana", age: 28, occupation: "Engineer" });

function displayUserWithDefaults({ name = "Guest", age = "Unknown" }) {
    console.log(`User Name (with defaults): ${name}, Age: ${age}`);
}
displayUserWithDefaults({ name: "Eve" });
displayUserWithDefaults({});
})();

