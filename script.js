const apiKey = "518f551082ca4d2a91d54558250210";
const apiUrl = "https://api.weatherapi.com/v1/current.json?aqi=no";
const humidityElement = document.querySelector(".js-humidity");
const windElement = document.querySelector(".js-wind");
const tempElement = document.querySelector(".js-temp");
const conditionElement = document.querySelector(".js-condition");
const searchInput = document.querySelector(".js-search-input");


async function checkWeather(city) {
  try {
    const response = await fetch(`${apiUrl}&key=${apiKey}&q=${city}`);
    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();
    console.log(data);

    humidityElement.innerHTML = data.current.humidity + "%";
    windElement.innerHTML = data.current.wind_kph + " km/h";
    tempElement.innerHTML = data.current.temp_c + "°C";
    conditionElement.innerHTML = data.current.condition.text;
  } catch (error) {
    alert("Error fetching weather: " + error.message);
  }
}


document.querySelector(".js-search-button").addEventListener("click", function () {
  if (searchInput.value.trim() !== "") {
    checkWeather(searchInput.value);
  }
});


searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter" && searchInput.value.trim() !== "") {
    checkWeather(searchInput.value);
  }
});
