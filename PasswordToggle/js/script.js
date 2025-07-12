// Functions for select elems with id & class
var $ = document;
function _id(id_name) {
  return $.getElementById(id_name);
}

function _class(class_name) {
  return $.getElementsByClassName(class_name);
}
let ss = $.querySelector;
// Select Elems
var togglePassword = $.querySelector(".toggle-password");
var passwordField = _id("password-field");

// Fire click event on eye icon
togglePassword.addEventListener("click", function () {
  if (passwordField.type === "text") {
    passwordField.type = "password";
    togglePassword.classList.remove("active");
  } else {
    passwordField.type = "text";
    togglePassword.classList.add("active");
  }
});
