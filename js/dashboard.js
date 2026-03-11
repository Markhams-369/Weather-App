const apiKey = "0aad784d564c0bed571f842798a8cd74";

// retrieve the saved city in landing.js
const city = localStorage.getItem("city");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const refreshBtn = document.getElementById("refreshBtn");
const viewCity = document.getElementById("viewCity");

// adding function to fetch weather data from the api
async function loadWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    // CONVERTING API RESPONSE INTO JSON FORMAT
    const data = await response.json();
    // INSERTING RETURNED WEATHER DATA INTO HTML ELEMENTS
    cityName.textContent = data.name;
    temperature.textContent = Math.round(data.main.temp) + "°C";
    description.textContent = data.weather[0].description;
    humidity.textContent = "Humidity" + data.main.humidity + "%";
    wind.textContent = "wind" + data.wind.speed + " km/h";
}

// RELOAD WEATHER DATA
refreshBtn.addEventListener("click", loadWeather);
// Navigation to the city page
viewCity.addEventListener("click", () => {
    window.location.href = "city.html";

});

//Auto load when opening page
loadWeather();