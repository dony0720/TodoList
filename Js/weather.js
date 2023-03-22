const weather = document.querySelector("#weather");
const API_KEY = "4dd7add724570dbc3c2270897dd5257b";

function onGeoOk(position) {
    console.log(position)
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url) // 받은 요청 (response)을 then 메서드 콜백인자로 보낸다
        .then((response) => response.json()) 
        // response의 json() 메서드를 호출한다
        // 응답내용을 json으로 변환 한 후 다음 then의 콜백인자로 넘겨준다
        .then((data) => { // 넘겨받은 값을 통해 필요한 정보를 추출한다
            weather.innerText = `${data.name} / ${data.weather[0].main} / ${data.main.temp} `;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// 장치의 현재 위치를 가져옴, 위치를 얻는데 성공지 onGeok 실행 실패시 onGeoError 실행  
