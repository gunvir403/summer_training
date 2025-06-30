
const display = document.getElementById("display");
function appendToDisplay(value) {
        display.value += value;
}
function backSpace() {
    display.value = display.value.slice(0, -1);
}
function clearDisplay() {
    display.value = "";
}
function calculateResult() {
    try {
        display.value=eval(display.value);
    } catch (e) {
        display.value = "Error";
        console.log(e);
    }
}
document.getElementById("display").addEventListener("keydown", function(event) {
  const key = event.key;
  if (!/[0-9+\-*/().]/.test(key) && key !== "Backspace" && key !== "Enter" && key !== "ArrowLeft" && key !=="ArrowRight" && key !== "Delete") {
    event.preventDefault();
  }
  if (key === "Enter") {
    calculateResult();
  }
});