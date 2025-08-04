// Global scope
var globalVar = "I am a global variable.";
let globalLet = "I also am global, but scoped with `let`.";
const globalConst = "I am a global constant.";

{
  // Block scope
  var blockVar = "I am a block-scoped `var`.";
  let blockLet = "I am a block-scoped `let`.";
  const blockConst = "I am a block-scoped `const`.";
}

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);
// console.log(blockVar);
// console.log(blockLet);

function show() {
  var functionVar = "I am a block-scoped `var` in a function.";
  let functionLet = "I am a block-scoped `let` in a function.";
  const functionConst = "I am a block-scoped `const` in a function.";
  console.log(functionVar);
  console.log(functionLet);
  console.log(functionConst);
}

show();

// console.log(functionVar);
// console.log(functionLet);
// console.log(functionConst);

{
  const pi = 3.14;
  let me = "Let me!";
  var something = "nothing";
  console.log(pi, me, something);
  // pi = 3.1;
  me = "This is not me!";
  something = "Less is more.";
  console.log(pi, me, something);
}

pi = 3.1;
me = "I";
something = "Everything";
console.log(pi, me, something);
