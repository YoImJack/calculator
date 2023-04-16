let firstNumber = null;
let secondNumber = null;
let operator = null;

function results(input) {
  document.getElementById("calculations").insertAdjacentHTML('beforeend', input);

  if (operator === null) {
    if (firstNumber === null) {
      // If firstNumber is null, set it to the input
      firstNumber = input;
    } else if (input !== '+' && input !== '-' && input !== '*' && input !== '/') {
      // Otherwise, concatenate the input to the existing firstNumber
      firstNumber += input;
    }
  } else {
    if (secondNumber === null) {
      // If secondNumber is null, set it to the input
      secondNumber = input;
    } else if (input !== '+' && input !== '-' && input !== '*' && input !== '/') {
      // Otherwise, concatenate the input to the existing secondNumber
      secondNumber += input;
    }
  }
}

function clearResults() {
  document.getElementById("calculations").innerHTML = "";
  firstNumber = null;
  secondNumber = null;
  operator = null;
}

function calculateResult() {
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
  // Calculate the result and update the calculations element
  const result = calculateResult();
  if (result !== null) {
    document.getElementById("calculations").innerHTML = result;
    // Set firstNumber to the result, and reset secondNumber and operator
    firstNumber = result;
    secondNumber = null;
    operator = null;
  }
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
  }
}
