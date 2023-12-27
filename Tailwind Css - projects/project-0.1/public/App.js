const btn = document.getElementById("login-btn");
const password = document.getElementById("password-input");
const userName = document.getElementById("userName-input");
const revealPassword = document.getElementById("reveal-password");
const alertELW = document.getElementById("wrong-alert-Validation");
const alertELC = document.getElementById("correct-alert-Validation");
const alertbox = alertELW.classList;
const alertbox2 = alertELC.classList;
const passwordVisual = revealPassword.classList;
const alert_TIMER = 5000;

//
btn.addEventListener("click", () => {
  if (userName.value === "") {
    alertMessage("Username is Empty", 0);
    return;
  } else if (password.value === "") {
    alertMessage("Password is Empty", 0);
    return;
  } else if (
    userName.value === "sribalan98" &&
    password.value === "mypassword"
  ) {
    alertMessage("✅", 1);
  } else {
    alertMessage("Incorrect Username or Password", 0);
    return;
  }
});

function alertMessage(msg, valid) {
  if (valid === 0) {
    alertbox.remove("hidden");
    alertELW.textContent = msg;
    setTimeout(() => {
      alertbox.add("hidden");
    }, alert_TIMER);
  } else if (valid == 1) {
    // alertbox.add("hidden");
    alertbox2.remove("hidden");
    alertELC.textContent = msg;
    setTimeout(() => {
      alertbox2.add("hidden");
    }, alert_TIMER);
  }
}

revealPassword.addEventListener("click", () => {
  if (password.getAttribute("type") === "password") {
    passwordVisual.remove("fa-solid");
    passwordVisual.add("fa-regular");
    password.setAttribute("type", "text");
  } else {
    passwordVisual.remove("fa-regular");
    passwordVisual.add("fa-solid");
    password.setAttribute("type", "password");
  }
});

// *
// Typing Effect using javacript => helped site("https://tailwindflex.com/@samuel33/typewriter-effect")
const headerEffect = document.getElementById("headerEffect");
let i = 0;
let j = 0;

const words = ["Welcome To ", "Tailwind Project ", "By ", "Sribalan.Dev "];

let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    headerEffect.textContent = currentWord.substring(0, j - 1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    headerEffect.textContent = currentWord.substring(0, j + 1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 250);
}
type();
