// HAMBURGER
const hamburgerBtn = document.querySelector(".hamburger");
const topNav = document.querySelector(".menu");
let menuOpen = false;

hamburgerBtn.addEventListener("click", () => {
    if (!menuOpen) {
        topNav.classList.add("menu-open");
        menuOpen = true;
    } else {
        topNav.classList.remove("menu-open");
        menuOpen = false;
    }
});

// EMAIL VALIDATION
const emailField = document.getElementById("emailField");
const button = document.getElementById("button");
const response = document.getElementById("response");

button.addEventListener("click", function () {
  const email = emailField.value;
  if (validateEmail(email)) {
    response.innerHTML = "Hey! this email is valid!!! 😍";
  } else {
    response.innerHTML = "Sorry, this email is not valid 😔";
  }
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}