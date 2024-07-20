const API ='https://api.weatherapi.com'
const apiKey = 'f1852f83f4b74cf1b0b132754241007'
const mainContainer = document.querySelector('.container')
const forecastContainer = document.querySelector('.forecastContainer')

const fetchWeather = async () => {

    const getData = await fetch(`${API}/v1/forecast.json?key=${apiKey}&q=Warsaw&aqi=no`)
    const data = await getData.json()


    const dayWeather = {
        city: data.location.name,
        country: data.location.country,
        weather: data.current.condition.text,
        picture: data.current.condition.icon,
        temperature: data.current.temp_c,
        humidity: data.current.humidity,
        wind: data.current.wind_kph,
        precipitation: data.current.precip_mm,
        forecast: data.forecast.forecastday[0].hour
    }
    showWeather(dayWeather)
}

const showWeather = (weatherFeatures) => {
    const { city, country, weather, picture, temperature, humidity, wind, precipitation, forecast } = weatherFeatures
    console.log(forecast);

    let elements = ''

    const container = `
        <div class="place">
            <div><span class="city">${city} / <span class="country">${country}</span></span></div>
        
            <div><span class="weather"><p>${weather}<p/></span></div>
        </div>
        <div class = "temp-and-cond-info">
            <div class="picture">
                <img src="${picture}" alt="${city}-forecast">
                <div class="temperature">${temperature}
                    <img src="./src/assets/celsius.png" alt="thermometer" />
                </div>
            </div>
            <div class="weather-conditions"> 
                <p>Precipitation: <span class="precipitation">${precipitation}%</span> </p>
                <p>Humidity: <span class="humidity">${humidity}%</span></p>
                <p>Wind: <span class="wind">${wind} Km/h</span></p>
            </div>
        </div>
        `

    mainContainer.insertAdjacentHTML('afterbegin',container)
    
    forecast.forEach(fore => {
        const time = fore.time.split(' ')[1];
        
        elements += `
            
            <div>
                <div class="foreHour">${time}</div>
                <div class="image">
                    <img  class="image-weather" src="${fore.condition.icon}" alt="${city}-forecast"> 
                </div>
                <div class="degrees"><p>${fore.temp_c}°C</p></div>
            </div> 
            
            `
    });
    forecastContainer.innerHTML = elements
}

fetchWeather()





const hour = document.getElementById('hour');
const date = document.getElementById('date');

const getHour = () => {
    let currentDate = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second : '2-digit',
        hour12: false
    };
    const dateEnglishBritain = currentDate.toLocaleDateString('en-GB');
    
    date.innerHTML = dateEnglishBritain;
    
    return currentDate.toLocaleTimeString('en-GB',options);

}

const updateTime = () => {
    const currentTime = new Date ();
    const update = getHour();
    hour.innerHTML = update

}

getHour();
setInterval(updateTime,1000);

