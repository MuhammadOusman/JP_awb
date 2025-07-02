console.log("--- Promise Chain ---");

function fetchData() {
    console.log("Fetching data for promise chain...");
    return new Promise(resolve => {
        setTimeout(() => {
            const data = { id: 1, message: "Data fetched successfully!" };
            resolve(data);
        }, 1000);
    });
}

fetchData()
    .then(data => {
        console.log("Data received in .then():", data);
        return data.message.toUpperCase();
    })
    .then(transformedData => {
        console.log("Transformed data in second .then():", transformedData);
    })
    .catch(error => {
        console.error("Error in promise chain:", error);
    });

console.log("Promise chain initiated.");