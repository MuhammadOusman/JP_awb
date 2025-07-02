console.log("--- Basic Destructuring (Object Rest Operator) ---");

const person = {
    name: "Jane Doe",
    age: 25,
    email: "jane.doe@example.com",
    address: "456 Oak Avenue"
};

const { name, email, ...restOfPerson } = person;

console.log("Original person object:", person);
console.log("Name:", name);
console.log("Email:", email);
console.log("Remaining properties (rest):", restOfPerson);