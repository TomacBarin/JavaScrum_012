export async function fetchTemp() {
  // Hämta info
  const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=56.05&longitude=12.70&current_weather=true");

  if (!response.ok) {
    throw new Error("Systemfel!"); // Felhanterar
  }
  return await response.json(); // Gör info till json
}

