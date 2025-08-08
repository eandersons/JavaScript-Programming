function displayResult(result) {
  document.getElementById("result").textContent = `The result is: ${result}`;
}

function multiply(a, b) {
  debugger;

  return a * b;
}

function performOperation() {
  let num1 = parseInt(document.getElementById("input1").value);
  let num2 = parseInt(document.getElementById("input2").value);

  if (!isNaN(num1) && !isNaN(num2)) {
    displayResult(multiply(num1, num2));
  } else {
    displayResult("Please enter valid numbers!");
  }
}
