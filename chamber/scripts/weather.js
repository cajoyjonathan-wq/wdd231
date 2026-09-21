const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector('figcaption');
const span1 = document.querySelector("#day1");
const span2 = document.querySelector("#day2");
const span3 = document.querySelector("#day3");

const spanElements = [span1, span2, span3];

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=7.83&lon=123.43&appid=3e9d1129d3b2887417897242f4e59d37&units=imperial';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=7.83&lon=123.43&appid=3e9d1129d3b2887417897242f4e59d37&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function forecast() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            
            const threeDataList = [data.list[8], data.list[16], data.list[24]];
            displayForecast(threeDataList);
        } else {
            throw Error(response.text());
        }
    } catch (error) {
        console.log("Errorr loading forecast:", error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;    
}

function displayForecast(threeDataList) {
    const span1 = document.querySelector("#day1");
    const span2 = document.querySelector("#day2");
    const span3 = document.querySelector("#day3");

    const spanElements = [span1, span2, span3];

    threeDataList.forEach((day, index) => {
        const temp = `${day.main.temp}&deg;F`;
        const desc = day.weather[0].description.replace(/\b\w/g, char => char.toUpperCase());
        const date = new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short' });

        if (spanElements[index]) {
            spanElements[index].innerHTML = `Day: ${date}, ${temp}, ${desc}.`;
        }
    });
}

forecast();
apiFetch();