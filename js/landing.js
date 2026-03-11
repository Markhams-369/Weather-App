// Get references
const searchBtn = document.getElementById("searchBtn")
const cityInput = document.getElementById("cityInput")

// add an EventListener for function
searchBtn.addEventListener("click", () => {
      
    // Read the input info
    const city = cityInput.value;

    if (city !== "") {
        
        //save the city name
        localStorage.setItem("city", city);

        window.location.href = "dashboard.html";
        
    }
});