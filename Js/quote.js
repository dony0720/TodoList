const quotes = [
  {
    quote: `너희 염려를 다 주께 맡겨 버리라
            이는 저가 너희를 권고하심이니라`,
    author: "배드로전서 5장 7절",
  },
  {
    quote: `내게 능력 주시는 자 안에서 
            내가 모든 것을 할 수 있느니라`,
    author: "빌립보서 4장 13절",
  },
  {
    quote: `내 어여쁜 자야 일어나서 함께 가자`,
    author: "아가 2장 10절",
  },
  {
    quote: `나의 힘이 되신 여호와여 내가 주를 사랑하나이다`,
    author: "시편 18편 1절",
  },
  {
    quote: `여호와는 네게 복을 주시고 
            너를 지키시기를 원하며`,
    author: "민수기 6장 24절",
  },
  {
    quote: `너는 마음을 다하고 뜻을 다하고
            힘을 다하여 네 여호와를 사랑하라`,
    author: "신명기 6장 5절",
  },
];

const quote = document.querySelector(".quote-box div:nth-child(2)"); //element:nth-child(a) a에 원하는 순서(위->아래)의 번호를 넣어 자식을 선택 
const author = document.querySelector(".quote-box div:last-child");
const quoteBox = document.querySelector(".quote-box")
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `-${todaysQuote.author}-`;


function changeQuoute() {
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = todaysQuote.quote;
  author.innerText = `-${todaysQuote.author}-`;
  console.log(1);
}

quoteBox.addEventListener("click", changeQuoute)

