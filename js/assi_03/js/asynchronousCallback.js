console.log("--- Asynchronous Callback ---");



(function() {
function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const data = { id: 1, name: "Sample Data", status: "Fetched" };
        console.log("Data fetched!");
        callback(data);
    }, 2000);
}

function displayData(data) {
    console.log("Displaying fetched data:");
    console.log(data);
}

fetchData(displayData);
console.log("Request sent. Waiting for data...");
})();

