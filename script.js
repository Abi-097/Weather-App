const apiKey = "925ddf77580b017414b293da38215ce3";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);

  if(response.status === 404) {
    document.querySelector(".city").innerHTML = "---";
    document.querySelector(".temp").innerHTML = "---" + "°C";
    document.querySelector(".humidity").innerHTML = "---" + "%";
    document.querySelector(".wind").innerHTML = "---" + " km/h";
    document.querySelector(".error").style.display = "block";
    document.querySelector(".search input").innerHTML = "";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data?.main?.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main === "Rain") {
      weatherIcon.src = ("images/rain.png") 
    } else if (data.weather[0].main === "Clouds") {
      weatherIcon.src = ("images/clouds.png") 
     } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = ("images/clear.png") 
      } else if (data.weather[0].main === "Mist") {
          weatherIcon.src = ("images/mist.png") 
         }   else {
            weatherIcon.src = ("images/drizzle.png") }

            document.querySelector(".error").style.display = "none";
            searchBox.value = "";
  }
}



searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value); // calling the function
})


//units=metric <-- we have added this to change the report to standard to °C
