import { fetchTemp } from "./services/weatherService.js";

async function displayTemp() {
    
    try {
        // Bearbetar API-info
        const data = await fetchTemp();
        const temp = data.current_weather.temperature;

        // Visas i DOM:
        // Skapa ett enda <p>-element med ren text
        const p = document.createElement('p');
        p.textContent = `Temperatur: ${temp}°C`;

        // Lägg till i body (utan att rensa)
        document.body.appendChild(p);

    } catch (error) {
        // Felmeddelande i DOM:
        const p = document.createElement('p');
        p.style.color = 'red';
        p.textContent = `Fel: ${error.message}`;
        
        document.body.appendChild(p);
    }
}

displayTemp();