let $ = document;
let body = $.body;
let aboutSection = $.querySelector(".about");
let hiddenBox = $.querySelector(".hidden_box");
let resultKey = $.getElementById("eventKey");
let resultLocation = $.getElementById("eventLocation");
let whareKey = $.getElementById("whareKey");
let resultWhich = $.getElementById("eventWhich");
let resultCode = $.getElementById("eventCode");
let result = $.getElementById("result");

body.addEventListener("keydown", function (event) {
  event.preventDefault();
  hiddenBox.style.display = "none";
  result.style.display = "block";
  aboutSection.style.display = "flex";

  console.log(event);
  result.innerHTML = event.keyCode;
  resultKey.innerHTML = event.key;
  resultLocation.innerHTML = event.location;
  if (event.location === 1) {
    whareKey.innerHTML = "left side modifier keys";
  } else if (event.location === 2) {
    whareKey.innerHTML = "right side modifier keys";
  } else if (event.location === 3) {
    whareKey.innerHTML = "numpad keys modifier keys";
  } else if (event.location === 0) {
    whareKey.innerHTML = "keyboard type word modifier keys";
  } else {
    console.log("undifind");
  }
  resultWhich.innerHTML = event.keyCode;
  resultCode.innerHTML = event.code;
});
