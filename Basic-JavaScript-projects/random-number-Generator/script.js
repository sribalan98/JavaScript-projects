const displayNum = document.querySelector(".display-num");
const button = document.querySelector(".generatorR");
const mainBar = document.querySelector(".main-container");
const cancelBar = document.querySelector(".sub-container");
const spinnerWheel = document.querySelector(".spinner-wheel");
const cancelButton = document.querySelector(".cancel-btn");
displayNum.style.color = "lightgray";
button.disabled = false;

button.addEventListener("click", function (e) {
  button.disabled = true;
  spinnerWheel.classList.add("fa-spin");
  setTimeout(() => {
    const input_text = document.querySelector(".inputtext");
    if (input_text.value !== "") {
      spinnerWheel.classList.remove("fa-spin");
      let num = Number(input_text.value);
      let randomNum = Math.floor(Math.random() * num + 1);
      displayNum.textContent = randomNum;
      button.disabled = false;
      displayNum.style.color = "lightgreen";
    } else {
      spinnerWheel.classList.remove("fa-spin");
      console.log("is not empty");
      mainBar.style.display = "none";
      cancelBar.style.display = "flex";
    }
  }, 1000);
});

cancelButton.addEventListener("click", function () {
  cancelBar.style.display = "none";
  mainBar.style.display = "flex";
  button.disabled = false;
});
