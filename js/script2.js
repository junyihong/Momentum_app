// // 객체 사용하기
// // 객체의 특성들은 {} 중괄호 안에 입력하며, 콤마(,)로 연결한다.
// ---------------------------------------------------------------------------------
// 객체 player 생성하기
// const player = {
//     name: "junyihong",
//     points : 124,
//     gender : "male",
//     age : 26
// };
// player.countries = "Republic of Korea";
// player.points = player.points + 15 ;
// console.log(player);


// ------------------------------------------------------------------------------
// const player = {
//     name: "junyihong",
//     sayHello: function (otherPersonsName) {
//         console.log("Hello, " + otherPersonsName + ". Nice to meet you!");
//     }
// }
// player.sayHello(player.name);

//------------------------------------------------------------------------------
// function sayHello(nameOfPerson, age) {
//     console.log("Hello, My name is "+nameOfPerson+". and I'm "+age+" years old.");
// }

// sayHello("Lynn", 10);
// sayHello("Smith", 23);
// sayHello("Martin", 36);
// -----------------------------------------------------------------------------
//return 활용 계산기
// const calculator = {
//     plus: function (x, y) {
//         return x + y;
//     },
//     minus: function (x, y) {
//         return (x - y);
//     },
//     divide: function (x, y) {
//         return (x / y);
//     },
//     multiplication: function (x, y) {
//         return (x * y);
//     },
//     square: function (x, y) {
//         return (x ** y);
//     },
// };

// const plusResult = calculator.plus(2, 3);
// const minusResult = calculator.minus(plusResult, 10);
// const divideResult = calculator.divide(10, minusResult);
// const multiplicationResult = calculator.multiplication(divideResult, plusResult);
// const squareResult = calculator.square(divideResult, minusResult);
// ---------------------------------------------------------------------------------

// const age = 26;
// function calculatorKrAge(ageOfForeigner) {
//     return ageOfForeigner + 2;
// }
// const KrAge = calculatorKrAge(age);
// console.log(KrAge);

// ---------------------------------------------------------------------------------
// 나이판별 조건문
// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age)) {
//     console.log("Please write a number.")
// } else if (age < 20) {
//     console.log("You are too young.")
// } else  { 
//     console.log("You are adult.")
// }
//-----------------------------------------------------------------------------------
// ID로 HTML요소 가져오기
// const title = document.getElementById("vv");
// title.innerText = "title.innerText = 변경된 제목'에 의해 변경된 제목";
// console.log(title.id);
// console.log(title.className);
// ------------------------------------------------------------------------------------
//addEventListner 활용하기
// const hellos = document.querySelector("div.hello h2");

// function helloClickCount() {
//     console.log("Hello was Clicked!!")
// }
// function handelMouseEnter(){
//     hellos.innerText = "Mouse is here!"
// }
// function handelMouseLeave(){
//     hellos.innerText = "Mouse is gone!"
// }
// function handelWindowResize(){
//     document.body.style.backgroundColor = "tomato"
// }
// function handelWindowCopy(){
//     alert("복사가 허용되지 않은 글입니다.")
// }
// function handelWindowOffline(){
//     alert("와이파이가 연결되지 않았습니다.")
// }
// function handelWindowOnline(){
//     alert("와이파이가 연결되어 있습니다.")
// }

// hellos.onclick = helloClickCount;
// hellos.addEventListener("mouseleave",handelMouseLeave);
// hellos.addEventListener("mouseenter", handelMouseEnter)
// window.addEventListener("resize", handelWindowResize);
// window.addEventListener("copy", handelWindowCopy);
// window.addEventListener("offline", handelWindowOffline);
// window.addEventListener("online", handelWindowOnline);
// //--------------------------------------------------------------------------------------------
// const hellos = document.querySelector("div.hello h2");

// function handelTitleClick() {
//     const currentColor = hellos.style.color;
//     let newColor;
//     if (currentColor === "blue") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     hellos.style.color = newColor;
// }
// hellos.addEventListener("click", handelTitleClick);