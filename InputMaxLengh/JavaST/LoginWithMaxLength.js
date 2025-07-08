let $ = document;
let input = $.getElementById("ipt");
let spanElem = $.getElementById("maxlength");
let inputmMaxLength = input.getAttribute("maxlength");

input.addEventListener('keyup', function(){
  spanElem.innerHTML = inputmMaxLength - input.value.length
})

// بقیه مربوط به استایل های سی اس اس هست

let body = $.body;
let degNum = 324;
let mainSection = $.querySelector(".main");
let atsin = $.querySelector(".Atsin");
let atsinHover = $.querySelector(".Atsin__Hover");

input.addEventListener("keypress", function () {
  atsin.style.display = "none";
  atsinHover.style.display = "block";
  spanElem.style.color = "#46c8fc";
  input.style.borderRight = "1px solid #46c8fc";
});

input.addEventListener("focus", () => {
  mainSection.style.border = "2px solid #46c8fc";
});
input.addEventListener("blur", () => {
  mainSection.style.border = "1px solid #c4c1c7";
  atsin.style.display = "block";
  atsinHover.style.display = "none";
  spanElem.style.color = "#c4c1c7";
  input.style.borderRight = "1px solid #c4c1c7";
});

setInterval(function () {
  degNum--;
  body.style.background =
    "linear-gradient(" + degNum + "deg, #96e7f2 27%, #3359c0)";
  console.log(body.style.background);
  if (degNum === 0) {
    degNum = 360;
  }
}, 500);

