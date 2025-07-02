console.log("--- Temporal Dead Zone (TDZ) ---");

console.log("Inside a block scope:");
if (true) {
    try {
        console.log("Logging 'tdzLet' before declaration:", tdzLet);
    } catch (e) {
        console.error("Error (tdzLet):", e.message);
    }
    let tdzLet = "I am a let variable";
    console.log("Logging 'tdzLet' after declaration:", tdzLet);

    try {
        console.log("Logging 'tdzConst' before declaration:", tdzConst);
    } catch (e) {
        console.error("Error (tdzConst):", e.message);
    }
    const tdzConst = "I am a const variable";
    console.log("Logging 'tdzConst' after declaration:", tdzConst);
}