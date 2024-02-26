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

// Custom function to evaluate expression without using eval
function evaluateExpression(expression) {
  return Function('"use strict";return (' + expression + ')')();
}
