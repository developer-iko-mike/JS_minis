let $ = document;
let num0 = $.getElementById("number0");
let num1 = $.getElementById("number1");
let num2 = $.getElementById("number2");
let num3 = $.getElementById("number3");
let num4 = $.getElementById("number4");
let num5 = $.getElementById("number5");
let num6 = $.getElementById("number6");
let num7 = $.getElementById("number7");
let num8 = $.getElementById("number8");
let num9 = $.getElementById("number9");
const ashar = $.getElementById("ashar");
const sum = $.getElementById("sum");
const tafrig = $.getElementById("tafrig");
const zarb = $.getElementById("zarb");
const taghsim = $.getElementById("taghsim");
const baghimande = $.getElementById("baghimande");
const clean = $.getElementById("clean");
const remove = $.getElementById("remove");
const deletes = $.getElementById("delete");
const mosavi = $.getElementById("mosavi");
let result = $.getElementById("outpos");

function resultnum0() {
  result.innerHTML += 0;
}
function resultnum1() {
  result.innerHTML += 1;
}
function resultnum2() {
  result.innerHTML += 2;
}
function resultnum3() {
  result.innerHTML += 3;
}
function resultnum4() {
  result.innerHTML += 4;
}
function resultnum5() {
  result.innerHTML += 5;
}
function resultnum6() {
  result.innerHTML += 6;
}
function resultnum7() {
  result.innerHTML += 7;
}
function resultnum8() {
  result.innerHTML += 8;
}
function resultnum9() {
  result.innerHTML += 9;
}
function removefunc() {
  result.innerHTML = "";
}
function asharfunc() {
  result.innerHTML += ".";
}
function sumfunc() {
  result.innerHTML = "";
  result;
}
num0.addEventListener("click", resultnum0);
num1.addEventListener("click", resultnum1);
num2.addEventListener("click", resultnum2);
num3.addEventListener("click", resultnum3);
num4.addEventListener("click", resultnum4);
num5.addEventListener("click", resultnum5);
num6.addEventListener("click", resultnum6);
num7.addEventListener("click", resultnum7);
num8.addEventListener("click", resultnum8);
num9.addEventListener("click", resultnum9);
remove.addEventListener("click", removefunc);
ashar.addEventListener("click", asharfunc);
sum.addEventListener("click", sumfunc);
