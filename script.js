
const display = document.getElementById('display');

// Append value to display
function append(value) {
  display.value += value;
}

// Clear the entire display
function clearDisplay() {
  display.value = '';
}

// Delete last character
function del() {
  display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
  try {
    let expression = display.value.replace('%', '*0.01'); // Convert % to proper operation
    display.value = eval(expression);
  } catch (e) {
    display.value = 'Error';
  }
}