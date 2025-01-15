const apiKey = "fd51c00c6d4faa068f4c21a163773b6c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bengalore";

async function checkWeather() {
    const response = await fetch (apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
}