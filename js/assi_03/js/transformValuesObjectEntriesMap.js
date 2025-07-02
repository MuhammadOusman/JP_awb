console.log("--- Transform Values (Object.entries() + map()) ---");



(function() {
const temperaturesCelsius = {
    morning: 20,
    afternoon: 28,
    evening: 15
};

const temperaturesFahrenheitEntries = Object.entries(temperaturesCelsius).map(([key, value]) => {
    const fahrenheitValue = (value * 9/5) + 32;
    return [key, fahrenheitValue];
});

const temperaturesFahrenheit = Object.fromEntries(temperaturesFahrenheitEntries);

console.log("Temperatures in Celsius:", temperaturesCelsius);
console.log("Temperatures in Fahrenheit:", temperaturesFahrenheit);
})();

