console.log("--- Greeting Message (Default Parameters) ---");



(function() {
function greet(name = "") {
    if (name === "") {
        return "Hello, guest!";
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greet("Emma"));
console.log(greet(""));
console.log(greet());
console.log(greet(undefined));
})();

