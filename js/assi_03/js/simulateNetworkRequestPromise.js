console.log("--- Simulate Network Request (Promise) ---");



(function() {
function getWeather(shouldSucceed = true) {
    return new Promise((resolve, reject) => {
        const delayTime = 1000;
        setTimeout(() => {
            if (shouldSucceed) {
                const weatherData = {
                    city: "London",
                    temperature: "15°C",
                    conditions: "Cloudy"
                };
                resolve(weatherData);
            } else {
                reject("Failed to fetch weather data: Network error or city not found.");
            }
        }, delayTime);
    });
}

console.log("--- Weather Request 1: Success ---");
getWeather(true)
    .then(data => {
        console.log("Weather fetched successfully:", data);
    })
    .catch(error => {
        console.error("Weather request failed (unexpected):", error);
    });
console.log("Request 1 sent...");

console.log("\n--- Weather Request 2: Failure ---");
getWeather(false)
    .then(data => {
        console.log("Weather fetched successfully (unexpected):", data);
    })
    .catch(error => {
        console.error("Weather request failed (expected):", error);
    });
console.log("Request 2 sent...");
})();

