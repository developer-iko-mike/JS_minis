const $ = document;
const body = $.body;
let keys = $.querySelectorAll(".key")
let result = $.getElementById("result");

body.addEventListener("keypress" , function(event){
  if (event.keyCode === 13){
    result.innerHTML += "_"
  } else {
    result.append(event.key)
  }
})
body.addEventListener("keyup" , function(event){
  event.preventDefault()
  if (event.keyCode === 8){
      result.innerHTML = result.innerHTML.slice(0 ,-1)
    }
  let key = $.getElementById(event.code)
  key.classList.add("clickKey")
  setTimeout (function(){
    key.classList.remove("clickKey")
  },500)
  if (event.keyCode === 46){
    result.innerHTML = ""
  }})