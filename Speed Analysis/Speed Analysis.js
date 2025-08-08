class ContentElements {
  static output = () => document.getElementById("output");
  static userInput = () => document.getElementById("userInput");
  static text = () => document.getElementById("inputText");
}

let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
  ContentElements.text().value = testText;
  let userInput = ContentElements.userInput();
  userInput.value = "";
  userInput.readOnly = false;
  userInput.focus();
  ContentElements.output().innerHTML = "";
  startTime = new Date().getTime();
}

function endTest() {
  endTime = new Date().getTime();
  const userInput = ContentElements.userInput();
  userInput.readOnly = true;
  let timeElapsed = (endTime - startTime) / 1000;
  let typedWords = userInput.value
    .split(/\s+/)
    .filter((word) => word !== "").length;
  ContentElements.output().innerHTML = `
    <h2>Typing Test Results:</h2>
    <p>Words typed: ${typedWords}</p>
    <p>Time elapsed: ${timeElapsed.toFixed(2)} seconds</p>
    <p>Words per Minute (WPM): ${
      timeElapsed !== 0 && !isNaN(typedWords)
        ? Math.round((typedWords / timeElapsed) * 60)
        : 0
    }</p>
  `;
}
