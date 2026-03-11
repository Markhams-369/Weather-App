const apiKey = "0aad784d564c0bed571f842798a8cd74";

// retrieve the saved city in landing.js
const city = localStorage.getItem("city");
// getting refs to HTML elements
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const forecastContainer = document.getElementById("forecastContainer");
const refreshBtn = document.getElementById("refreshBtn");
const viewCity = document.getElementById("viewCity");

// adding function to fetch weather data from the api
async function loadWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`,
  );
  // CONVERTING API RESPONSE INTO JSON FORMAT
  const data = await response.json();
  // INSERTING RETURNED WEATHER DATA INTO HTML ELEMENTS
  cityName.textContent = data.name;
  temperature.textContent = Math.round(data.main.temp) + "°C";
  description.textContent = data.weather[0].description;
  humidity.textContent = "Humidity" + data.main.humidity + "%";
  wind.textContent = "wind" + data.wind.speed + " km/h";

  const icon = data.weather[0].icon;
  // icon img url
  weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
}
async function loadForecast() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`,
  );
  const data = await response.json();

  forecastContainer.innerHTML = "";
  const dailyForecast = data.list.filter((item) =>
    item.dt_txt.includes("12:00:00"),
  );

  dailyForecast.slice(0, 5).forEach((day) => {
    const date = new Date(day.dt_txt);

    // Converting date to weekday name
    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

    const icon = day.weather[0].icon;
    const temp = Math.round(day.main.temp);

    // Creating a new forecast card element
    const card = document.createElement("div");

    card.classList.add("forecast-card");
    // Inserting forecast content
    card.innerHTML = `
<p>${dayName}</p>
<img src="https://openweathermap.org/img/wn/${icon}.png">
<p>${temp}°C</p>
`;

    // Add card to the forecast container
    forecastContainer.appendChild(card);
  });
}
// RELOADING WEATHER DATA
refreshBtn.addEventListener("click", () => {
  loadWeather();
  loadForecast();
});
// Navigation to the city page
viewCity.addEventListener("click", () => {
  window.location.href = "city.html";
});

//Auto load when opening page
loadWeather();
loadForecast();
