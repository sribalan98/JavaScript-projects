function Calculator(btnID, inputID) {
  const btn = btnID;
  let input = inputID;
  btn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      if (
        input.value == "Syntax Error" ||
        input.value == "Infinity" ||
        input.value == "NaN" ||
        input.value == "undefined"
      ) {
        input.value = "";
      }
      if (event.target.value != "=" && event.target.value != "c") {
        input.value += event.target.value;
      } else if (event.target.value === "c") {
        input.value = "";
      } else if (event.target.value === "=") {
        try {
          input.value = eval(input.value);
        } catch {
          input.value = "Syntax Error";
        }
      }
    });
  });
}

export default Calculator;
