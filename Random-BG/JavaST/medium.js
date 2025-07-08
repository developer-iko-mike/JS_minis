let body = document.body

setInterval(function() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)
    let rgb = "rgb(" + red + "," + green + "," + blue + ")"
    
    body.style.backgroundColor = rgb
    console.log(rgb);
}, 500)