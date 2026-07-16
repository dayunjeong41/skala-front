export async function getWeather(city) {
    const cities = {
        seoul: { name: "서울", latitude: 37.5665, longitude: 126.9780 },
        busan: { name: "부산", latitude: 35.1796, longitude: 129.0756 },
        jeju: { name: "제주", latitude: 33.4996, longitude: 126.5312 }
    };
    const selectedCity = cities[city] || cities.seoul;
    const url = "https://api.open-meteo.com/v1/forecast?latitude="
        + selectedCity.latitude
        + "&longitude="
        + selectedCity.longitude
        + "&current=temperature_2m,relative_humidity_2m";
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("날씨 데이터를 불러오지 못했습니다.");
    }

    const data = await response.json();

    return {
        name: selectedCity.name,
        latitude: selectedCity.latitude,
        longitude: selectedCity.longitude,
        temperature: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m
    };
}
