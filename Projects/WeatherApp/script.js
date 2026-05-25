// const API_KEY = "17293aa8800aaf3cfcb225bb8f8f3e51";

// async function getWeather() {
//   const cityName = document.getElementById("cityName").value.trim();

//   if (cityName === "") {
//     alert("Please enter city name");
//     return;
//   }

//   const { latitude, longitude } = await getGeoLocation(cityName);

//   console.log(latitude, longitude);

//   const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

//   const response = await fetch(WEATHER_API);
//   const data = await response.json();

//   console.log(data);

//   const temperature = data.main.temp - 273.15;

//   document.getElementById("Temperature").innerText = temperature.toFixed(2);
// }

// async function getGeoLocation(city) {
//   const GEO_LOC_API = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

//   const response = await fetch(GEO_LOC_API);
//   const data = await response.json();

//   console.log(data);

//   const latitude = data[0].lat;
//   const longitude = data[0].lon;

//   return { latitude, longitude };
// }

const API_KEY = "17293aa8800aaf3cfcb225bb8f8f3e51";

async function getWeather() {
  const cityName = document.getElementById("cityName").value.trim();

  if (cityName === "") {
    alert("Please enter city name");
    return;
  }

  try {
    const { latitude, longitude } = await getGeoLocation(cityName);

    const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

    const response = await fetch(WEATHER_API);
    const data = await response.json();

    console.log(data);

    displayWeather(data);
  } catch (error) {
    alert("City not found");
    console.log(error);
  }
}

async function getGeoLocation(city) {
  const GEO_LOC_API = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const response = await fetch(GEO_LOC_API);
  const data = await response.json();

  const latitude = data[0].lat;
  const longitude = data[0].lon;

  return { latitude, longitude };
}

function displayWeather(data) {
  document.getElementById("weatherResult").classList.remove("d-none");

  // Temperature
  const temperature = (data.main.temp - 273.15).toFixed(2);
  const feelsLike = (data.main.feels_like - 273.15).toFixed(2);

  // Weather Icon
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  // Main Details
  document.getElementById("city").innerText = data.name;
  document.getElementById("country").innerText = data.sys.country;

  document.getElementById("Temperature").innerText = temperature;

  document.getElementById("description").innerText =
    data.weather[0].description;

  document.getElementById("weatherIcon").src = iconUrl;

  // Extra Details
  document.getElementById("humidity").innerText = data.main.humidity + "%";

  document.getElementById("wind").innerText = data.wind.speed + " m/s";

  document.getElementById("clouds").innerText = data.clouds.all + "%";

  document.getElementById("visibility").innerText =
    data.visibility / 1000 + " km";

  document.getElementById("feelsLike").innerText = feelsLike + "°C";

  document.getElementById("pressure").innerText = data.main.pressure + " hPa";
}

// Enter key support
document
  .getElementById("cityName")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      getWeather();
    }
  });
