const WeatherBody = document.querySelector('.Weather-body')
const input = document.querySelector('.search-input')
const searchBtn = document.querySelector('.search-btn')
const WeatherImg = document.querySelector('.image')
const temperature = document.querySelector('.temperature')
const WeatherType = document.querySelector('.Weather-type')
const humidity = document.querySelector('#humidity')
const windSpeed = document.querySelector('#wind-speed')
const notFound = document.querySelector('.location-not-found')


getWeather = async (location) => {
    const myKey = 'a9365352179755008193d5293a168380'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${myKey}`
    const response = await fetch(url)
    const weather_data = await response.json()

    if (weather_data.cod === '404') {
        notFound.style.display = 'flex'
        WeatherBody.style.display = 'none'
        return;
    }
    notFound.style.display = 'none'
    WeatherBody.style.display = 'flex'
    temperature.innerHTML = `${Math.round((weather_data.main.temp) - 273.15)}<sup>ºC</sup>`
    WeatherType.innerText = `${weather_data.weather[0].description}`
    humidity.innerText = `${weather_data.main.humidity}%`
    windSpeed.innerText = `${weather_data.wind.speed}Km/H`
    console.log(weather_data)

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            WeatherImg.src = './images/cloud.png'
            break
        case 'Clear':
            WeatherImg.src = './images/clear.png'
            break
        case 'Rain':
            WeatherImg.src = './images/Rain.png'
            break
        case 'Mist':
            WeatherImg.src = './images/mist.png'
            break
        case 'Show':
            WeatherImg.src = './images/Snow.png'
            break
        default:
            WeatherImg.src = './images/cloud.png'

    }
}



searchBtn.addEventListener('click', () => {
    getWeather(input.value.trim())
})




















