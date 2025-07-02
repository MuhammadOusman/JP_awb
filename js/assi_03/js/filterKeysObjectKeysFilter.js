console.log("--- Filter Keys (Object.keys() + filter()) ---");

const inventory = {
    apples: 15,
    bananas: 8,
    oranges: 20,
    grapes: 12,
    mangoes: 5
};

const keysWithValueGreaterThan10 = Object.keys(inventory).filter(key => {
    return inventory[key] > 10;
});

console.log("Inventory Object:", inventory);
console.log("Keys with value > 10:", keysWithValueGreaterThan10);