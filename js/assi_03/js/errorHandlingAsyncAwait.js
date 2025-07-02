console.log("--- Error Handling in async/await ---");

function fetchUserWithError(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === null || userId === undefined || userId <= 0) {
                reject(`User with ID ${userId} not found.`);
            } else {
                console.log(`(Simulating fetchUserWithError for ID: ${userId})`);
                resolve({ id: userId, name: `User ${userId}`, email: `user${userId}@example.com` });
            }
        }, 500);
    });
}

async function getUserInfo(userId) {
    try {
        console.log(`\n--- Attempting to get user info for ID ${userId} ---`);
        const user = await fetchUserWithError(userId);
        console.log("User Info fetched successfully:", user);
    } catch (error) {
        console.error("Failed to get user info:", error);
    }
}

getUserInfo(10);
getUserInfo(null);
getUserInfo(0);