document.addEventListener("DOMContentLoaded", () => {
    const weatherElement = document.getElementById("weather-info");
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const apiKey = "d93388d5ce3265be1f3abb95fe1ec18e"; // Replace with your API key
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
            
            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    const city = data.name;
                    const temperature = data.main.temp;
                    const description = data.weather[0].description;
                    weatherElement.innerHTML = `Weather in ${city}: ${description}, Temperature: ${temperature}°C`;
                })
                .catch((error) => {
                    weatherElement.textContent = "Failed to fetch weather data";
                    console.error("Error fetching data:", error);
                });
        });
    } else {
        weatherElement.textContent = "Geolocation is not supported by your browser.";
    }
});
