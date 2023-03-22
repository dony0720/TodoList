const mp3 = new Audio("bird.mp3")
const soundBtn = document.querySelector(".volume-controll");
const onBtn = document.querySelector(".on")
const pauseBtn = document.querySelector(".pause")
const offBtn = document.querySelector(".off")

function play() {
    mp3.loop = true;
    mp3.volume = soundBtn.value;
    mp3.play();
    console.log(soundBtn.value)
}

function pause() {
    mp3.pause();

}

function stop() {
    mp3.pause();
    mp3.currentTime = 0;
}
onBtn.addEventListener("click", play)
pauseBtn.addEventListener("click", pause)
offBtn.addEventListener("click", stop)
