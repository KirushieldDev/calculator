const display = document.getElementById("display");

function addDisplay(equation) {
  display.value += equation;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    alert("Enter a valid equation :/");
  }
}

function clearDisplay() {
  display.value = "";
}
