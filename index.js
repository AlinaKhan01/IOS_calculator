const display = document.getElementById("display");
let val = "";  // Initialize val as an empty string

function addToDisplay(input) {
    if (input == "*") {
        display.value += "x";
        val += "*";  // Add the correct operator to val
    } else if (input == "/") {
        display.value += "÷";
        val += "/";  // Add the correct operator to val
    } 
     else {
        display.value += input;
        val += input;  // Add the input to val
    }
}

function clearDisplay() {
    display.value = "";
    val = "";  // Reset val
}

function calc() {
    try {
        // Create a new function to evaluate the expression
        const result = new Function('return ' + val)();
        display.value = result;
        val = result.toString();  // Update val to the result for further calculations
    } catch (error) {
        display.value = "Error";
        val = "";  // Reset val on error
    }
}
