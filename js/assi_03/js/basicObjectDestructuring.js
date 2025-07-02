console.log("--- Basic Destructuring (Object) ---");

const person = {
    name: "Chris Evans",
    age: 42,
    city: "Boston"
};

const { name, age, city } = person;

console.log("Original person object:", person);
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

const { occupation } = person;
console.log("Occupation (undefined as it doesn't exist):", occupation);