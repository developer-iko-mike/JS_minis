const $ = document;
const body = $.body;
let continer = $.querySelector('.continer')
let input = $.getElementById('range')
let lightSun = $.getElementById('lightSun')
let darkSun = $.getElementById('darkSun')

input.addEventListener('input', function(event){
continer.style.filter = "brightness(" + event.target.value + "%)"
})

lightSun.addEventListener('click' , function(){
  continer.style.filter = "brightness(10%)"
  input.value = 10
})
darkSun.addEventListener('click' , function(){
  continer.style.filter = "brightness(100%)"
  input.value = 100
}) 