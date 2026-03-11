// APIkey for OpenWeatherMap API
const apiKey = "0aad784d564c0bed571f842798a8cd74";

// retrieve the saved city in landing.js
const city = localStorage.getItem("city");

async function loadCityWeather() { 
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
//conversion to json format
const data = await response.json();

document.getElementById("cityTitle").textContent = `${data.name}`;
document.getElementById("temperature").textContent = `${data.main.temp} °C`;
document.getElementById("condition").textContent = `Description: ${data.weather[0].description}`;
document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
document.getElementById("wind").textContent = `Wind Speed: ${data.wind.speed} km/h`;
document.getElementById("pressure").textContent = `Pressure: ${data.main.pressure} hPa`;
    document.getElementById("feelsLike").textContent = `Feels Like: ${data.main.feels_like} °C`;
    
}

//run when the page loads
window.onload = loadCityWeather;


