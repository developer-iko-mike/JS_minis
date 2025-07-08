const $ = document;

let preveat = $.getElementById('preveat')
let image   = $.querySelector('#bg')
let next    = $.getElementById('next')
let indexId = 0

let srcArray = [
  {id: 1, src: "../Assets/bg1.png"},
  {id: 2, src: "../Assets/bg2.png"},
  {id: 3, src: "../Assets/bg3.png"},
  {id: 4, src: "../Assets/bg4.png"},
  {id: 5, src: "../Assets/bg5.png"},
  {id: 6, src: "../Assets/bg6.jpg"},
  {id: 7, src: "../Assets/bg7.jpg"},
  {id: 8, src: "../Assets/bg8.jpg"},
  {id: 9, src: "../Assets/bg9.jpg"},
 {id: 10, src: "../Assets/bg10.jpg"},
 {id: 11, src: "../Assets/bg11.jpg"},
]

function preHandler(){
  indexId--
if (indexId < 0){
  indexId = srcArray.length - 1
}
image.src = srcArray[indexId].src
}

function nextHandler(){
  indexId++;
  if (indexId > srcArray.length - 1){
  indexId = 0
  } 
image.src = srcArray[indexId].src
}

setInterval(nextHandler ,10000)

preveat.addEventListener('click' , preHandler)
next.addEventListener('click' , nextHandler)