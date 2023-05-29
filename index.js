function calculator () {
    // inputs
    var first_input = parseFloat(document.getElementById("first_input").value);
    var second_input = parseFloat(document.getElementById("second_input").value);
    // buttons
    var operator = document.getElementById("operator").value;
    // result
    var result;

    // branching
    if (operator === "plus") {
        result = first_input + second_input;
    } else if (operator === "minus") {
        result = first_input - second_input;
    } else if (operator === "multiply") {
        result = first_input * second_input;
    } else if (operator === "divide") {
        result = first_input / second_input;
    }

    document.getElementById("result").textContent = 'Результат: ' + result;
}