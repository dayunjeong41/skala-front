import { getWeather } from "./weatherAPI.js";

const citySelect = document.getElementById("city-select");
const weatherBox = document.getElementById("weather-box");

if (citySelect && weatherBox) {
    citySelect.addEventListener("change", renderWeather);
    renderWeather();
}

async function renderWeather() {
    const selectedOption = citySelect.options[citySelect.selectedIndex];

    weatherBox.innerHTML = selectedOption.textContent + " 날씨 정보를 불러오는 중... ⏳";

    try {
        const weather = await getWeather(citySelect.value);
        weatherBox.innerHTML = ""
            + "<p><strong>도시:</strong> " + weather.name + "</p>"
            + "<p><strong>위도:</strong> " + weather.latitude + "</p>"
            + "<p><strong>경도:</strong> " + weather.longitude + "</p>"
            + "<p><strong>온도:</strong> " + weather.temperature + "°C</p>"
            + "<p><strong>습도:</strong> " + weather.humidity + "%</p>";
    } catch (error) {
        weatherBox.innerHTML = "날씨 정보를 불러오지 못했습니다.";
    }
}
