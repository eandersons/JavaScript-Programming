function add(a, b) {
  debugger;

  return a + b;
}

function displayResult(result) {
  document.getElementById("result").textContent = `The result is: ${result}`;
}

function divide(a, b) {
  debugger;

  return a / b;
}

function multiply(a, b) {
  debugger;

  return a * b;
}

function performOperation() {
  let num1 = parseInt(document.getElementById("input1").value);
  let num2 = parseInt(document.getElementById("input2").value);

  if (!isNaN(num1) && !isNaN(num2)) {
    displayResult(
      `addition - ${add(num1, num2)}; ` +
        `multiplication - ${multiply(num1, num2)}; ` +
        `division - ${divide(num1, num2)}`,
    );
  } else {
    displayResult("Please enter valid numbers!");
  }
}
