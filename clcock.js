const today = document.querySelector(".clock #day")
const clock = document.querySelector(".clock #time");



function ApClock() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = '';
  if (hours > 12) {
    hours -= 12
    ampm = '오후'
  } else {
    ampm = '오전'
  }
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  clock.innerText = `${ampm} ${hours}:${minutes}:${seconds}`;
}

function getDate() {
  const date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 10) {
    month = `0${month}`
  }
  if (day < 10) {
    day = `0${day}`
  }

  today.innerText = `${year}.${month}.${day}`;
}

getDate();
ApClock();
setInterval(ApClock,1000);

