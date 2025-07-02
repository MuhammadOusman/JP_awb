console.log("--- Simple Callback ---");



(function() {
function greet(name, callback) {
    const message = `Hello, ${name}!`;
    callback(message);
}

function printGreeting(msg) {
    console.log(msg);
}

greet("Alice", printGreeting);

greet("Bob", (message) => {
    console.log(`Callback says: ${message}`);
});
})();

