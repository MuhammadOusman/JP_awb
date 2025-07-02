console.log("--- Iterate Over Values (Object.values()) ---");

const user = {
    username: "jane_doe",
    email: "jane.doe@example.com",
    location: "USA"
};

const userValues = Object.values(user);

console.log("User Object:", user);
console.log("Iterating over values:");

userValues.forEach(value => {
    console.log(`Value: ${value}`);
});