// const API_KEy = "17293aa8800aaf3cfcb225bb8f8f3e51";

// async function getWeather() {
//   const cityName = document.getElementById("cityName").ariaValueMax.trim();

//   const { Lattitude, Longitude } = await getGeoLocation(cityName);

//   console.log(Lattitude, Longitude);

//   const WEATHER_API =
//     "https://api.openweathermap.org/data/2.5/weather?lat={Lattitude}&lon={Longitude}&appid={API_KEY}";

//   const response = await fetch(WEATHER_API);
//   const data = await response.json();

//   console.log(data);

//   const temperature = data.main.temp - 273.15;

//   document.getElementById("Temperature").innerText = temperature.toFixed(2);
// }

// async function getGeoLocation(city) {
//   const GEO_LOC_API = "http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}";

//   const response = await fetch(GEO_LOC_API);
//   const data = await response.json();

//   console.log(data);

//   const Lattitude = data[0].lat;
//   const Longitude = data[0].lon;

//   return { Lattitude, Longitude };
// }

const API_KEY = "17293aa8800aaf3cfcb225bb8f8f3e51";

async function getWeather() {
  const cityName = document.getElementById("cityName").value.trim();

  // Empty input check
  if (cityName === "") {
    alert("Please enter a city name");
    return;
  }

  const { latitude, longitude } = await getGeoLocation(cityName);

  console.log(Latitude, Longitude);

  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat={Lattitude}&lon={Longitude}&appid={API_KEY}`;

  const response = await fetch(WEATHER_API);
  const data = await response.json();

  console.log(data);

  const temperature = data.main.temp - 273.15;

  document.getElementById("Temperature").innerText = temperature.toFixed(2);
}

async function getGeoLocation(city) {
  const GEO_LOC_API = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const response = await fetch(GEO_LOC_API);
  const data = await response.json();

  console.log(data);

  const latitude = data[0].lat;
  const longitude = data[0].lon;

  return { latitude, longitude };
}
