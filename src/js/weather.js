const API ='https://api.weatherapi.com'
const apiKey = 'f1852f83f4b74cf1b0b132754241007'
const mainContainer = document.querySelector('.container')
const forecastContainer = document.querySelector('.forecastContainer')
// const city = document.querySelector('.city')
// const country = document.querySelector('.country')
// const weather = document.querySelector('.weather')
// const precipitation = document.querySelector('.precipitation')
// const humidity = document.querySelector('.humidity')
// const wind = document.querySelector('.wind')
// const picture = document.querySelector('.picture')
// const temperature = document.querySelector('.temperature')
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
        <div>City: <span class="city">${city}</span></div>
        <div>Country: <span class="country">${country}</span></div>
        <div>Weather: <span class="weather"></span>${weather}</div>
        <div class="picture" style="width: 40px;height: 40px;">
             <img style="width: 100%;height: 100%;"  src="${picture}" alt="${city}-forecast">
             <div class="temperature">${temperature}</div>
        </div>
        <div>
            <p>Precitation: <span class="precipitation">${precipitation}</span> </p>
            <p>Humidity: <span class="humidity">${humidity}</span></p>
            <p>Wind: <span class="wind">${wind}</span></p>
        </div>
        `

    mainContainer.insertAdjacentHTML('afterbegin',container)
    
    forecast.forEach(fore => {
        
        elements += `
            
            <div>
                <div class="foreHour">${fore.time}</div>
                <div style="width: 40px;height: 40px; class="image">
                <img  class="image" src="${fore.condition.icon}" alt="${city}-forecast"> 
                </div>
                <div class="degrees">${fore.temp_c}</div>
            </div> 
            
            `
    });
    forecastContainer.innerHTML = elements
}

fetchWeather()