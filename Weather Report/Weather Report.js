const weatherInfo = document.getElementById("weatherInfo");
document.getElementById("weatherForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const city = document.getElementById("city").value;
  const units = document.getElementById("units").value;
  fetch(
    "https://api.openweathermap.org/data/2.5/weather" +
      (city
        ? `?q=${city}`
        : `?lat=${parseFloat(document.getElementById("latitude").value)}` +
          `&lon=${parseFloat(document.getElementById("longitude").value)}`) +
      `&units=${units}` +
      `&appid=${document.getElementById("apiKey").value}`,
  )
    .then((response) => response.json())
    .then((data) => {
      let unit;
      switch (units) {
        case "standard":
          unit = "K";
          break;
        case "metric":
          unit = "℃";
          break;
        case "imperial":
          unit = "℉";
          break;
        default:
          console.error(
            "Unexpected units system provided:",
            units,
            "Valid choices are: `standard`, `metric`, `imperial`.",
          );
          unit = "°";
      }
      weatherInfo.innerHTML =
        `<h2>Weather in ${data.name}</h2>` +
        `<p>Temperature: ${data.main.temp}${unit}</p>` +
        `<p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch((error) => {
      console.error("Unexpected error while fetching weather data:", error);
      weatherInfo.innerHTML =
        "<p>Failed to fetch weather data. Please try again!</p>";
    });
});
