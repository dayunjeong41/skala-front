import { getWeather } from "./weatherAPI.js";

const citySelect = document.getElementById("city-select");
const weatherBox = document.getElementById("weather-box");

if (citySelect && weatherBox) {
    citySelect.addEventListener("change", renderWeather);
    renderWeather();
}

async function renderWeather() {
    const selectedOption = citySelect.options[citySelect.selectedIndex];

    weatherBox.innerHTML = selectedOption.textContent + " weather loading... ⏳";

    try {
        const weather = await getWeather(citySelect.value);
        const icon = getWeatherIcon(weather.weatherCode);
        weatherBox.innerHTML = ""
            + "<div class=\"weather-current\"><span>" + icon + "</span><strong>" + weather.temperature + "°C</strong></div>"
            + "<p><strong>Humidity</strong><span>" + weather.humidity + "%</span></p>"
            + "<p><strong>Feels like</strong><span>" + weather.apparentTemperature + "°C</span></p>";
    } catch (error) {
        weatherBox.innerHTML = "Weather information is unavailable.";
    }
}

function getWeatherIcon(code) {
    if ([0, 1].includes(code)) {
        return "☀️";
    }

    if ([2, 3, 45, 48].includes(code)) {
        return "☁️";
    }

    if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) {
        return "🌧️";
    }

    if (code >= 95) {
        return "⛈️";
    }

    return "🌤️";
}
