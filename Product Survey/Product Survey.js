document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submitFeedback();
  }
});
document.getElementById("submitBtn").onclick = submitFeedback;
document.getElementById("userFeedbackForm").onsubmit = (event) =>
  event.preventDefault();

function submitFeedback() {
  const age = document.getElementById("age").value;
  const designation = document.getElementById("designation").value;
  const email = document.getElementById("email").value;
  const feedbackText = document.getElementById("feedbackText").value;
  const job = document.getElementById("job").value;
  const productType = document.getElementById("productType").value;
  const userName = document.getElementById("name").value;
  alert("Thank you for your valuable feedback!");
  document.getElementById("userAge").innerHTML = age;
  document.getElementById("userDesignation").innerHTML = designation;
  document.getElementById("userEmail").innerHTML = email;
  document.getElementById("userFeedback").innerHTML = feedbackText;
  document.getElementById("userJob").innerHTML = job;
  document.getElementById("userName").innerHTML = userName;
  document.getElementById("userProductChoice").innerHTML = productType;
  document.getElementById("userInfo").style.display = "block";
}
