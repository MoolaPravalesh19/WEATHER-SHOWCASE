let apikey = "25192e0633560fc6f714d9c839c61aca";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let text = document.querySelector("#text");
let button = document.querySelector(".btn");
let nature = document.querySelector("#image");

console.log(text.value)
async function checkweather(city) {

    const Response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if (Response.status == '404') {
        alert("Invalid City");
        document.querySelector(".icon").style.display = "none";
    }
    else {
        var data = await Response.json();
        console.log(data);
        document.querySelector("#area").innerHTML = data.name;
        document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".percentage").innerHTML = data.main.humidity + "%";
        document.querySelector(".speed").innerHTML = data.wind.speed + "Km/h";
        if (data.weather[0].main == 'Clouds') {
            nature.src = "clouds.png";
        }
        else if (data.weather[0].main == 'Clear') {
            nature.src = "clear.png";
        }
        else if (data.weather[0].main == 'Rain') {
            nature.src = "rain.png";
        }
        else if (data.weather[0].main == 'Drizzle') {
            nature.src = "drizzle.png";
        }
        else if (data.weather[0].main == ' Mist') {
            nature.src = "mist";
        }
        document.querySelector(".icon").style.display = "block";
    }
}
button.addEventListener("click", () => {
    checkweather(text.value);

})
