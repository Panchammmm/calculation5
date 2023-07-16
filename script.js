// Get the result input field
var resultField = document.getElementById('result');

// Function to display the entered value
function display(value) {
  resultField.value += value;
}

// Function to evaluate the expression
function calculate() {
  try {
    resultField.value = eval(resultField.value);
  } catch (error) {
    resultField.value = 'Error';
  }
}

// Function to clear the input field
function clearField() {
  resultField.value = '';
}
