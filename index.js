// Select Elements using dom
const notificationElement = document.querySelector('.notification');
const weatherIcon = document.querySelector('.weather-icon');
const temparatureValue = document.querySelector('.temparature-value p');
const temperatureDescription = document.querySelector('.temperature-description p');
const locationElement = document.querySelector('.location p');
const cityElement=document.querySelector('.weather-by-city');
cityElement.addEventListener('click',function(){
    
});




// Store data of weather in a object
const weather={};
weather.temperature={
    unit:"celsius"
}





// varialbles and key
const Kelvin = 273;
const KEY = "2e78502c314f1e0ed209ceba278eaf26";





// Check browser supports geolocation or not
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
}
else {
    alert("Geolocation is not supported by the browser");
}




//set users location
function showPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}







//  GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude) {
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY}`;
    console.log(api);

    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {
            weather.temperature.value = Math.floor(data.main.temp-Kelvin);
            weather.temperature.unit="celsius";
            weather.iconId=data.weather[0].icon;
            weather.description=data.weather[0].description;
            weather.city=data.name;
            weather.country=data.sys.country;
        })
        .then(function () {
            displayWeather()
        }).catch(function () {
            console.log("error");
        });

}
function displayWeather() {
    weatherIcon.innerHTML = `<img src="./icons/${weather.iconId}.png"/>`;
    temparatureValue.innerHTML = `${weather.temperature.value}&#176 <span>C</span>`;
    temperatureDescription.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city},${weather.country}`
}





// API
// const weather={
//     temperature:{
//         value:18,
//         unit:'celsius'
//     },
//     description:"Cloudy",
//     iconId:'01n',
//     city:'Dausa',
//     country:'India'
// };

// display Weather

// displayWeather();
// celcius to kelvin
function celciusToFarenheit(temperature) {
    return (temperature * 9) / 5 + 32;
}
// get location of the user


// Click Handler
temparatureValue.addEventListener('click', function () {
    if (weather.temperature.value === undefined) return;
    if (weather.temperature.unit === "celsius") {
        console.log("In if");
        let far = celciusToFarenheit(weather.temperature.value);
        far = Math.floor(far);

        temparatureValue.innerHTML = `${far}&#176 <span>F</span>`;
        weather.temperature.unit = "farenheit";
    }
    else {
        temparatureValue.innerHTML = `${weather.temperature.value}&#176 <span>C</span>`;
        weather.temperature.unit = "celsius";

    }
});