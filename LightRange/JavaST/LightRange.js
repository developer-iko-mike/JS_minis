const $ = document;
const body = $.body;
let continer = $.querySelector('.continer')
let input = $.getElementById('range')
let lightSun = $.getElementById('lightSun')
let darkSun = $.getElementById('darkSun')

input.addEventListener('change', function(event){
continer.style.filter = "brightness(" + event.target.value + "%)"
})

lightSun.addEventListener('click' , function(){
  continer.style.filter = "brightness(2%)"
})
darkSun.addEventListener('click' , function(){
  continer.style.filter = "brightness(100%)"
}) 