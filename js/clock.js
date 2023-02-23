const clock = document.querySelector("h2#clock");
// 시:분:초의 형식으로 함수사용
const calendar = document.querySelector("h2#calendar");

function getClock() {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${min}:${sec}`;
}
// 웹사이트 켜자마자 getClock 호출
getClock();
// 이후 1초 인터벌
setInterval(getClock, 1000);

function setCalendar() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2,"0");
    const day = String(date.getDate()).padStart(2,"0");
    calendar.innerText = `${year} - ${month} - ${day}`;
    console.log(year)
}

setCalendar();

