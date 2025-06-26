const apiKey = "API_KEY";
const searchBtn = document.getElementById("searchButton");
const cityInput = document.getElementById("inputBar");
const weatherInfo = document.getElementById("weatherInfo");
const forecastInfo = document.getElementById("forecastInfo");
const errorMessage = document.getElementById("errorMessage");
searchBtn.addEventListener("click", getWeather);
async function getWeather() {
    const city = cityInput.value.trim();
    if (!city) {
        errorMessage.textContent = "Please enter a city name!";
        weatherInfo.innerHTML = "";
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const lat = data.coord.lat;
        const lon = data.coord.lon;

        const url2 =`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        const response2 = await fetch(url2);
        const forecastData = await response2.json();
    if (data.cod === "404") {
        errorMessage.textContent = "City not found. Please try again.";
        weatherInfo.innerHTML = "";
    }   else {
        errorMessage.textContent = "";
        displayWeather(data);
        displayForecast(forecastData);
    }
  } catch (error) {
    console.log(error)
    errorMessage.textContent = "Error fetching weather data. Please try again.";
    weatherInfo.innerHTML = "";
  }
}
function displayWeather(data) {
    weatherInfo.style.display = "block";
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    weatherInfo.innerHTML =`<div class="details">
                                <p>Temperature: ${temp}°C</p>
                                <p>Humidity: ${humidity}%</p>
                                <p>Wind Speed: ${windSpeed} m/s</p>
                            </div>`;
}
function displayForecast(forecastData) {
    forecastInfo.style.display = "block";
    for(let i = 0; i < 5; i++) {
        const temp2 = forecastData.list[i].main.temp;
        const forecast = document.createElement('p');
        forecast.textContent = `Day ${i+1} :` + temp2;
        forecastInfo.appendChild(forecast);
        
    }
}
