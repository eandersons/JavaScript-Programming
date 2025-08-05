function totalAmount() {
  let totalAmount = 0;
  let groceryInputs = document.getElementsByClassName("grocery");

  for (let index = 0; index < groceryInputs.length; index++) {
    totalAmount += parseFloat(groceryInputs[index].value);
  }

  document.getElementById("result").innerText =
    `The total amount is: ${totalAmount}`;
}
