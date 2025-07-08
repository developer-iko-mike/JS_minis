let $ = document
const body = $.body
let error = $.querySelector('.hidden__box')
let zarb = $.getElementById('zarb')
let result = $.getElementById('result')
let num2 = 0

zarb.addEventListener('keyup', function (event){
 if (event.key === "Enter"){
 for (let i = 0; i < 10; i++) {
  num2++;
// console.log((zarb.value * num2) + " , ");
let newElam = $.createElement('span')
newElam.innerHTML = (zarb.value * num2) + " , "
newElam.style.color = "#fff"
newElam.style.fontSize = "4rem"
function removeNewElam(event){
  if (event.keyCode === 8){
    newElam.innerHTML = ""
    result.innerHTML = ""
    num2 = 0
 }}
 error.style.top = "0rem"
 error.style.left = "0"
 setTimeout (function(){
  body.style.overflow = "hidden"
     error.style.top = "-5rem"
 error.style.left = "-35rem"
    console.log("error");
  },10000)
result.append(newElam)


zarb.addEventListener('focus', function(){
  newElam.innerHTML = ""
  result.innerHTML = ""
  num2 = 0
 })}
 zarb.value = ""
 body.addEventListener('keydown', removeNewElam)
}})