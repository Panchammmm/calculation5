// Get the result input field
var resultField = document.getElementById('result');

// Function to display the entered value
function display(value) {
  resultField.value += value;
}

// Function to evaluate the expression
function calculate() {
  try {
    resultField.value = evaluateExpression(resultField.value);
  } catch (error) {
    resultField.value = 'Error';
  }
}

// Function to clear the input field
function clearField() {
  resultField.value = '';
}

// Function to handle backspace
function backspace() {
  resultField.value = resultField.value.slice(0, -1);
}

// Custom function to evaluate expression without using eval
function evaluateExpression(expression) {
  return Function('"use strict";return (' + expression + ')')();
}

// Function to handle 'e', 'log', and '%'
function calculateSpecial(operation) {
  if (operation === 'e') {
    resultField.value += Math.E;
  } else if (operation === 'log') {
    resultField.value = Math.log(resultField.value);
  } else if (operation === '%') {
    resultField.value = eval(resultField.value) / 100;
  }
}
