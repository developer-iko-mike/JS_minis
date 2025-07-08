let $ = document;
let body = $.body
let menu = $.getElementById('RightClickMenu')

menu.style.display = 'none'

function contextmenuHandler(event){
event.preventDefault()
menu.style.display = 'block'
menu.style.left = event.pageX + "px"
menu.style.top = event.pageY + "px"
}
function clickmenuHandler(event){
 menu.style.display = 'none'
}

body.addEventListener('contextmenu' , contextmenuHandler)
body.addEventListener('click' , clickmenuHandler)
body.addEventListener('keyup', function (event) {
 if (event.key === "Escape"){
  menu.style.display = 'none'
 }
})