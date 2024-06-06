const apiKey = '98f6be3b7749396cbdb126d6e11286d4';
const lat = '10.67';
const lon = '122.95';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

const cards = document.querySelector('#weather');

async function getWeatherData() {
    try {
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();
        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();

        displayWeather(weatherData, forecastData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(weatherData, forecastData) {

    let card = document.createElement('div');
    
    let day = document.createElement('span');
    let icon = document.createElement('img');
    let weather = document.createElement('span');


    const currentTemp = weatherData.main.temp;
    const currentWeatherIcon = weatherData.weather[0].icon;
    const currentWeatherDescription = weatherData.weather[0].description;

    card.setAttribute('class', 'weather-cards');

    day.textContent = `Today: ${currentTemp}°F`;
    
    icon.setAttribute('src', `http://openweathermap.org/img/wn/${currentWeatherIcon}.png`);
    icon.setAttribute('alt', `${currentWeatherDescription}`);

    weather.textContent = `${currentWeatherDescription}`;

    card.appendChild(day);
    card.appendChild(icon);
    card.appendChild(weather);

    cards.appendChild(card);


    for (let i = 9; i < 32; i += 8) {
        const forecast = forecastData.list[i];
        const date = new Date(forecast.dt * 1000);
        const options = { weekday: 'long' };
        const dayOfWeek = date.toLocaleDateString('en-US', options);


        let forecastCard = document.createElement('div');
    
        let forecastDay = document.createElement('span');
        let forecastIcon = document.createElement('img');
        let forecastWeather = document.createElement('span');

        const forecastTemp = forecast.main.temp;
        const forecastWeatherIcon = forecast.weather[0].icon;
        const forecastWeatherDescription = forecast.weather[0].description;

        forecastCard.setAttribute('class', 'weather-cards');

        forecastDay.textContent = `${dayOfWeek}: ${forecastTemp}°F`;
        
        forecastIcon.setAttribute('src', `http://openweathermap.org/img/wn/${forecastWeatherIcon}.png`);
        forecastIcon.setAttribute('alt', `${forecastWeatherDescription}`);

        forecastWeather.textContent = `${forecastWeatherDescription}`;

        forecastCard.appendChild(forecastDay);
        forecastCard.appendChild(forecastIcon);
        forecastCard.appendChild(forecastWeather);

        cards.appendChild(forecastCard);

    }
}

getWeatherData();