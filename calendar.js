/*
const Date = new Date(); 변수 설정시  
Uncaught SyntaxError: Identifier 'date' has already been declared 발생 
*/

// 날짜 가져오기 

let dt = new Date();
function renderCalendar() {
  const view_year = dt.getFullYear();
  const view_month = dt.getMonth();
  document.querySelector(".year-month").textContent = `${view_year}년 ${view_month + 1}월`

  const preLast = new Date(view_year, view_month, 0) // 이전달 마지막 날짜 
  const thisLast = new Date(view_year, view_month + 1, 0) // 이번달 마지막 날짜 

  const preDate = preLast.getDate();
  //  현지 시간 기준 일을 반영 (1~31)
  const preDay = preLast.getDay();
  /*  
      현지 시간 기준 요일 반영(0~6)
      일요일: 0, 월요일: 1, 화요일: 2 
  */

  const tdDate = thisLast.getDate(); // 이번달 마지막 날짜의 요일 값
  console.log(tdDate);
  const tdDay = thisLast.getDay(); // 이번달 마지막 날짜의 인덱스 값

  const preDates = [];
  const thisDates = [...Array(tdDate+1).keys()].slice(1)  
  const nextDates = [];
  /*
  1. Array(n)으로 배열을 만들면 길이가 n인 배열이 생성됩니다. (이때 모든 요소들은 undefined)
  2. 그런데 모든 요소들이 empty 값이기 때문에 keys() 메서드를 활용하면 0부터 n - 1까지의 Array Iterator가 생성
     Iterator = 반복 처리(iteration)가 가능한 객체
  3. ...전개 구문을 통해서 이 Array Iterator를 배열로 만들어 내면 0부터 n-1까지의 배열을 얻어낼 수 있음.
  4. 그래서 이번 달 마지막 날짜를 + 1을 해주어 n에 전달
  5. 제일 앞에 있는 0을 없애기 위해서 slice 메서드를 활용
  */

  if (preDay !== 6) {
    for (let i = 0; i < preDay + 1; i++) {
      preDates.unshift(preDate - i);
    }
  }
  /* 지난달 마지막 요일이 토요일인 경우(index값이 6) 출력할 필요가 없음 
  반복문 - 0(index값 0 =일요일) 시작으로 해서 마지막 요일(preDay)까지 반복 
  배열안에 마지막날을 시작으로 1씩 감소한 값을 배열 앞에 채워 넣었습니다
  */

  for (let i = 1; i < 7 - tdDay; i++) {
    nextDates.push(i);
  }
  const dates = preDates.concat(thisDates, nextDates); // 배열을 합침 
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(tdDate);
  /*
  indexOf 함수는, 문자열(string)에서 특정 문자열(searchvalue)을 찾고, 
  검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴합니다.
  */
  dates.forEach((date, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1
      ? 'this'
      : 'other';

    dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;;
  })
  //dates.forEach((배열값,인덱스값))

  document.querySelector('.dates').innerHTML = dates.join('');
}
const goPre = document.querySelector(".go-pre");
const goNext = document.querySelector(".go-next");
const goTd = document.querySelector(".go-today")
function preMonth() {
  dt.setMonth(dt.getMonth() - 1)
  renderCalendar();
}

function nextMonth() {
  dt.setMonth(dt.getMonth() + 1)
  renderCalendar();
}

// element.setMonth(element.getMonth())는 12월이 넘어갈때 자동으로 연도가 바뀜  

function todaybtn(){
  dt = new Date();
  renderCalendar();
}

renderCalendar()
goPre.addEventListener("click", preMonth);
goNext.addEventListener("click", nextMonth);
goTd.addEventListener("click", todaybtn);