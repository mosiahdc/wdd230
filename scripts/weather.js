const weatherInfo = document.getElementById("weather");

const currentTemp = document.createElement("p");
const weatherIcon = document.createElement("img");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=10.75&lon=-123.09&units=imperial&appid=98f6be3b7749396cbdb126d6e11286d4";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${(data.main.temp).toFixed(0)}&deg;F - ${data.weather[0].description}`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let desc = (data.weather[0].description).toUpperCase();
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    weatherIcon.setAttribute("width", 50);
    weatherIcon.setAttribute("height", 50);
    
    weatherInfo.appendChild(weatherIcon);
    weatherInfo.appendChild(currentTemp);
}

apiFetch();