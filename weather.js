
const searchInput = document.querySelector(`#searsh`)
const searchBtn = document.querySelector(`#find`)


const firstDay = document.querySelector(`.Day1`)
const firstMonth = document.querySelector(`.month`)
const cityName = document.querySelector(`.first-content h2`)
const currentDegree = document.querySelector(`.Degree1 .num1`)
const WeatherImg1 = document.querySelector(`.weather-imge img`)
const WeatherText = document.querySelector(`.first-content span`)


const secondDay = document.querySelector(`.Day2`)
const WeatherImg2 = document.querySelector(`.Degree2 img`)
const secondDayMaxD = document.querySelector(`.Degree2 .num2`)
const secondDayMinD = document.querySelector(`.Degree2 small`)
const secondDaytext = document.querySelector(`.second-content span`)



const thirdDay = document.querySelector(`.Day3`)
const WeatherImg3 = document.querySelector(`.Degree3 img`)
const thirdDayMaxD = document.querySelector(`.Degree3 .num3`)
const thirdDayMinD = document.querySelector(`.Degree3 small`)
const thirdDaytext = document.querySelector(`.third-content span`)





const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January',  'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


searchInput.addEventListener("input", (e) => {
    getDate(e.target.value);
});

const getDate = async (value = 'egypt') => {
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c6a549e1de0a4fee8fe191912230609&q=${value}&days=7`);
        // const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=851232df8e1d4fffa2e203626241301&q=${value}&days=3`);
        const data = await response.json();
        displyDayOne (data)
        displyDayTwo (data)
        displyDayThree (data)
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

getDate();




function displyDayOne (data){
    const firstDate = new Date(data?.forecast.forecastday[0].date);
    const firstDayIndex = firstDate.getDay();
    const firstMonthIndex = firstDate.getMonth();
    const firstDayNmae = days[firstDayIndex];
    const MonthName = months[firstMonthIndex];
    firstDay.innerHTML =    firstDayNmae
    firstMonth.innerHTML =  `${firstDayIndex + 1}` + ` ` + `${MonthName}`
    cityName.innerHTML =   data.location.name
    currentDegree.innerHTML = data.current.temp_c + `<sup>o</sup>C  `
    WeatherImg1.setAttribute('src', `https:${data.current.condition.icon}`);
    WeatherText.innerHTML = data.current.condition.text
}



function displyDayTwo (data){
    const secondDate = new Date(data?.forecast.forecastday[1].date)
    secondDayIndex = secondDate.getDay()
    secondDayName = days[secondDayIndex]
    secondDay.innerHTML = secondDayName
    WeatherImg2.setAttribute('src' , `https:${data.forecast.forecastday[1].day.condition.icon}` )
    secondDayMaxD.innerHTML = data.forecast.forecastday[1].day.maxtemp_c + ` ` + `<sup>o</sup>C  `
    secondDayMinD.innerHTML = data.forecast.forecastday[1].day.mintemp_c + ` ` + `<sup>o</sup>  `
    secondDaytext.innerHTML = data.forecast.forecastday[1].day.condition.text
}





function displyDayThree (data){
    const thirdDate = new Date(data?.forecast.forecastday[2].date)
    thirdDayIndex = thirdDate.getDay()
    thirdDayName = days[thirdDayIndex]
    thirdDay.innerHTML = thirdDayName
    WeatherImg2.setAttribute('src' , `https:${data.forecast.forecastday[2].day.condition.icon}` )
    thirdDayMaxD.innerHTML = data.forecast.forecastday[2].day.maxtemp_c + ` ` + `<sup>o</sup>C  `
    thirdDayMinD.innerHTML = data.forecast.forecastday[2].day.mintemp_c + ` ` + `<sup>o</sup>  `
    thirdDaytext.innerHTML = data.forecast.forecastday[2].day.condition.text
}