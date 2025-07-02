console.log("--- Fetch and Process Data (Async/Await) ---");



(function() {
function fetchUser(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`(Simulating fetchUser for ID: ${userId})`);
            resolve({ id: userId, name: `User ${userId}`, age: 30 + userId });
        }, 500);
    });
}

function fetchPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`(Simulating fetchPosts for user ID: ${userId})`);
            const posts = [
                { id: 101, userId: userId, title: `Post 1 by User ${userId}` },
                { id: 102, userId: userId, title: `Post 2 by User ${userId}` }
            ];
            resolve(posts);
        }, 700);
    });
}

async function getUserAndPosts(userId) {
    try {
        console.log(`\n--- Starting fetch for User ID ${userId} ---`);
        const user = await fetchUser(userId);
        console.log("Fetched User:", user);

        const posts = await fetchPosts(user.id);
        console.log("Fetched Posts:", posts);

        console.log(`--- Finished fetch for User ID ${userId} ---`);
    } catch (error) {
        console.error(`Error in getUserAndPosts for User ID ${userId}:`, error);
    }
}

getUserAndPosts(1);
getUserAndPosts(2);
})();

