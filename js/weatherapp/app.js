let API_KEY = "0f489ae46a80197fbd915f42401bf323";

let input = document.getElementById("cityInput");

let showDiv = document.getElementById("showData");

let searchData = async () => {
    try {
        let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}&units=metric`;

        let response = await fetch(API_URL);
        let data = await response.json();

        // Log the data to check if the icon is present
        console.log(data);

        showWeatherData(data);

    } catch (error) {
        console.log(error);
    }
}

let showWeatherData = (data) => {
    // Check if the data contains weather information
    if (data.weather && data.weather.length > 0) {
        showDiv.innerHTML = `<div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
            </div>
            <div>
                <h3>${data.main.temp}°C</h3>
                <h2>${data.weather[0].main}</h2>
            </div>`;
    } else {
        showDiv.innerHTML = `<h3>Weather data not available</h3>`;
    }
}
