let $ = document
let headerTitleC = $.querySelector("#c")
let headerTitleF = $.querySelector("#f")
let input = $.querySelector(".main_input")
let result = $.querySelector(".result")
let buttonConvert = $.getElementById("convert")
let buttonReset = $.getElementById("reset")
let buttonChange = $.getElementById("change")

function changeing() {
    if (headerTitleC.innerHTML === "°c") {
        headerTitleC.innerHTML = "°F"
        headerTitleF.innerHTML = "°C"
        input.placeholder = "°F"
        $.title = "Convert °F To °C"
    } else {
        headerTitleC.innerHTML = "°C"
        headerTitleF.innerHTML = "°F"
        input.placeholder = "°C"
        $.title = "Convert °C To °F"
    }
} // مشکل این فانکشن اینکه بعد دو بار تکرار نمیشه

function reseting() {
    input.value = ""
    result.style.opacity = "0.005"
}
function converting() {
    if (input.value === "") {
        result.style.opacity = "1.0"
        result.style.color = "#ff0000"
        result.innerHTML = "Please Enter a Number To Convert"
    } else if (isNaN(input.value)) {
        result.style.opacity = "1.0"
        result.style.color = "#ff0000"
        result.innerHTML = "Just Enter a Number"
    } else {
        if (input.placeholder === "°C") {
            let finalReslut = (input.value * 1.8) + 32
            result.innerHTML = input.value + "°c to " + finalReslut.toFixed(2) + "°f"
            result.style.opacity = "1.0"
            result.style.color = "#fff900"
        } else {
            let finalReslut = (input.value - 32) * 5 / 9
            result.innerHTML = input.value + "°F to " + finalReslut.toFixed(2) + "°C"
            result.style.opacity = "1.0"
            result.style.color = "#fff900"
        }
    }
}

buttonReset.addEventListener("click", reseting)
buttonChange.addEventListener("click", changeing)
buttonConvert.addEventListener("click", converting)