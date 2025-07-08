const                 $ = document;
let body            = $.body
let colors          = $.querySelectorAll('.color')
let results         = $.querySelector('.results')
let add             = $.getElementById('addBox')
let remove          = $.getElementById('removeBox')
let input           = $.getElementById('input')

function addHandlerPlus(){
if (input.value.trim()){
  let newDiv      = $.createElement('div')
  let newDivTitle = $.createElement('p')
  newDivTitle.innerHTML = input.value
  newDiv.classList.add('result-box')
  newDiv.append(newDivTitle)
  results.append(newDiv)
  newDiv.style.backgroundColor = input.style.backgroundColor
  input.value = ""
  input.style.backgroundColor = "#fff"

}}

function removeNoteApp(event){
event.target.parentElement.remove()
}

function addHandler(event){
  if (event.keyCode === 13){
    if (input.value.trim()){
      let newDiv      = $.createElement('div')
      let newDivTitle = $.createElement('p')
      newDivTitle.innerHTML = input.value
      newDiv.classList.add('result-box')
      newDiv.append(newDivTitle)
      results.append(newDiv)
      newDivTitle.addEventListener('click', removeNoteApp)
      newDiv.style.backgroundColor = input.style.backgroundColor
      input.value = ""
      input.style.backgroundColor = "#fff"
    }}
    if (event.keyCode === 49){
      input.style.backgroundColor = colors[1].style.backgroundColor
      // input.value = input.value.slice(0 , -1)
    } else if (event.keyCode === 50){
      input.style.backgroundColor = colors[2].style.backgroundColor 
    } else if (event.keyCode === 51){
      input.style.backgroundColor = colors[3].style.backgroundColor
    } else if (event.keyCode === 52){
      input.style.backgroundColor = colors[4].style.backgroundColor
    } else if (event.keyCode === 53){
      input.style.backgroundColor = colors[5].style.backgroundColor
    } else if (event.keyCode === 54){
      input.style.backgroundColor = colors[6].style.backgroundColor
    } else if (event.keyCode === 55){
      input.style.backgroundColor = colors[7].style.backgroundColor
    } else if (event.keyCode === 56){
      input.style.backgroundColor = colors[8].style.backgroundColor
    } else if (event.keyCode === 57){
      input.style.backgroundColor = colors[9].style.backgroundColor
    } else if (event.keyCode === 48){
      input.style.backgroundColor = colors[10].style.backgroundColor
    }
}

colors.forEach(function (color) {
  color.addEventListener('click', function(event){
    input.style.backgroundColor = event.target.style.backgroundColor
  })})

remove.addEventListener('click' , function(){
  input.value = ""
  input.style.backgroundColor = "#fff"
})

  results.addEventListener("click", function(event){
  console.log(event.target);
  event.target.remove()
 })


add.addEventListener('click' , addHandlerPlus)
input.addEventListener('keydown' , addHandler)
body.addEventListener('keydown' , addHandler)