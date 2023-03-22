const images = ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg"];
const bgImage = document.createElement("img"); //img 태그 생성 
const changeBtn = document.querySelector(".changeBackgroud");
changeBtn.addEventListener("click", changeBackgroud);
const chosenImage = images[Math.floor(Math.random() * images.length)];
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);

function changeBackgroud() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    /*
    Math.floor 반올림, Math.random -> 0~1 범위 내에서 무작위 난수를 발생
    암호학적으로 안전한 난수를 발생시키지 않아 보안과 관련해서는 사용하지 말아야 한다 
    그 대신 Web Crypto API의 window.crypto.getRandomValues() 메소드를 이용하여야 한다.
    */
    bgImage.src = `img/${chosenImage}`; //img의 src를 생성
    document.body.appendChild(bgImage); //bdImage를 body에 자식 요소로 추가한다 

}


