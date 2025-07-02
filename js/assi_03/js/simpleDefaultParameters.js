console.log("--- Simple Default Parameters ---");

function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}

console.log("--- With custom greeting ---");
greet("Alice", "Hi");
greet("Bob", "Greetings");

console.log("--- With default greeting ---");
greet("Charlie");
greet("Diana", undefined);