document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'f0b40fe594db2b5b83471f45c7301b23'; // Your OpenWeatherMap API key
    const getWeatherBtn = document.getElementById('get-weather-btn');
    const cityInput = document.getElementById('city-input');
    const weatherResult = document.getElementById('weather-result');
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const wind = document.getElementById('wind');

    getWeatherBtn.addEventListener('click', function() {
        const city = cityInput.value.trim();
        if (city !== '') {
            getWeather(city);
        }
    });

    function getWeather(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    cityName.textContent = data.name;
                    temperature.textContent = `${data.main.temp}°C`;
                    description.textContent = data.weather[0].description;
                    humidity.textContent = `Humidity: ${data.main.humidity}%`;
                    wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
                    weatherResult.style.display = 'block';
                } else {
                    alert('City not found!');
                    weatherResult.style.display = 'none';
                }
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                alert('Failed to retrieve weather data.');
            });
    }
});

