console.log("--- Object within an Object (Nested Destructuring) ---");



(function() {
const userProfile = {
    username: "coder_dude",
    details: {
        email: "coder.dude@example.com",
        address: "789 Tech Lane",
        phone: "555-1234"
    }
};

const {
    username,
    details: { email, address }
} = userProfile;

console.log("Original user profile:", userProfile);
console.log("Username:", username);
console.log("Email:", email);
console.log("Address:", address);
})();

