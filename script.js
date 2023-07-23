const apiKey = "925ddf77580b017414b293da38215ce3";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data?.main?.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value); // calling the function
})

//units=metric <-- we have added this to change the report to standard to °C
// checkWeather()


//Cannot read properties of null (reading 'addEventListener')


// need to check the error?