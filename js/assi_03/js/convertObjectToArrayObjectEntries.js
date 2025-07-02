console.log("--- Convert Object to Array (Object.entries()) ---");



(function() {
const person = {
    firstName: "Michael",
    lastName: "Scott",
    age: 45
};

const personArray = Object.entries(person);

console.log("Person Object:", person);
console.log("Converted to Array of Key-Value Pairs:", personArray);
})();

