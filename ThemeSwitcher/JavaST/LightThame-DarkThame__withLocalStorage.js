const  $ = document;
const body = $.body;
let darkModebtn = $.querySelector('.circle')
let btn = $.querySelector('button')
let moon = $.getElementById('moon')

darkModebtn.addEventListener('click', function(){
 $.body.classList.toggle('dark')

 if (body.className.includes('dark')){
   moon.style.display = 'none'
   localStorage.setItem("ThameBody" , "drk")
 } else {
  moon.style.display = 'block'
  localStorage.setItem("ThameBody" , "wit")
 }
})

window.onload = function(){
 let thame = localStorage.getItem("ThameBody")
if (thame === "drk"){
 moon.style.display = 'none'
 localStorage.setItem("ThameBody" , "drk")
 $.body.classList.toggle('dark')
}
console.log(thame);
}