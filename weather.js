const weather = document.querySelector("#weather");
const API_KEY = "4dd7add724570dbc3c2270897dd5257b";

function onGeoOk(position) {
    console.log(position)
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            weather.innerText = `${data.name} / ${data.weather[0].main} / ${data.main.temp} `;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 장치의 현재 위치를 가져옴, 위치를 얻는데 성공지 onGeok 실행 실패시 onGeoError 실행  