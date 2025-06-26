const apiKey = "API_KEY";
const searchBtn = document.getElementById("searchButton");
const cityInput = document.getElementById("inputBar");
const weatherInfo = document.getElementById("weatherInfo");
const forecastInfo = document.getElementById("forecastInfo");
const errorMessage = document.getElementById("errorMessage");
const recentList = document.getElementById("recents");
searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});
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
        console.log(error);
        errorMessage.textContent = "Error fetching weather data. Please try again.";
        weatherInfo.innerHTML = "";
        forecastInfo.innerHTML = "";
  }
}
function displayWeather(data) {
    weatherInfo.style.display = "flex";
    weatherInfo.innerHTML =`    <h2><i class="fa-solid fa-location-dot"></i>${data.name}</h2>
                                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                                <h1>${Math.trunc(data.main.temp)}°C<p>${data.weather[0].description}</p></h1>
                                <div class="details"><p>Humidity<br><br>${data.main.humidity}%</p></div>
                                <div class="details"><p>Wind Speed<br><br>${data.wind.speed} m/s</p></div>
                                <h2>5-Day Forecast</h2>`;
}
function displayForecast(forecastData) {
    forecastInfo.innerHTML = "";
    forecastInfo.style.display = "flex";
    for(let i = 0; i < 5; i++) {
        const temp2 = forecastData.list[i].main.temp;
        const forecast = document.createElement('div');
        forecast.classList.add("details");
        forecast.innerHTML = `Day ${i+1}<br><img src="https://openweathermap.org/img/wn/${forecastData.list[i].weather[0].icon}@2x.png"><br>${Math.trunc(forecastData.list[i].main.temp)}°C<br>${forecastData.list[i].weather[0].description}`;
        forecastInfo.appendChild(forecast);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    function loadRecents() {
        const recents = JSON.parse(localStorage.getItem("recents")) || [];
        recents.forEach(recentText => addRecentsToDOM(recentText));
    }
    function saveRecents() {
        const recents = [];
        document.querySelectorAll("#recents p").forEach(p => {
            recents.push(p.textContent);
        });
        localStorage.setItem("recents", JSON.stringify(recents));
    }

    function addRecentsToDOM(recentText) {
        const recentPara = document.createElement('p');
        recentPara.textContent = recentText;
        recentList.appendChild(recentPara);
    }

    searchBtn.addEventListener("click", () => {
        const recentText = cityInput.value.trim();
        if (recentText !== "") {
            recentList.style.display = "flex";
            addRecentsToDOM(recentText);
            saveRecents();
            cityInput.value = "";
        }
    });
    cityInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            searchBtn.click()
        } 
    })
    loadRecents();
});