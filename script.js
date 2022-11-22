// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var existing_count = document.getElementById("existing-haul-count-input").value;
    var existing_rate = document.getElementById("existing-haul-rate-input").value;
    var existing_cost = (existing_count)*(existing_rate)
    document.getElementById("calculate-current-btn").value = existing_cost;
}
