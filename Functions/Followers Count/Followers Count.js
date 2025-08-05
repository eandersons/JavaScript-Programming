let count = 0;

function checkCountValue() {
  if (count === 10) {
    alert("Your Fakegram post gained 10 followers. Congratulations!");
  } else if (count === 20) {
    alert("Your Fakegram post gained 20 followers. Keep it up!");
  }
}

function displayCount() {
  document.getElementById("countDisplay").innerHTML = count;
}

function increaseCount() {
  count++;
  displayCount();
  checkCountValue();
}

function resetCount() {
  count = 0;
  displayCount();
  alert("Your Fakegram post followers count was reset.");
}
