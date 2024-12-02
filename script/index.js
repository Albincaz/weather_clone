function formatTime(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }

  function formatDay(date){
    const dayArray = date.getDay()
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Saturday"
    ]
    const day = days[dayArray]
    return day;
  }

const currentTime = document.getElementById("current-time");
let newCurrentTime = new Date();
currentTime.innerHTML = formatTime(newCurrentTime);

const currentDate = document.getElementById("current-day");
let newCurrentDate = new Date();
currentDate.innerHTML = formatDay(newCurrentDate)

async function checkWeather(){
  const apiKey = "f0a2b29a2ae9df134589592a923ec879"
  const apiCity = document.getElementById("search-input").value
  const weather_icon = document.getElementById("weatherIcon");

  try {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${apiCity}&appid=${apiKey}`)
    console.log("response :", response);
    let parsed_response = await response.json();
    console.log(parsed_response)
    let weather_details = parsed_response.main
    console.log("weather_details :", weather_details);
    let humidity = weather_details.humidity
    document.getElementById("humidity").innerHTML = humidity
    let wind_details = parsed_response.wind
    let wind = wind_details.speed
    document.getElementById("wind").innerHTML = wind
    let weather_type = parsed_response.weather
    let mood = weather_type[0].main
    // document.getElementById("weather-type").innerHTML = mood
    let temperature_details = weather_details.temp
    let temp = Math.round(temperature_details-273.15) + "°c"
    // console.log("temperature :",temp);
    document.getElementById("current-temperature-c").innerHTML = temp
    document.getElementById("current-temperature-f").innerHTML = temperature_details + " K"
    if (mood == "Clouds"){
      weather_icon.src = "../images/clouds.png";
    }else if(mood == "Clouds"){
      weather_icon.src = "../images/clouds.png";
    }
  else if(mood == "Clear"){
    weather_icon.src = "../images/clear.png";
  }
else if(mood == "Rain"){
  weather_icon.src = "../images/rain.png";
}
else if(mood == "Drizzle"){
  weather_icon.src = "../images/drizzle.png";
}
    
    
    
  } catch (error) {
    console.log("error", error);
    
  }
}