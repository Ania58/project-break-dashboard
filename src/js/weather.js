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
                    <img src="../assets/celsius.png" alt="thermometer" />
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



const pics3 = [
    "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1536649986370-e623f6c7c1e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1592035659284-3b39971c1107?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvc21vc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1536649986370-e623f6c7c1e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720163275578-06b7e2bfc4e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720519610178-141f9777e9de?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1464802686167-b939a6910659?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvc21vc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1720508809884-a970ac71aaca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720491591781-93404ad84f43?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1667912186734-67897f1db55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1516571748831-5d81767b788d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1696975228576-f528d748f5a6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720446983011-676d6db92a03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1614926037384-4159c33e196b?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720312550294-db7104f96a6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720210613441-7c5e33beaa01?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1719370281932-299f40a5d8ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ]; 
        const pic3 = document.querySelector('body'); 
  
        function showImage() { 
            const a3 = Math.floor(Math.random() * pics3.length); 
            const img3 = pics3[a3]; 
            document.body.style.backgroundImage = `url(${img3})`; 
        } 
  
        setInterval(showImage, 15000); 