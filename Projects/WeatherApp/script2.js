const API_KEY = "17293aa8800aaf3cfcb225bb8f8f3e51";

async function getWeather() {
  const cityName = document.getElementById("cityName").value.trim();

  if (!cityName) return;

  const { Latitude, Longitude } = await getGeoLocation(cityName);

  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${Latitude}&lon=${Longitude}&appid=${API_KEY}`;

  const response = await fetch(WEATHER_API);
  const data = await response.json();

  console.log(data);

  updateUI(data);
}

async function getGeoLocation(city) {
  const GEO_LOC_API = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const response = await fetch(GEO_LOC_API);
  const data = await response.json();

  return {
    Latitude: data[0].lat,
    Longitude: data[0].lon,
  };
}

function updateUI(data) {
  const temp = (data.main.temp - 273.15).toFixed(1);
  const feels = (data.main.feels_like - 273.15).toFixed(1);

  document.getElementById("Temperature").innerText = temp;

  document.getElementById("weatherMain").innerText =
    data.weather[0].description;

  document.getElementById("city").innerText = data.name;

  document.getElementById("humidity").innerText = data.main.humidity + "%";

  document.getElementById("wind").innerText = data.wind.speed + " km/h";

  document.getElementById("pressure").innerText = data.main.pressure + " hPa";

  document.getElementById("feelsLike").innerText = feels + "°C";

  document.getElementById("visibility").innerText =
    data.visibility / 1000 + " KM";

  document.getElementById("clouds").innerText = data.clouds.all + "%";

  document.getElementById("rain").innerText = (data.rain?.["1h"] || 0) + " mm";

  document.getElementById("country").innerText = data.sys.country;

  const icon = data.weather[0].icon;

  document.getElementById("weatherIcon").src =
    `https://openweathermap.org/img/wn/${icon}@2x.png`;

  // Sunrise
  const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();

  // Sunset
  const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();

  document.getElementById("sunrise").innerText = sunriseTime;

  document.getElementById("sunset").innerText = sunsetTime;

  // Date
  document.getElementById("dateTime").innerText = new Date().toLocaleString();
}
