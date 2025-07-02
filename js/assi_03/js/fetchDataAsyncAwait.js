console.log("--- Fetch Data with async/await ---");



(function() {
function fetchUserData(userData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!userData || typeof userData.id === 'undefined') {
                reject("User data is missing 'id' property or is empty.");
            } else {
                resolve(userData);
            }
        }, 1000);
    });
}

async function getUserData(userId) {
    try {
        console.log(`Attempting to fetch user data for ID: ${userId}...`);
        const user = await fetchUserData({ id: userId, name: `User ${userId}`, age: 30 + userId });
        console.log(`Successfully fetched user:`, user);
        return user;
    } catch (error) {
        console.error(`Error fetching user data for ID ${userId}:`, error);
        throw error;
    }
}

getUserData(101);
getUserData(undefined);
})();

