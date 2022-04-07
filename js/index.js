const weatherAPI = 'd1e3fb9a9b29da6545d7227ec9c26696';
const searchInput = document.querySelector('.search-city');
const DEFAULT_VALUE = '--';

const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state')
const weatherImg = document.querySelector('.weather-img')
const temperature = document.querySelector('.temperature')
const sunRise = document.querySelector('.sunrise')
const sunSet = document.querySelector('.sunset')
const humiditi = document.querySelector('.humidity')
const windSpeed = document.querySelector('.wind-speed');


searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${weatherAPI}&units=metric&lang=vi`)
        .then(response =>{
            return response.json();
        })
        .then(function(posts){
            cityName.innerHTML = posts.name || DEFAULT_VALUE;
            weatherState.innerHTML = posts.weather[0].description || DEFAULT_VALUE;
            weatherImg.setAttribute('src',`http://openweathermap.org/img/wn/${posts.weather[0].icon}@2x.png`);
            temperature.innerHTML = Math.round(posts.main.temp) || DEFAULT_VALUE;
            sunRise.innerHTML = moment.unix(posts.sys.sunrise).format('H:mm') || DEFAULT_VALUE;
            sunSet.innerHTML = moment.unix(posts.sys.sunset).format('H:mm') || DEFAULT_VALUE;
            humiditi.innerHTML = posts.main.humidity || DEFAULT_VALUE;
            windSpeed.innerHTML = (posts.wind.speed * 3.6).toFixed(2) || DEFAULT_VALUE;
        });
    
});