console.log("--- Renaming Variables (Object Destructuring) ---");



(function() {
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

const { make: carMake, model: carModel, year: carYear } = car;

console.log("Original car object:", car);
console.log("Car Make:", carMake);
console.log("Car Model:", carModel);
console.log("Car Year:", carYear);
})();

