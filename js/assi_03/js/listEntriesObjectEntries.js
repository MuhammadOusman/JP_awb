console.log("--- List Entries (Object.entries()) ---");



(function() {
const car = {
    make: "Honda",
    model: "Civic",
    year: 2022
};

const carEntries = Object.entries(car);

console.log("Car Object:", car);
console.log("Key-Value Pairs (Entries):", carEntries);
})();

