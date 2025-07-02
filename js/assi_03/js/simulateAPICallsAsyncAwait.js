// --- simulateAPICallsAsyncAwait.js ---



(function() {
(function() {

console.log("--- Simulate API Calls (Async/Await Sequence) ---");

function apiCall(callNumber) {
    const randomDelay = Math.floor(Math.random() * 2000) + 500;
    const shouldFail = Math.random() < 0.2;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(`API Call ${callNumber} failed after ${randomDelay}ms.`);
            } else {
                resolve(`Data from API Call ${callNumber} (after ${randomDelay}ms)`);
            }
        }, randomDelay);
    });
}

async function getData() {
    console.log("\n--- Starting Sequential API Calls ---");
    try {
        const result1 = await apiCall(1);
        console.log(result1);

        const result2 = await apiCall(2);
        console.log(result2);

        const result3 = await apiCall(3);
        console.log(result3);

        console.log("--- All API Calls Completed Successfully ---");
    } catch (error) {
        console.error("An API call failed in sequence:", error);
        console.log("--- Sequential API Calls Interrupted ---");
    }
}

getData();
getData();
})();


})();

