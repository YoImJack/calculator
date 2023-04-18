let firstNumber = null;
let secondNumber = null;
let operator = null;
let result = null;

function results(input) {
  document.getElementById("calculations").insertAdjacentHTML('beforeend', input);
  const inputAsString = `${input}`; // cast to a string

  if (operator === null) {
    // If operator is null, update firstNumber
    if (firstNumber === null) {
      firstNumber = inputAsString;
    } else {
      firstNumber += inputAsString;
    }
  } else {
    // If operator is not null, update secondNumber
    if (secondNumber === null) {
      secondNumber = inputAsString;
    } else {
      secondNumber += inputAsString;
    }
  }
}

function clearResults() {
  document.getElementById("calculations").innerHTML = "";
  firstNumber = null;
  secondNumber = null;
  operator = null;
  result = null;
}

function calculateResult() {
  console.log(firstNumber, secondNumber);
  if (firstNumber === null || secondNumber === null) {
    return null;
  }

  const num1 = Number(firstNumber);
  const num2 = Number(secondNumber);

  if (isNaN(num1) || isNaN(num2)) {
    return null;
  }

  switch (operator) {
    case "+":
      return Number(firstNumber) + Number(secondNumber);
    case "-":
      return Number(firstNumber) - Number(secondNumber);
    case "*":
      return Number(firstNumber) * Number(secondNumber);
    case "/":
      return Number(firstNumber) / Number(secondNumber);
    default:
      return null;
  }
}

function enterButton() {
  if (result === null) {
    // Calculate the result and update the calculations element
    const result = calculateResult();
    if (result !== null) {
      document.getElementById("calculations").innerHTML = result;
    }
  }
  // Set firstNumber to the result, and reset secondNumber and operator
  firstNumber = result;
  secondNumber = null;
  operator = null;
}

function setOperator(op) {
  // Set the value of the operator
  if (firstNumber !== null && operator === null) {
    operator = op;
    document.getElementById("calculations").insertAdjacentHTML('beforeend', op);
  } else if (secondNumber !== null && operator !== null) {
    const result = calculateResult();
    if (result !== null) {
      document.getElementById("calculations").innerHTML = result + op;
      firstNumber = result;
      secondNumber = null;
      operator = op;
    }
  } else if (firstNumber !== null && operator !== null && secondNumber === null) {
    operator = op;
    document.getElementById("calculations").innerHTML = firstNumber + op;
  }
}