$(document).ready(function () {
  var result = "";
  var prevEntry = 0;
  var operation = null;
  var currentEntry = "";
  var holder = "";
  updateScreen(result);

  $(".button").on("click", function (evt) {
    var buttonPressed = $(this).html();
    console.log(buttonPressed);

    if (buttonPressed === "C") {
      result = 0;
      currentEntry = "0";
    } else if (isNumber(buttonPressed)) {
      if (currentEntry === "0") currentEntry = buttonPressed;
      else currentEntry = currentEntry + buttonPressed;
    } else if (isOperator(buttonPressed)) {
      prevEntry = parseFloat(currentEntry);
      operation = buttonPressed;
      currentEntry = holder;
    } else if (buttonPressed === "=") {
      currentEntry = operate(prevEntry, currentEntry, operation);
      operation = null;
    }

    updateScreen(currentEntry);
  });
});

updateScreen = function (displayValue) {
  var displayValue = displayValue.toString();
  $("#display").val(displayValue.substring(0, 10));
};

isNumber = function (value) {
  return !isNaN(value);
};

isOperator = function (value) {
  return value === "%" || value === "*" || value === "+" || value === "-";
};

operate = function (a, b, operation) {
  a = parseFloat(a);
  b = parseFloat(b);
  console.log(a, b, operation);
  if (operation === "+") return a + b;
  if (operation === "-") return a - b;
  if (operation === "*") return a * b;
  if (operation === "%") return a / b;
};
