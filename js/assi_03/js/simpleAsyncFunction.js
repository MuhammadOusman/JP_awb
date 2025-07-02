console.log("--- Simple async Function ---");

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sayHello() {
    console.log("Saying hello soon...");
    await delay(2000);
    console.log("Hello, world! (from async/await)");
}

sayHello();
console.log("Async function initiated. Program continues executing while `sayHello` awaits.");