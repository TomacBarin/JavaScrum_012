import { getWeather } from "./services/weatherService.js";

async function showWeather() {

    try {
        const data = await getWeather(56.05, 12.70);
        console.log(data);
        const temperature = data.current_weather.temperature;

        document.body.innerHTML = `<p>Temperaturen i Helsingborg är: <strong>${temperature}°C</strong></p>`;
    }    catch (error) {
        document.body.innerHTML = `<p style="color: red;">Fel: ${error.message}</p>`;
    }
}

showWeather()