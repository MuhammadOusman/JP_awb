console.log("--- Error Handling (Promise) ---");

function fetchUserData(userData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!userData || typeof userData.age === 'undefined') {
                reject("User data is missing 'age' property.");
            } else {
                resolve(userData);
            }
        }, 1000);
    });
}

console.log("--- Test Case 1: Valid User Data ---");
fetchUserData({ name: "Anna", age: 29 })
    .then(user => {
        console.log("User data fetched:", user);
    })
    .catch(error => {
        console.error("Error fetching user data (unexpected):", error);
    });

console.log("\n--- Test Case 2: Missing Age Property ---");
fetchUserData({ name: "Bob" })
    .then(user => {
        console.log("User data fetched (unexpected):", user);
    })
    .catch(error => {
        console.error("Error fetching user data (expected):", error);
    });

console.log("\n--- Test Case 3: Empty User Data ---");
fetchUserData(null)
    .then(user => {
        console.log("User data fetched (unexpected):", user);
    })
    .catch(error => {
        console.error("Error fetching user data (expected):", error);
    });